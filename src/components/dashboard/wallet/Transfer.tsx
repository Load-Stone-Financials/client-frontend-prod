import BaseDirectories from "@/baseDir/baseDirectories";
import Button from "@/components/ui/Button";
import { Form } from "@/components/ui/form";
import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { BankTransferForm, WalletTransferForm } from "@/types/wallet";
import { useState } from "react";

import { useForm } from "react-hook-form";

export default function Transfer() {
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

  const bankOptions = [
    { value: "access", label: "Access Bank" },
    { value: "gtbank", label: "GTBank" },
    { value: "firstbank", label: "First Bank" },
    { value: "zenith", label: "Zenith Bank" },
    { value: "uba", label: "UBA" },
    { value: "fidelity", label: "Fidelity Bank" },
  ];

  const handleCloseModal = () => {
    bankTransferForm.reset();
    walletTransferForm.reset();
  };

  const onBankTransferSubmit = (data: BankTransferForm) => {
    console.log("Bank transfer submitted:", data);
    handleCloseModal();
  };



  return (
    <Form form={bankTransferForm}>
      <form
        onSubmit={bankTransferForm.handleSubmit(onBankTransferSubmit)}
        className="space-y-4"
      >
        <div className="flex justify-center items-center"> <img src={`${BaseDirectories.ICONS_DIR}/bank.png`} alt="Loadstone" /></div>

        <h3 className="text-xl font-bold text-brand-purple">
          Transfer to Bank
        </h3>
        {/* //NOTE - wallet balance */}
        <div className="bg-brand-purple-light p-4 w-full rounded-md"># 0.00</div>
        <div className="space-y-3">
          <FormFieldSelect
            control={bankTransferForm.control}
            name="bankName"
            label="Select Bank"
            options={bankOptions}
            placeholder="Choose bank"
            className="text-gray-500"
          />
          <FormFieldText
            control={bankTransferForm.control}
            name="accountNumber"
            label="Account Number"
            type="text"
            placeholder="Enter account number"
            className="text-gray-500"
          />
          <FormFieldText
            control={bankTransferForm.control}
            name="accountName"
            label="Account Name"
            type="text"
            placeholder="Account name will appear here"
            className="text-gray-500"
          />
          <FormFieldText
            control={bankTransferForm.control}
            name="amount"
            label="Amount"
            type="text"
            placeholder="Enter amount"
            className="text-gray-500"
          />
          <FormFieldText
            control={bankTransferForm.control}
            name="narration"
            label="Narration (Optional)"
            type="text"
            placeholder="Add a note"
            className="text-gray-500"
          />
          <div className="flex items-center gap-2 mt-4">
          <Switch
            checked={saveAsBeneficiary}
            onCheckedChange={setSaveAsBeneficiary}
          /><Label htmlFor="beneficiary" className="text-sm font-medium text-gray-700 cursor-pointer">
            Save as beneficiary
          </Label>

        </div>
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
