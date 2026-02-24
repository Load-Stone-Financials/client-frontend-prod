import BaseDirectories from "@/baseDir/baseDirectories";
import { authStore } from "@/mobx_stores/RootStore";
import Button from "../../Button";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type PhoneNoProps = {
  onNext: (phoneNumber: string) => void;
  onBack?: () => void;
  initialPhoneNumber?: string;
};

export default function PhoneNo({
  onNext,
  onBack,
  initialPhoneNumber = "",
}: PhoneNoProps) {
  const [phone, setPhone] = useState(initialPhoneNumber);
  const [submitting, setSubmitting] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);

  const canResend = resendTimer <= 0;

  useEffect(() => {
    if (resendTimer <= 0) return;
    const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendTimer]);

  const validatePhone = (value: string) => value.startsWith("+") && value.length >= 10;

  const handleProceed = async () => {
    if (!phone) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!validatePhone(phone)) {
      toast.error("Please enter a valid phone number (include country code)");
      return;
    }

    setSubmitting(true);
    const result = await authStore.sendSignupPhoneOtp(phone);
    setSubmitting(false);

    if (result?.success) {
      toast.success("OTP sent. Check your phone and proceed to the next step.");
      onNext(phone);
      return;
    }
    toast.error("Could not send OTP. Please try again.");

    if (result?.statusCode === 400) {
      const msg =
        result?.message ||
        "This phone number is already registered. Please use a different phone number.";
      toast.error(msg);
      return;
    }
  };

  const handleResend = async () => {
    if (!canResend || submitting) return;
    if (!phone || !validatePhone(phone)) {
      toast.error("Enter a valid phone number to resend OTP");
      return;
    }

    setSubmitting(true);
    const result = await authStore.resendSignupPhoneOtp(phone);
    setSubmitting(false);

    if (result?.success) {
      toast.success("OTP resent.");
      setResendTimer(60);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-6 md:mt-12">
        <img src={`${BaseDirectories.ICONS_DIR}/mail2.png`} alt="Email verified" />
        <small className="text-gray-500 text-md">
          Email verification successful
        </small>
      </div>

      <h3 className="text-2xl text-gray-100 font-extrabold">
        Enter your phone number
      </h3>
      <p className="text-gray-500 mt-6 self-start">Mobile number</p>

      <div className="w-full mt-2">
        <PhoneInput
          defaultCountry="ng"
          value={phone}
          onChange={setPhone}
          className="w-full"
          inputClassName="!w-full"
        />
      </div>

      <div className="flex gap-3 w-full mt-6">
        {onBack && (
          <Button
            content="Back"
            classes="primary-btn btn-md flex-1"
            type="button"
            onClick={onBack}
          />
        )}
        <Button
          content={submitting ? "Sending OTP..." : "Proceed"}
          classes="primary-btn btn-md flex-1"
          type="button"
          disabled={submitting}
          onClick={handleProceed}
        />
      </div>

      <p className="mt-4 text-center text-gray-300">
        Didn’t receive an OTP?{" "}
        <button
          type="button"
          onClick={handleResend}
          disabled={!canResend || submitting}
          className="text-brand-purple hover:underline disabled:opacity-60"
        >
          {canResend ? "Resend OTP" : `Resend OTP (${resendTimer}s)`}
        </button>
      </p>
    </div>
  );
}
