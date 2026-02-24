import BaseDirectories from "@/baseDir/baseDirectories";
import { authStore } from "@/mobx_stores/RootStore";
import Button from "../../Button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../input";
import { useState } from "react";
import { toast } from "react-toastify";

type BvnProps = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Bvn({ onNext, onBack }: BvnProps) {
  const [bvn, setBvn] = useState("");
  const [nin, setNin] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validateLength = (v: string) => v.trim().length === 11;

  const handleValidate = async () => {
    if (!validateLength(bvn) || !validateLength(nin)) {
      toast.error("BVN and NIN must be 11 digits");
      return;
    }
    setSubmitting(true);
    const result = await authStore.bvnSignUp(bvn.trim(), nin.trim());
    setSubmitting(false);

    if (result && result.error === false) {
      await authStore.checkBvnLivenessStatus();
      toast.success("BVN verified. Proceeding to create your PIN.");
      onNext();
      return;
    }
  };

  return (
   <div className="flex flex-col items-center">
      {" "}
      <div className="flex flex-col items-center mb-6 md:mt-12">
        <img src={`${BaseDirectories.ICONS_DIR}/call.png`} alt="Auth Key" />
        <p className="text-gray-500 text-md">Phone verification Successful</p>
      </div>{" "}
      <h3 className="text-2xl text-gray-100 font-extrabold">
      BVN VALIDATION
      </h3>
      <p className="text-gray-500 mt-6 flex items-start!">
      Industry regulation requires us to collect this information to verify your identity.
      </p>
      <div className="w-full">
        <Label className="text-gray-500 mt-6 mb-2 flex items-start!">BVN (Bank Verification Number) <span className="text-red-500">*</span></Label>
        <Input
          type="text"
          placeholder="Enter your bank verification number"
          className="w-80 md:w-96"
          value={bvn}
          onChange={(e) => setBvn(e.target.value)}
          inputMode="numeric"
        />
      </div>
      <div className="w-full">
        <Label className="text-gray-500 mt-6 mb-2 flex items-start!">
          NIN (National Identity Number) <span className="text-red-500">*</span>
        </Label>
        <Input
          type="text"
          placeholder="National Identity number"
          className="w-80 md:w-96"
          value={nin}
          onChange={(e) => setNin(e.target.value)}
          inputMode="numeric"
        />
      </div>

      <div className="flex gap-3 w-full mt-6">
        {onBack && (
          <Button
            content="Back"
            classes="white-btn btn-md !w-full"
            type="button"
            onClick={onBack}
          />
        )}
        <Button
          content={submitting ? "Validating..." : "Validate BVN"}
          classes="primary-btn btn-md !w-full"
          type="button"
          disabled={submitting}
          onClick={handleValidate}
        />
      </div>
    </div>
  )
}