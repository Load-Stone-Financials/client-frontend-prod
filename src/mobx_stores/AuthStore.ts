/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  EmailAuthProvider,
  type User,
  applyActionCode,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { configure, makeAutoObservable, runInAction } from "mobx";
import { auth, functions } from "../firebase/Firebase";
import  {
  type RegistrationResponseJSON,
  startAuthentication,
  startRegistration,
} from "@simplewebauthn/browser";
import { httpsCallable } from "firebase/functions";
import { signInWithCustomToken } from "firebase/auth";
import { toast } from "react-toastify";
import { BrowserLogger } from "../common/logger/Logger";
import type { PasskeyResponse } from "../types/auth/passkey.type";
import type { UserProfile } from "../types/auth/sessionUser.type";
import FirebaseCustomError from "../types/error/firebase.type";
import BaseError from "../types/error/base.type";
import axios from "axios";
import BaseDirectories from "@/baseDir/baseDirectories";

configure({ enforceActions: "always" });

export class AuthStore {
  authenticated = false;
  isSessionConflicted =
    window.sessionStorage.getItem("isSessionConflicted") === "true";
  isActiveUser = window.sessionStorage.getItem("userStatus") === "true";
  userPasskeys: PasskeyResponse | object = {};
  loading = false;
  submitting = false;
  passkeyResponse: RegistrationResponseJSON | null = null;
  error = "";
  isPhoneVerified = true;
  requiresSelfieVerification = false;
  hasBvn = false;
  success = "";
  verified = false;
  token: any = sessionStorage.getItem("accessToken") || "";
  userId = "";
  user: User | null = auth.currentUser;
  message = {
    type: "",
    msg: "",
  };

  private logger!: BrowserLogger;
  // private email!: Profile;

  constructor() {
    makeAutoObservable(this);
    runInAction(() => {
      this.logger = new BrowserLogger(this.constructor.name);
    });
  }

  isAuthenticated() {
    return this.authenticated;
  }

  isVerified() {
    return this.isVerified;
  }

  async CreateUser(details: any) {
    this.setLoading(true);
    try {
      const res: any = await createUserWithEmailAndPassword(
        auth,
        details.email,
        details.password
      );
      if (res.user) {
        this.logger.info(`User | Sign Up | ${details.email}`, res);
        updateProfile(res.user, {
          displayName: details.firstName + " " + details.lastName,
        });
      }
      const actionCodeSettings = {
        url: `${BaseDirectories.BASE_URL}/verify-email?email=${encodeURIComponent(auth.currentUser?.email ?? "")}`,
        handleCodeInApp: true,
      };
      await sendEmailVerification(res.user, actionCodeSettings)
        .then((res: any) => {
          this.logger.info(
            `User | Send verification email | ${details.email}`,
            res
          );
          return;
        })
        .catch((error: any) => {
          this.logger.error(
            `User | Send verification email | ${details.email}`,
            error
          );
          return;
        });

      this.setSuccess(res);
      // Set Firebase ID token so phone/BVN/PIN API calls work right after signup
      const idToken = await res.user.getIdToken(true);
      this.SetAccessToken(idToken);
      runInAction(() => {
        this.loading = false;
      });
    } catch (error: unknown) {
      this.logger.error(`User | Sign Up | ${details.email}`, error);
      this.setError(
        error instanceof Error ? error.message : String(error ?? "Sign up failed")
      );
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async ForgotPassword(details: any) {
    this.setLoading(true);
    try {
      const actionCodeSettings: any = {
        url: `${BaseDirectories.BASE_URL}/login/?email=${details?.email}`,
        handleCodeInApp: true,
      };
      const res: any = await sendPasswordResetEmail(
        auth,
        details.email,
        actionCodeSettings
      );

      this.setSuccess(res);

      runInAction(() => {
        this.loading = false;
      });
    } catch (error: any) {
      this.setError(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async ResetPassword(newPassword: string, actionCode: any) {
    this.setLoading(true);
    try {
      await confirmPasswordReset(auth, actionCode, newPassword);
      toast.success(
        "Password set successfully. You can now login with your new password."
      );
      this.setMessage(
        "success",
        "Password updated successfully. You can now login with your new password."
      );
    } catch (error: any) {
      toast.error(this.mapAuthCodeToMessage(error.code));
      this.setError(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async VerifyEmail(actionCode: any) {
    this.setLoading(true);
    try {
      await applyActionCode(auth, actionCode)
        .then(() => {
          toast.success("Email verified successfully.");
          this.setMessage("success", "Email verified successfully.");
          return;
        })

        .catch((error) => {
          toast.error(this.mapAuthCodeToMessage(error.code));
          this.setMessage("error", this.mapAuthCodeToMessage(error.code));
          return;
        });

      runInAction(() => {
        this.loading = false;
      });
    } catch (error: any) {
      this.setError(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async sendSignupPhoneOtp(phoneNumber?: string) {
    const token = await this.getApiToken();
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const data = phoneNumber ? { phoneNumber } : {};
    try {
      const response = await axios.post(
        `${BaseDirectories.API_BASE_URL}/auth/phone-number-verification`,
        data,
        { headers }
      );
      toast.success("OTP sent");
      return { success: true, data: response.data };
    } catch (error: any) {
      const statusCode = error?.response?.status;
      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error?.message ||
        error?.message;

      // For 400 errors (phone already exists), don't show toast here
      // Let the component handle it with a more specific message
      if (statusCode !== 400) {
        if (statusCode === 403) {
          toast.error("Access forbidden. Please check your permissions.");
        } else if (statusCode === 401) {
          toast.error("Unauthorized. Please log in again.");
        } else {
          toast.error(errorMessage || "Unable to send an OTP");
        }
      }

      console.error("OTP send error:", { statusCode, errorMessage, error });

      return {
        success: false,
        error,
        statusCode,
        message: errorMessage,
      };
    }
  }

  async resendSignupPhoneOtp(phoneNumber?: string) {
    const token = await this.getApiToken();
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const data = phoneNumber ? { phoneNumber } : {};
    try {
      const response = await axios.post(
        `${BaseDirectories.API_BASE_URL}/auth/phone-number-verification`,
        data,
        { headers }
      );
      toast.success("OTP sent");
      return { success: true, data: response.data };
    } catch (error: any) {
      const statusCode = error?.response?.status;
      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error?.message ||
        error?.message;

      if (statusCode === 400) {
        toast.error(
          "This phone number is already registered. Please use a different phone number."
        );
      } else if (statusCode === 403) {
        toast.error("Access forbidden. Please check your permissions.");
      } else if (statusCode === 401) {
        toast.error("Unauthorized. Please log in again.");
      } else {
        toast.error(errorMessage || "Unable to send an OTP");
      }

      console.error("OTP send error:", { statusCode, errorMessage, error });
      return {
        success: false,
        error,
        statusCode,
        message: errorMessage,
      };
    }
  }

  async verifySignupPhoneOtp(otp: string, phoneNumber?: string) {
    const token = await this.getApiToken();
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(
        `${BaseDirectories.API_BASE_URL}/auth/verify-phone-number-otp`,
        phoneNumber ? { otp, phoneNumber } : { otp },
        { headers }
      );
      this.setLoading(true);

      // Usdates the phone verified status
      this.setIsPhoneVerified(true);

      toast.success("Phone number verified successfully");
      this.setLoading(false);
      return { error: false, data: response.data };
    } catch (error: any) {
      this.setLoading(false);

      if (error?.response?.status === 400) {
        toast.error("Invalid OTP. Please check and try again.");
      } else if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Unable to verify OTP. Please try again.");
      }
      console.log("OTP verification error:", error);
      return { error: true, message: error?.response?.data?.message || error?.message };
    }
  }

  async bvnSignUp(bvn: string, nin: string) {
    const token = await this.getApiToken();
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      this.setLoading(true);

      const data = {
        bvn,
        nin,
        platform: "web",
      };

      const response = await axios.post(
        `${BaseDirectories.API_BASE_URL}/auth/bvn-signup`,
        data,
        { headers }
      );

      this.setLoading(false);
      toast.success("BVN validation successful");

      return { error: false, data: response.data };
    } catch (error: any) {
      this.setLoading(false);
      console.log("BVN signup error:", error);
      toast.error("BVN validation failed");
      return { error: true, data: null };
    }
  }

  async recordAccountAccessAndSendEmail() {
    try {
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${this.token}`,
      };
      const time = new Date();

      await axios.patch(
        `${BaseDirectories.API_BASE_URL}/users/me/account-access`,
        { assessedAt: `${navigator.userAgent} at ${time.toTimeString()}` },
        {
          headers,
        }
      );
    } catch (error: any) {
      this.logger.error(`User | Send account access email `, error);
      return;
    }
  }

  async ResendVerificationEmail() {
    this.setLoading(true);
    try {
      const actionCodeSettings = {
        url: `${BaseDirectories.BASE_URL}/verify-email?email=${encodeURIComponent(auth.currentUser?.email ?? "")}`,
        handleCodeInApp: true,
      };
      await sendEmailVerification(this.user as User, actionCodeSettings)
        .then(() => {
          toast.success("Email sent.");
          this.setMessage("success", "Email sent.");
          return;
        })
        .catch((error) => {
          toast.error(this.mapAuthCodeToMessage(error.code));
          this.setMessage("error", this.mapAuthCodeToMessage(error.code));
          return;
        });

      runInAction(() => {
        this.loading = false;
      });
    } catch (error: any) {
      this.setError(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async changePassword(
    currentPassword: string,
    newPassword: string,
    confirmPassword: string
  ) {
    const credential = EmailAuthProvider.credential(
      this.user?.email as string,
      currentPassword
    );

    if (
      newPassword.length === 0 ||
      currentPassword.length === 0 ||
      confirmPassword.length === 0
    ) {
      toast.error("One or more inputs are empty!");
      this.setMessage("error", "One or more inputs are empty!");
    } else if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match!");
      this.setMessage(
        "error",
        "New password and confirm password do not match!"
      );
    } else {
      this.setSubmitting(true);
      // Re-authenticate user
      reauthenticateWithCredential(this.user as User, credential)
        .then(() => {
          updatePassword(this.user as User, newPassword)
            .then(() => {
              this.setSubmitting(false);
              toast.success("Password updated successfully.");
              this.setMessage("success", "Password updated successfully.");
            })
            .catch((error) => {
              this.setSubmitting(false);
              toast.error(this.mapAuthCodeToMessage(error.code));
              this.setMessage("error", this.mapAuthCodeToMessage(error.code));
            });
        })
        .catch((error) => {
          this.setSubmitting(false);
          toast.error(this.mapAuthCodeToMessage(error.code));
          this.setMessage("error", this.mapAuthCodeToMessage(error.code));
        });
    }
  }

  async signInWithPasskey() {
    try {
      const begin = httpsCallable(functions, "beginPasskeyLogin");
      const finish = httpsCallable(functions, "finishPasskeyLogin");

      // Get challenge
      const { data: options }: any = await begin();

      // Use WebAuthn API
      const response = await startAuthentication(options);

      // Send response back
      const { data }: any = await finish({ response });

      // Log user into Firebase
      const user = await signInWithCustomToken(auth, data.token);
      return { error: false, data: user };
    } catch (error: any) {
      // Errors from simple web authn return a name property
      if (error?.name === "NotAllowedError") {
        throw new FirebaseCustomError("Operation cancelled", error?.code);
      } else if (error?.code) {
        throw new FirebaseCustomError(
          error?.message || "Unable to log you in with passkey",
          error?.code
        );
      } else {
        throw new BaseError(
          error?.messge || "Unable to log you in with passkey",
          error?.code || "Invalid credentials"
        );
      }
    }
  }

  async startPasskeyRegistration(email: string) {
    try {
      const begin = httpsCallable(functions, "startPasskeyRegistration");

      // 1. Get challenge
      const { data: options }: any = await begin({ email });

      // 2. Use WebAuthn API
      const response = await startRegistration({ optionsJSON: options });
      // console.log(response);
      this.setPasskeyResponse(response);
      return { error: false };
    } catch (error) {
      console.log(error);

      toast.error("Unable to create passkey");
      return { error: true };
    }
  }

  async completePasskeyRegistration(passkeyName: string) {
    try {
      const finish = httpsCallable(functions, "finishPasskeyRegistration");

      // 3. Send response back
      const { data }: { data: { error: boolean; message: string } } = (await finish({
        email: this.user?.email as string,
        response: this.passkeyResponse as unknown as RegistrationResponseJSON,
        deviceName: passkeyName,
      }))  as { data: { error: boolean; message: string } };
      if (data.error) {
        toast.error(data.message);
        return { error: true };
      }
      toast.success("Passkey created");
    } catch (error: any) {
      console.log(error);
      toast.error("Unable to create passkey");
    }
  }

  async getUserPasskeys() {
    try {
      this.loading = true;
      const getUserPasskeys = httpsCallable(functions, "usersPasskeys");

      const passkeys = await getUserPasskeys({
        uid:
          this.user?.uid ||
          (JSON.parse(localStorage.getItem("user")!) as UserProfile).id,
      });

      this.setUserPasskeys(passkeys);
      this.loading = false;
    } catch (error: any) {
      console.log(error);
      toast.error("Unable to get passkeys");
    }
  }

  async deleteUserPasskey(passkeyId: string) {
    try {
      const deleteUsersPasskey = httpsCallable(functions, "deletePasskey");
      console.log(passkeyId, this.user?.uid);

      const deletePasskey: { data: { error: boolean; message: string } } =
        (await deleteUsersPasskey({
          credentialId: passkeyId,
          userUid: this.user?.uid,
        })) as { data: { error: boolean; message: string } };
      if (deletePasskey.data?.error) {
        toast.error("Unable to delete passkey");
        return { error: true };
      }
      toast.success("Passkey deleted");
      return { error: false };
    } catch (error: any) {
      console.log(error);

      toast.error("Unable to delete passkey");
    }
  }

  async IsPhoneVerified(uid: string) {
    try {
      const isPhoneNumberVerified = httpsCallable<
        { uid: string },
        { isVerified: boolean }
      >(functions, "isPhoneNumberVerified");

      const { data } = await isPhoneNumberVerified({ uid });
      this.setIsPhoneVerified(data.isVerified);
    } catch (error: any) {
      console.log(error);
    }
  }

  async UpdateIsPhoneVerified(uid: string, isVerified: boolean) {
    try {
      const verifyPhoneNumber = httpsCallable<
        { uid: string; isVerified: boolean },
        { isVerified: boolean }
      >(functions, "updatePhoneNumberVerified");

      const { data } = await verifyPhoneNumber({ uid, isVerified });

      this.setIsPhoneVerified(data.isVerified);
    } catch (error: any) {
      console.log(error);
    }
  }

  async sendPhoneVerificationOTP() {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(
        `${BaseDirectories.API_BASE_URL}/users/phone-verification-otp`,
        {},
        { headers }
      );
      toast.success("OTP sent");
      return { success: true, data: response.data };
    } catch (error: any) {
      const statusCode = error?.response?.status;
      const errorMessage = error?.response?.data?.message || error?.message;

      if (statusCode === 403) {
        toast.error("Access forbidden. Please check your permissions.");
      } else if (statusCode === 401) {
        toast.error("Unauthorized. Please log in again.");
      } else {
        toast.error("Unable to send an OTP");
      }

      console.error("OTP send error:", { statusCode, errorMessage, error });
      return { success: false, error, statusCode };
    }
  }

  async verifyLoginOTP(otp: string) {
    try {
      this.setLoading(true);

      const token = this.token || sessionStorage.getItem("accessToken");
      if (!token) {
        toast.error("Authentication required. Please log in again.");
        this.setLoading(false);
        return { error: true, message: "No authentication token" };
      }

      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        `${BaseDirectories.API_BASE_URL}/users/validate-phone-verification-otp`,
        { otp },
        { headers }
      );

      // Usdates the phone verified status
      this.setIsPhoneVerified(true);

      toast.success("Phone number verified successfully");
      this.setLoading(false);
      return { error: false, data: response.data };
    } catch (error: any) {
      this.setLoading(false);

      if (error?.response?.status === 400) {
        toast.error("Invalid OTP. Please check and try again.");
      } else if (error?.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
      } else if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Unable to verify OTP. Please try again.");
      }

      return {
        error: true,
        message:
          error?.response?.data?.message || error?.message || "Unknown error",
      };
    }
  }
  async checkBvnLivenessStatus() {
    // this.isCheckingBvnStatus = true;

    try {
      this.setLoading(true);
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${this.token}`,
      };

      const response = await axios.get(
        `${BaseDirectories.API_BASE_URL}/users/bvn-status`,
        { headers }
      );

      const { hasBvn, isLivenessMatched } = response.data;
      this.hasBvn = hasBvn === true;
      this.requiresSelfieVerification =
        hasBvn === true && isLivenessMatched !== true;
    } catch (error: any) {
      this.setLoading(false);
      console.error("ERROR:", error);
      console.error("ERROR RESPONSE:", error.response);
      this.logger.error("BVN | Liveness Status Check", error);
      toast.error("Unable to check BVN liveness status");
    }
  }

  async addSelfieVerificationToBvn(
    selfieBase64: string,
    bvn?: string
  ): Promise<boolean> {
    try {
      let cleanBase64 = selfieBase64;
      if (selfieBase64.includes("data:image")) {
        cleanBase64 = selfieBase64.split(",")[1];
        console.log("Debug-Cleaned base64, new length:", cleanBase64.length);
      }

      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      };

      const payload = {
        selfie_image: cleanBase64,
        ...(bvn && { bvn }),
      };

      console.log("Debug-Sending request to add selfie...");

      const response = await axios.post(
        `${BaseDirectories.API_BASE_URL}/users/bvn/add-selfie`,
        payload,
        { headers }
      );

      if (response.data?.error) {
        toast.error(response.data.message || "Verification failed");
        return false;
      }
      const { dataResponse } = response.data;
      if (!dataResponse?.isLivenessMatched) {
        //LIVENESS CHECK FAILED
        const confidenceValue = dataResponse?.confidenceValue || 0;

        this.logger.error("BVN | Liveness Check Failed", {
          isLivenessMatched: false,
          confidenceValue,
        });

        // Show detailed error message
        if (confidenceValue < 50) {
          toast.error(
            "Face verification failed. Please ensure good lighting and try again."
          );
        } else if (confidenceValue < 75) {
          toast.error(
            "Face match is too low. Please position your face clearly and try again."
          );
        } else {
          toast.error(
            "Face verification did not pass. Please try again with better lighting."
          );
        }

        // Keep requiresSelfieVerification = true so they stay on camera page
        this.requiresSelfieVerification = true;
        return false;
      }

      this.requiresSelfieVerification = false;

      toast.success(
        "Face verification successful! You can now access your account."
      );
      this.logger.info("BVN | Add Selfie Verification", response.data);
      return true;
    } catch (error: any) {
      console.error("Debug-Error response:", error.response?.data);
      this.logger.error("BVN | Add Selfie Verification", error);

      // Show specific error message if available
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Unable to add selfie verification to BVN");
      }
      return false;
    }
  }

  mapAuthCodeToMessage = (authCode: string) => {
    switch (authCode) {
      case "auth/invalid-password":
        return "Current password provided is not correct.";

      case "auth/wrong-password":
        return "Current password provided is not correct.";

      case "auth/expired-action-code":
        return "The link has expired. Please try again.";

      case "auth/too-many-requests":
        return "Too many tries, please try again later.";

      case "auth/user-disabled":
        return "This user has been disabled. Please contact support for help.";

      case "auth/user-not-found":
        return "No user found with the provided details.";

      case "auth/invalid-action-code":
        return "The link is invalid. Please try again.";

      default:
        return "Something went wrong, please try again later.";
    }
  };

  setUser = (res: any) => {
    this.user = res;
  };

  setLoading = (val: boolean) => {
    this.loading = val;
  };

  setError = (err: string) => {
    this.error = err;
  };
  setSuccess = (res: string) => {
    this.success = res;
  };

  setMessage = (type: string, msg: string) => {
    this.message.type = type;
    this.message.msg = msg;
  };

  setSubmitting = (val: boolean) => {
    this.submitting = val;
  };

  SetAccessToken = (token: string) => {
    const value = token || sessionStorage.getItem("accessToken") || "";
    this.token = value;
    if (token) {
      window.sessionStorage.setItem("accessToken", token);
    }
  };

  /**
   * Returns the token for API calls. Uses existing token or fetches Firebase ID token
   * when user is signed in (e.g. right after signup, before backend login).
   */
  getApiToken = async (): Promise<string> => {
    const existing = this.token || sessionStorage.getItem("accessToken");
    if (existing) return existing;
    const user = auth.currentUser;
    if (user) {
      const idToken = await user.getIdToken(true);
      this.SetAccessToken(idToken);
      return idToken;
    }
    return "";
  };

  setToLocalStorage = (key: string, value: any) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  };

  clearFromLocalStorage = () => {
    window.sessionStorage.clear();
  };

  setUserAuthenticated(res: any) {
    this.authenticated = true;
    this.token = res.access_token;
    this.success = "Sign up successful";
    this.setLoading(false);
    this.setToLocalStorage("accessToken", this.token);
    this.setToLocalStorage("uid", this.userId);
  }

  setUserNotAuthenticated() {
    this.authenticated = false;
    this.token = "";
    this.error = "Sign up failed";
    this.setLoading(false);
    this.clearFromLocalStorage();
    this.setIsActiveUser(false);
  }

  setIsActiveUser(res: boolean) {
    this.isActiveUser = res;
  }

  setIsSessionConflicted(res: boolean) {
    window.sessionStorage.setItem("isSessionConflicted", `${res}`);
    this.isSessionConflicted = res;
  }

  setIsPhoneVerified(res: boolean) {
    this.isPhoneVerified = res;
  }

  setPasskeyResponse(res: any) {
    this.passkeyResponse = res;
  }

  setUserPasskeys(res: PasskeyResponse | {
    [key: string]: any;
  }) {
    this.userPasskeys = res;
  }
}
