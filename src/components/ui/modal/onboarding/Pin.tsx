import OTPInput from "react-otp-input";
import Button from "../../Button";
import { useState } from "react";
import { Input } from "../../input";
import { Label } from "../../label";
import { profileStore } from "@/mobx_stores/RootStore";
import { toast } from "react-toastify";

type PinProps = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Pin({ onNext, onBack }: PinProps) {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");

  const inputType = showPin ? "text" : "password";
  const PIN_LENGTH = 4;

  if (
    pin.length === PIN_LENGTH &&
    confirmPin.length === PIN_LENGTH &&
    pin !== confirmPin
  ) {
    setError("Pins do not matvch");
    setConfirmPin("");
  }

  const handlePinChange = (value: string) => {
    if (/^\d*$/.test(value)) {
      setPin(value);
      setError("");
    }
  };

  const handleConfirmPinChange = (value: string) => {
    if (/^\d*$/.test(value)) {
      setConfirmPin(value);
      setError("");
    }
  };

  const isPinComplete =
    pin.length === PIN_LENGTH && confirmPin.length === PIN_LENGTH;

  const pinMatch = pin === confirmPin;

  const canSubmit = isPinComplete && pinMatch;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    const result = await profileStore.createPinAsync(
      { newPin: pin, confirmPin },
      true
    );
    if (!result.error) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="flex flex-col items-center mb-6 md:mt-12">
        <h2 className=" text-brand-white">PIN</h2>
        <small className="text-gray-500 text-md">Create Transaction Pin</small>
      </div>{" "}
      <p className="text-xl text-gray-100 font-extrabold border-b border-gray-300 mb-4 pb-4">
        Enter Pin
      </p>
      <OTPInput
        value={pin}
        onChange={handlePinChange}
        numInputs={PIN_LENGTH}
        // numInputs={4}
        containerStyle="flex justify-center gap-4"
        renderInput={(props) => (
          <input {...props} type={inputType} placeholder="*" />
        )}
        inputStyle="pin-style rounded-md border border-gray-300 text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple text-gray-100 focus:border-transparent transition"
        renderSeparator={<span className="hidden" />}
      />
      <p className="text-xl text-gray-100 font-extrabold border-b border-gray-300 my-4 pb-4">
        Confirm Pin
      </p>
      <OTPInput
        value={confirmPin}
        onChange={handleConfirmPinChange}
        numInputs={PIN_LENGTH}
        containerStyle="flex justify-center gap-4"
        renderInput={(props) => (
          <input {...props} type={inputType} placeholder="*" />
        )}
        inputStyle="pin-style rounded-md border border-gray-300 text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple text-gray-100 focus:border-transparent transition"
        renderSeparator={<span className="hidden" />}
      />
      {error && <small className="text-red-500 text-sm mt-3">{error}</small>}
      <div className="flex text-gray-300 gap-2 mt-2">
         <Input
          onChange={() => setShowPin(!showPin)}
          type="checkbox"
          id="pinCheckbox"
          name="pinCheckbox"
          checked={showPin} className="size-4"
        /><Label htmlFor="pinCheckbox"> Show PIN</Label>{" "}
       
      </div>
      <Button
        onClick={handleSubmit}
        disabled={!canSubmit}
        content="Create PIN"
        classes={`primary-btn btn-md my-6 !w-full ${
          !canSubmit ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="button"
      />
    </div>
  );
}
