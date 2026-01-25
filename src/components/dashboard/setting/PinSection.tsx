import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiShieldLock, mdiCheck } from "@mdi/js";
import Button from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormFieldOTP } from "@/components/ui/forms/FormFieldOtp";
import { Form } from "@/components/ui/form";

const PIN_LENGTH = 4;

interface PinFormData {
  pin: string;
  confirmPin: string;
}

export default function PinSection() {
  const [showPin, setShowPin] = useState(false);

  const form = useForm<PinFormData>({
    defaultValues: {
      pin: "",
      confirmPin: "",
    },
    mode: "onChange",
  });

  const { control, handleSubmit, watch, setError, reset } = form;
  const pin = watch("pin");
  const confirmPin = watch("confirmPin");

  const isPinComplete =
    pin?.length === PIN_LENGTH && confirmPin?.length === PIN_LENGTH;
  const pinMatch = pin === confirmPin;
  const canChangePin = isPinComplete && pinMatch;

  const onSubmit = (data: PinFormData) => {
    // Validate that pins match
    if (data.pin !== data.confirmPin) {
      setError("confirmPin", {
        type: "manual",
        message: "Pins do not match",
      });
      return;
    }

    // TODO: Save PIN to backend
    console.log("Changing PIN:", data.pin);
    reset();
    setShowPin(false);
  };

  const handleResetPin = () => {
    // TODO: Handle PIN reset (usually requires additional verification)
    console.log("Resetting PIN");
    reset();
    setShowPin(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Form form={form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Pin Icon and Title */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-brand-purple flex items-center justify-center">
                <Icon path={mdiShieldLock} size={2.5} className="text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center border-4 border-white">
                <Icon path={mdiCheck} size={1} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-brand-purple">Pin</h2>
          </div>

          {/* Pin Input Fields */}
          <div className="space-y-8 mb-8">
            {/* Enter Pin */}
            <div className="flex flex-col items-center">
              <FormFieldOTP
                control={control}
                name="pin"
                label="Enter pin"
                length={PIN_LENGTH}
                inputType={showPin ? "text" : "password"}
                placeholder="*"
              />
            </div>

            {/* Confirm Pin */}
            <div className="flex flex-col items-center w-full">
              <FormFieldOTP
                control={control}
                name="confirmPin"
                label="Confirm pin"
                length={PIN_LENGTH}
                inputType={showPin ? "text" : "password"}
                placeholder="*"
              />
            </div>

            {/* Show Pin Checkbox */}
            <div className="flex items-center justify-center gap-2">
              <Checkbox
                id="showPin"
                checked={showPin}
                onCheckedChange={(checked) => setShowPin(checked === true)}
                className="border-gray-300"
              />
              <label
                htmlFor="showPin"
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                Show pin
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              type="submit"
              content="Change Pin"
              classes={`primary-btn btn-md px-8 ${
                !canChangePin ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!canChangePin}
            />
            <Button
              type="button"
              content="Reset Pin"
              classes="primary-btn btn-md px-8"
              onClick={handleResetPin}
            />
          </div>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
