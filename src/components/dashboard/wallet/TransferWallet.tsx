import { useState } from "react";
import BaseDirectories from "@/baseDir/baseDirectories";
import Button from "@/components/ui/Button";
import { Form } from "@/components/ui/form";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { BankTransferForm, WalletTransferForm } from "@/types/wallet";

import { useForm } from "react-hook-form";

export default function TransferWallet() {
  const [saveAsBeneficiary, setSaveAsBeneficiary] = useState(false);

  const bankTransferForm = useForm<BankTransferForm>({
    defaultValues: {
      bankName: "",
      accountNumber: "",
      accountName: "",
      amount: "",
      narration: "",
    },
  });

  const walletTransferForm = useForm<WalletTransferForm>({
    defaultValues: {
      walletId: "",
      amount: "",
      narration: "",
    },
  });



  const handleCloseModal = () => {
    bankTransferForm.reset();
    walletTransferForm.reset();
  };

  const onWalletTransferSubmit = (data: WalletTransferForm) => {
    console.log("Wallet transfer submitted:", data);
    handleCloseModal();
  };

  return (
    <Form form={walletTransferForm}>
      <form
        onSubmit={walletTransferForm.handleSubmit(onWalletTransferSubmit)}
        className="space-y-4"
      >
        <div className="flex justify-center items-center"> <img src={`${BaseDirectories.ICONS_DIR}/bank.png`} alt="Loadstone" /></div>

        <h3 className="text-xl font-bold text-brand-purple">
          Transfer to Wallet
        </h3>
        {/* //NOTE - wallet balance */}
        <div className="bg-brand-purple-light p-4 w-full rounded-md"># 0.00</div>
        <div className="space-y-3">
          <FormFieldText
            control={walletTransferForm.control}
            name="walletId"
            label="Wallet ID / Email"
            type="text"
            placeholder="Enter wallet ID or email" className="text-gray-500"
          />
          <FormFieldText
            control={walletTransferForm.control}
            name="amount"
            label="Amount"
            type="text"
            placeholder="Enter amount" className="text-gray-500"
          />
          <FormFieldText
            control={walletTransferForm.control}
            name="narration"
            label="Narration (Optional)"
            type="text"
            placeholder="Add a note" className="text-gray-500"
          />
        </div><div className="flex items-center gap-2 mt-4">
          <Switch
            checked={saveAsBeneficiary}
            onCheckedChange={setSaveAsBeneficiary}
          /><Label htmlFor="beneficiary" className="text-sm font-medium text-gray-700 cursor-pointer">
            Save as beneficiary
          </Label>

        </div>
        <div className="flex gap-3 justify-end mt-6">
          <Button
            content="Cancel"
            classes="secondary-btn btn-md"
            onClick={handleCloseModal}
            type="button"
          />
          <Button
            content="Proceed"
            classes="primary-btn btn-md"
            type="submit"
          />
        </div>
      </form>

    </Form>
  );
}
