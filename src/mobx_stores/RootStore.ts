import { AuthStore } from "@/mobx_stores/AuthStore";
import { ProfileStore } from "@/mobx_stores/ProfileStore";
import { createContext } from "react";

interface StoreContextInterface {
  authStore: AuthStore;
  profileStore: ProfileStore;
  //   guarantorStore: GuarantorStore;
  //   walletStore: WalletStore;
  //   investStore: InvestStore;
  //   billStore: BillStore;
  //   blogStore: BlogStore;
  //   invoiceStore: InvoiceStore;
  //   nWalletStore: NWalletStore;
}

export const authStore = new AuthStore();
export const profileStore = new ProfileStore();
// const loansStore = new LoansStore();
// const guarantorStore = new GuarantorStore();
// const walletStore = new WalletStore();
// const investStore = new InvestStore();
// const billStore = new BillStore();
// const blogStore = new BlogStore();
// const invoiceStore = new InvoiceStore();
// const nWalletStore = new NWalletStore();

export const StoreContext = createContext<StoreContextInterface>({
  authStore,
  profileStore,
  //   loansStore,
  //   guarantorStore,
  //   profileStore,
  //   walletStore,
  //   investStore,
  //   billStore,
  //   blogStore,
  //   invoiceStore,
  //   nWalletStore,
});

export const SetAllAccessTokens = (token: string) => {
  authStore.SetAccessToken(token);
  //   loansStore.SetAccessToken(token);
  //   guarantorStore.SetAccessToken(token);
  profileStore.SetAccessToken(token);
  //   walletStore.SetAccessToken(token);
  //   investStore.SetAccessToken(token);
  //   billStore.SetAccessToken(token);
  //   invoiceStore.SetAccessToken(token);
  //   nWalletStore.SetAccessToken(token);
};
