/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { configure, makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { BrowserLogger } from "../common/logger/Logger";
import BaseDirectories from "@/baseDir/baseDirectories";

configure({ enforceActions: "always" });

export class AccountStore {
  private logger!: BrowserLogger;
  token: any = sessionStorage.getItem("accessToken") || "";

  SetAccessToken = (token: string) => {
    this.token = token || sessionStorage.getItem("accessToken");
  };

  /// Static headers
  private _headers: any = {
    accept: "application/json",
    Authorization: `Bearer ${this.token}`,
    "Content-Type": "application/json",
    "cf-cache-status-check": BaseDirectories.FCP,
  };
  public get headers(): any {
    return this._headers;
  }
  public set headers(value: any) {
    this._headers = value;
  }
  constructor() {
    makeAutoObservable(this);
    runInAction(() => {
      this.logger = new BrowserLogger(this.constructor.name);
      this.attemptToCreateAccount();
    });
    this.attemptToCreateAccount();
  }
  // Get Banks Loading State
  private _attemptingToCreateAccount: boolean = false;
  public get attemptingToCreateAccount(): boolean {
    return this._attemptingToCreateAccount;
  }
  public set attemptingToCreateAccount(value: boolean) {
    this._attemptingToCreateAccount = value;
  }
  public async attemptToCreateAccount() {
    this.attemptingToCreateAccount = true;
    axios
      .get(`${BaseDirectories.API_BASE_URL}/vfd-nip/wallet-attempt`, {
        headers: this.headers,
      })
      .then((res: any) => {
        if (res.error) {
          this.attemptingToCreateAccount = false;
          toast.error("unable to create wallet banks");
          return;
        }
        this.logger.info("res.data.data", res.data.data);
        this.attemptingToCreateAccount = false;
      })
      .catch((err: any) => {
        this.logger.error("error", err);
        this.attemptingToCreateAccount = false;
      });
  }
}
