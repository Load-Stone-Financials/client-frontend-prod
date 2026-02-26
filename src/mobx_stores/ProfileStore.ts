/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import axios, {
  type AxiosResponse,
} from "axios";
import { configure, makeAutoObservable, runInAction, toJS } from "mobx";
import { toast } from "react-hot-toast";
import BaseDirectories from "@/baseDir/baseDirectories";
import { BrowserLogger } from "@/common/logger/Logger";
import type { ApiUserProfile } from "@/types/response/getProfile.type";

configure({ enforceActions: "always" });

type Profile = {
  [key: string]: any;
};

type BusinessDetails = {
  [key: string]: any;
};

type BankDetails = {
  [key: string]: any;
};
type ObjectType = {
  [key: string]: any;
};

export class ProfileStore {
  notificationStatus: any = {};
  loadingData = true;
  submitting = false;
  changing = false;
  isPinExist = true;
  error = "";
  success = "";
  success_setting = "";
  userId = "";
  profile = {} as ApiUserProfile;
  businessDetails: BusinessDetails = {};
  bankDetails: BankDetails = {};
  dashboardBalances: ObjectType = {};
  state = [];
  city = [];
  bvn: any = {};
  shouldDirectToProfileSetup = false;
  token: any = sessionStorage.getItem("accessToken") || "";
  message = {
    type: "",
    msg: "",
  };
  messageSettings = {
    type: "",
    msg: "",
  };

  notifySuccess(message: string) {
    toast.success(message);
  }

  notifyError(message: string) {
    toast.error(message);
  }

  private logger!: BrowserLogger;
  private userProfile!: Profile;

  constructor() {
    makeAutoObservable(this);
    runInAction(() => {
      this.logger = new BrowserLogger(this.constructor.name);
      this.userProfile = JSON.parse(
        sessionStorage.getItem("user") || "{}"
      ) as Profile;
    });
  }

  getState() {
    axios
      .get(`${BaseDirectories.API_BASE_URL}/address/get-state`)
      .then((res: any) => {
        this.setState(res.data);
      })
      .catch((err: any) => {
        this.logger.error("error", err);
        return;
      });
  }

  getCity(cityByState: string) {
    if (cityByState?.length > 0) {
      axios
        .get(`${BaseDirectories.API_BASE_URL}/address/get-city/${cityByState}`)
        .then((res: any) => {
          this.setCity(res.data);
          return res.data;
        })
        .catch((err: any) => {
          this.logger.error("error", err);
          return;
        });
    }
  }

  createProfile(data: any) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);

    axios
      .post(
        `${BaseDirectories.API_BASE_URL}/users/create-profile-optimized`,
        data,
        {
          headers,
        }
      )
      .then((res: any) => {
        if (!res.data.error) {
          this.logger.info(
            `User | Create Profile | ${toJS(this.userProfile?.email)}`,
            res.data
          );
          toast.success("Profile created successfully");
          this.setMessage("success", "Profile created successfully");
          this.setToLocalStorage("user", res.data);
          setTimeout(() => {
            this.setMessage("", "");
          }, 3000);
        } else {
          this.logger.error(
            `User | Create Profile | ${toJS(this.userProfile?.email)}`,
            res.data.message
          );
          toast.error(`${res.data.message}`);
        }
        // if (res) {
        //   this.setToLocalStorage('isRegistered', true);
        // }
        this.setSubmitting(false);
      })
      .catch((err) => {
        this.logger.error(
          `User | Create Profile | ${toJS(this.userProfile?.email)}`,
          err
        );
        toast.error("An error occurred while creating profile.");
        console.error(
          `${err.response.data.message} #${err.response.data.statusCode}`
        );
        this.setMessage("error", err.response.data.message);
        setTimeout(() => {
          this.setMessage("", "");
        }, 4000);
        this.setSubmitting(false);
      });
  }

  //NOTE - Mary
  // validateBVN(bvn: string) {
  //   const headers = {
  //     accept: 'application/json',
  //     Authorization: `Bearer ${this.token}`,
  //     'Content-Type': 'application/json',
  //   };

  //   this.setSubmitting(true);

  //   const requestData = {
  //     bvn: bvn,
  //   };
  //   axios
  //     .post(`${BaseDirectories.API_BASE_URL}/users/validate-bvn`, requestData, {
  //       headers,
  //     })
  //     .then((res: any) => {
  //       if (res.data.error) {
  //         toast.error(res.data.message);
  //         this.setMessage('error', res.data.message);
  //         this.logger.info(
  //           `User | Validate BVN | ${toJS(this.userProfile?.email)}`,
  //           res.data,
  //         );
  //         setTimeout(() => {
  //           this.setMessage('', '');
  //         }, 4000);
  //       } else {
  //         this.setMessage('success', 'BVN validated successfully');
  //         this.setBvn(res.data.validateBvnResult);
  //         this.logger.info(
  //           `User | Validate BVN | ${toJS(this.userProfile?.email)}`,
  //           res.data,
  //         );
  //         setTimeout(() => {
  //           this.setMessage('', '');
  //         }, 100);
  //       }
  //       this.setSubmitting(false);
  //     })
  //     .catch((err) => {
  //       this.logger.error(
  //         `User | Validate BVN | ${toJS(this.userProfile?.email)}`,
  //         err,
  //       );
  //       toast.error('An error occurred while validating BVN.');
  //       console.error(err.response.data.message);
  //       this.setMessage('error', err.response.data.message);
  //       setTimeout(() => {
  //         this.setMessage('', '');
  //       }, 4000);
  //       this.setSubmitting(false);
  //     });
  // }

  getProfile() {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };
    // this.setToLocalStorage('user', null);
    const profile = window.sessionStorage.getItem("user");
    const itemObject = profile ? JSON.parse(profile) : null;

    this.setLoading(true);
    axios
      .get(`${BaseDirectories.API_BASE_URL}/users/get-profile`, {
        headers,
      })
      .then((res: AxiosResponse<ApiUserProfile>) => {
        this.setProfile(res.data);
        this.setToLocalStorage("user", res.data);
        runInAction(() => {
          this.userId = res.data._id;
          // if (
          //   res.data.nin === '' ||
          //   res.data.nin === 'NULL' ||
          //   ((res.data.bvn === 'NULL' || res.data.bvn === '') &&
          //     (res.data?.bvnData === null || res.data?.bvnData === undefined))
          // ) {
          //   this.setShouldDirectToProfileSetup(true);
          // }
        });

        if (res) {
          this.setToLocalStorage("isRegistered", true);
        }
      })
      .catch((err) => {
        if (err?.response?.data?.statusCode === 404) {
          this.shouldDirectToProfileSetup = true;
        }
        this.logger.error(
          `User | Get Profile | ${toJS(this.userProfile?.email)}`,
          err
        );
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  updatePersonalDetails(data: any) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);
    axios
      .put(`${BaseDirectories.API_BASE_URL}/users/update`, data, {
        headers,
      })
      .then((res: any) => {
        if (!res.data.error) {
          this.logger.info(
            `User | update Personal Details | ${toJS(this.userProfile?.email)}`,
            res.data
          );

          toast.success("Profile updated successfully.");
          this.setMessage("success", "Profile updated successfully");
          setTimeout(() => {
            this.setMessage("", "");
          }, 4000);
        } else {
          this.logger.error(
            `User | Create Profile | ${toJS(this.userProfile?.email)}`,
            res.data.message
          );
          toast.error(`${res.data.message}`);
        }
        this.setSubmitting(false);
      })
      .catch((err) => {
        this.logger.error(
          `User | update Personal Details | ${toJS(this.userProfile?.email)}`,
          err
        );
        toast.error("An error occurred while updating personal details.");
        console.error(err.response.data.message);
        this.setMessage("error", err.response.data.message);
        this.setSubmitting(false);
      });
  }

  updateBusinessDetails(data: any) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);
    axios
      .put(
        `${BaseDirectories.API_BASE_URL}/loan-details/update/organization`,
        data,
        {
          headers,
        }
      )
      .then((res: any) => {
        this.logger.info(
          `User | Update Business Details | ${toJS(this.userProfile?.email)}`,
          res.data
        );
        toast.success("Profile updated successfully.");
        this.setMessage("success", "Profile updated successfully");
        setTimeout(() => {
          this.setMessage("", "");
        }, 4000);
        this.setSubmitting(false);
      })
      .catch((err) => {
        this.logger.error(
          `User | Update Business Details | ${toJS(this.userProfile?.email)}`,
          err
        );
        toast.error("An error occurred while updating business details.");
        console.error(err.response.data.message);
        this.setMessage("error", err.response.data.message);
        this.setSubmitting(false);
      });
  }

  updateNotificationSettings(query: any) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);

    axios
      .post(
        `${BaseDirectories.API_BASE_URL}/users/change-notification-settings/${
          this.userId
        }?${new URLSearchParams(query).toString()}`,
        {},
        {
          headers,
        }
      )
      .then((res: any) => {
        toast.success("Notification updated successfully.");
        this.setMessage("success", "Notification updated successfully");
        setTimeout(() => {
          this.setMessage("", "");
        }, 4000);
        this.setSubmitting(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        this.setMessage("error", err.response.data.message);
        this.setSubmitting(false);
      });
  }

  getNotificationSettings() {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setLoading(true);
    axios
      .get(
        `${BaseDirectories.API_BASE_URL}/users/notification-settings/${this.userId}`,
        { headers }
      )
      .then((res: any) => {
        this.setLoading(false);

        runInAction(() => {
          this.notificationStatus = res.data;
        });
      })
      .catch((err) => {
        this.setLoading(false);
      });
  }

  verifyPhoneNumber(data: any, skipReload: boolean = false) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);
    axios
      .post(
        `${BaseDirectories.API_BASE_URL}/auth/phone-number-verification`,
        data,
        {
          headers,
        }
      )
      .then((res: any) => {
        this.logger.info(
          `User | Create Pin | ${toJS(this.userProfile?.email)}`,
          res.data
        );
        if (res.data.error) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          this.setMessage("success", "Pin created successfully!");

          // Mark profile as complete when PIN is created during profile setup
          if (skipReload) {
            console.log("ProfileStore: Marking profile setup as complete");
            const currentUser = JSON.parse(
              window.sessionStorage.getItem("user") || "{}"
            );
            const updatedUser = {
              ...currentUser,
              profileProgress: 100,
              title: "Profile Complete",
            };
            this.setToLocalStorage("user", updatedUser);
            // Prevent redirect back to profile setup after PIN creation
            this.shouldDirectToProfileSetup = false;
            // Set flag to indicate profile was just completed
            window.sessionStorage.setItem("profileJustCompleted", "true");
            console.log(
              "ProfileStore: Updated session storage with complete profile"
            );
          }
        }
        setTimeout(() => {
          this.setMessage("", "");
        }, 5000);
        // Only reload if not during profile setup
        if (!skipReload) {
          console.log("Reloading page because skipReload is false");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          console.log("Skipping page reload because skipReload is true");
        }
        if (res) {
          this.setToLocalStorage("isRegistered", true);
        }
        this.setSubmitting(false);
      })
      .catch((err) => {
        this.logger.error(
          `User | Create Pin | ${toJS(this.userProfile?.email)}`,
          err
        );
        toast.error("An error occurred while creating pin.");
        console.error(err.response.data.message);
        this.setMessage("error", err.response.data.message);
        setTimeout(() => {
          this.setMessage("", "");
        }, 6000);
        this.setSubmitting(false);
      });
  }

  createPin(data: any, skipReload: boolean = false) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);
    axios
      .post(
        `${BaseDirectories.API_BASE_URL}/transaction-pin/create-pin`,
        data,
        {
          headers,
        }
      )
      .then((res: any) => {
        this.logger.info(
          `User | Create Pin | ${toJS(this.userProfile?.email)}`,
          res.data
        );
        if (res.data.error) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          this.setMessage("success", "Pin created successfully!");

          // Mark profile as complete when PIN is created during profile setup
          if (skipReload) {
            console.log("ProfileStore: Marking profile setup as complete");
            const currentUser = JSON.parse(
              window.sessionStorage.getItem("user") || "{}"
            );
            const updatedUser = {
              ...currentUser,
              profileProgress: 100,
              title: "Profile Complete",
            };
            this.setToLocalStorage("user", updatedUser);
            // Prevent redirect back to profile setup after PIN creation
            this.shouldDirectToProfileSetup = false;
            // Set flag to indicate profile was just completed
            window.sessionStorage.setItem("profileJustCompleted", "true");
            console.log(
              "ProfileStore: Updated session storage with complete profile"
            );
          }
        }
        setTimeout(() => {
          this.setMessage("", "");
        }, 5000);
        // Only reload if not during profile setup
        if (!skipReload) {
          console.log("Reloading page because skipReload is false");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          console.log("Skipping page reload because skipReload is true");
        }
        if (res) {
          this.setToLocalStorage("isRegistered", true);
        }
        this.setSubmitting(false);
      })
      .catch((err) => {
        this.logger.error(
          `User | Create Pin | ${toJS(this.userProfile?.email)}`,
          err
        );
        toast.error("An error occurred while creating pin.");
        console.error(err.response.data.message);
        this.setMessage("error", err.response.data.message);
        setTimeout(() => {
          this.setMessage("", "");
        }, 6000);
        this.setSubmitting(false);
      });
  }

  /**
   * Async variant for onboarding flows (no forced reload).
   * Returns whether the PIN creation succeeded.
   */
  async createPinAsync(
    data: { newPin: string; confirmPin: string },
    markProfileComplete: boolean = true
  ): Promise<{ error: boolean; message?: string }> {
    const token =
      window.sessionStorage.getItem("accessToken") || this.token || "";
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);
    try {
      const res: AxiosResponse<any> = await axios.post(
        `${BaseDirectories.API_BASE_URL}/transaction-pin/create-pin`,
        data,
        { headers }
      );

      this.logger.info(
        `User | Create Pin | ${toJS(this.userProfile?.email)}`,
        res.data
      );

      if (res.data?.error) {
        const message = String(res.data?.message ?? "Unable to create pin");
        toast.error(message);
        this.setMessage("error", message);
        return { error: true, message };
      }

      const message = String(res.data?.message ?? "Pin created successfully!");
      toast.success(message);
      this.setMessage("success", "Pin created successfully!");

      if (markProfileComplete) {
        const currentUser = JSON.parse(
          window.sessionStorage.getItem("user") || "{}"
        );
        const updatedUser = {
          ...currentUser,
          profileProgress: 100,
          title: "Profile Complete",
        };
        this.setToLocalStorage("user", updatedUser);
        this.shouldDirectToProfileSetup = false;
        window.sessionStorage.setItem("profileJustCompleted", "true");
      }

      return { error: false, message };
    } catch (err: any) {
      this.logger.error(
        `User | Create Pin | ${toJS(this.userProfile?.email)}`,
        err
      );
      const message =
        err?.response?.data?.message || err?.message || "Unable to create pin";
      toast.error(message);
      this.setMessage("error", String(message));
      return { error: true, message: String(message) };
    } finally {
      this.setSubmitting(false);
    }
  }

  getDashboardBalances() {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    const profile = window.sessionStorage.getItem("user");
    const itemObject = profile ? JSON.parse(profile) : null;
    axios
      .get(`${BaseDirectories.API_BASE_URL}/users/dashboard-balances`, {
        headers,
      })
      .then((res: any) => {
        runInAction(() => {
          this.dashboardBalances = res.data.data;
        });
      })
      .catch((err) => {
        this.logger.error(
          `User | Get Dashboard balance | ${toJS(this.userProfile?.email)}`,
          err
        );
      })
      .finally(() => {
        runInAction(() => {
          this.setLoading(false);
        });
      });
  }

  updateArmDetails(data: any) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);
    axios
      .put(
        `${BaseDirectories.API_BASE_URL}/loan-details/update/arm-details`,
        data,
        {
          headers,
        }
      )
      .then((res: any) => {
        toast.success("Profile updated successfully");
        this.setMessage("success", "Profile updated successfully");
        runInAction(() => {
          this.setMessage("success", "Profile updated successfully");
        });
        setTimeout(() => {
          this.setMessage("", "");
        }, 5000);
        this.setSubmitting(false);
        return true;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        this.setMessage("error", err.response.data.message);
        this.setSubmitting(false);
        return false;
      });
  }

  updateArmDocumenDetails(data: any) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);
    axios
      .patch(
        `${BaseDirectories.API_BASE_URL}/loan-details/update/arm-document`,
        data,
        {
          headers,
        }
      )
      .then((res: any) => {
        toast.success("Document updated successfully");
        this.setMessage("success", "Document updated successfully");
        runInAction(() => {
          this.setMessage("success", "Document updated successfully");
        });
        setTimeout(() => {
          this.setMessage("", "");
        }, 500);
        this.setSubmitting(false);
        return true;
      })
      .catch((err) => {
        toast.error("An error occurred while updating document.");
        console.error(err.response.data.message);
        this.setMessage("error", err.response.data.message);
        this.setSubmitting(false);
        return false;
      });
  }

  resetPin() {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    runInAction(() => {
      this.setSubmitting(true);
    });

    axios
      .get(
        `${BaseDirectories.API_BASE_URL}/transaction-pin/factory-reset-pin`,
        {
          headers,
        }
      )
      .then((res: any) => {
        this.logger.info(
          `User | Rest Pin | ${toJS(this.userProfile?.email)}`,
          res.data
        );

        if (res.data.error) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          runInAction(() => {
            this.setMessage("success", "Pin reset successfully!");
          });

          setTimeout(() => {
            runInAction(() => {
              this.setMessage("", "");
            });
          }, 5000);
        }
      })
      .catch((err) => {
        this.logger.error(
          `User | Reset Pin | ${toJS(this.userProfile?.email)}`,
          err
        );

        toast.error(err.response.data.message);

        this.setMessage("error", err.response.data.message);

        setTimeout(() => {
          this.setMessage("", "");
        }, 6000);
      })
      .finally(() => {
        runInAction(() => {
          this.setSubmitting(false);
        });
      });
  }

  checkPin() {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    runInAction(() => {
      this.setSubmitting(true);
    });

    axios
      .get(`${BaseDirectories.API_BASE_URL}/transaction-pin/check-pin`, {
        headers,
      })
      .then((res: any) => {
        this.logger.info(
          `User | Check Pin | ${toJS(this.userProfile?.email)}`,
          res.data
        );

        if (res.data.error) {
          runInAction(() => {
            this.setPin(false);
          });
        } else {
          runInAction(() => {
            this.setPin(true);
          });
        }
      })
      .catch((err) => {
        this.logger.error(
          `User | Check Pin | ${toJS(this.userProfile?.email)}`,
          err
        );
        runInAction(() => {
          this.setPin(false);
        });
      })
      .finally(() => {
        runInAction(() => {
          this.setSubmitting(false);
        });
      });
  }

  updatePin(data: any) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);

    axios
      .post(`${BaseDirectories.API_BASE_URL}/transaction-pin/reset-pin`, data, {
        headers,
      })
      .then((res: any) => {
        this.logger.info(
          `User | Updated Pin | ${toJS(this.userProfile?.email)}`,
          res.data
        );

        if (res.data.error) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          runInAction(() => {
            this.setMessage("success", "Pin Update is successfully!");
          });

          setTimeout(() => {
            runInAction(() => {
              this.setMessage("", "");
            });
          }, 5000);
        }
      })
      .catch((err) => {
        this.logger.error(
          `User | Updated Pin | ${toJS(this.userProfile?.email)}`,
          err
        );

        toast.error(err.response.data.message);

        this.setMessage("error", err.response.data.message);

        setTimeout(() => {
          this.setMessage("", "");
        }, 6000);
      })
      .finally(() => {
        runInAction(() => {
          this.setSubmitting(false);
        });
      });
  }

  deleteAccountRequest(reason: string) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };

    this.setSubmitting(true);

    axios
      .post(
        `${BaseDirectories.API_BASE_URL}/users/delete-account-request`,
        { reason },
        {
          headers,
        }
      )
      .then((res: any) => {
        if (!res.data.error) {
          this.logger.info(
            `User | Delete Account Profile | ${toJS(this.userProfile?.email)}`,
            res.data
          );
          toast.success(res.data?.message);
          this.setMessage("success", "Request Successfully");
          setTimeout(() => {
            this.setMessage("", "");
          }, 3000);
        } else {
          this.logger.error(
            `User | Delete Account Profile | ${toJS(this.userProfile?.email)}`,
            res.data?.message
          );
          toast.error(`Error | ${res.data?.message}`);
        }
        this.setSubmitting(false);
      })
      .catch((err) => {
        this.logger.error(
          `User | Delete Account Profile | ${toJS(this.userProfile?.email)}`,
          err
        );
        toast.error(`Error | ${err?.response?.data?.message}`);
        this.setMessage("error", err?.response?.data?.message);
        setTimeout(() => {
          this.setMessage("", "");
        }, 4000);
      })
      .finally(() => {
        this.setSubmitting(false);
        setTimeout(() => {
          this.setMessage("", "");
        }, 4000);
      });
  }

  setState = (res: any) => {
    this.state = res;
  };

  setCity = (res: any) => {
    this.city = res;
  };

  setBvn = (res: any) => {
    this.bvn = res;
  };

  setProfile = (res: ApiUserProfile) => {
    this.profile = res;

    this.logger.info(`User | Get Profile | ${res.email}`, res);
  };

  setLoading = (val: boolean) => {
    this.loadingData = val;
  };

  setSubmitting = (val: boolean) => {
    this.submitting = val;
  };
  setMessage = (type: string, msg: string) => {
    this.message.type = type;
    this.message.msg = msg;
    this.messageSettings.type = type;
    this.messageSettings.msg = msg;
  };

  setError = (err: string) => {
    this.error = err;
  };

  setSuccess = (msg: string) => {
    this.success = msg;
    this.success_setting = msg;
  };

  setToLocalStorage = (key: string, value: any) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  };

  clearFromLocalStorage = () => {
    window.sessionStorage.clear();
  };

  SetAccessToken = (token: string) => {
    this.token = token || sessionStorage.getItem("accessToken");
  };

  setPin = (res: boolean) => {
    this.isPinExist = res;
  };

  setShouldDirectToProfileSetup = (res: boolean) => {
    this.shouldDirectToProfileSetup = res;
  };
}
