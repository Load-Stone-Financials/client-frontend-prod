import OTPInput from "react-otp-input";
import Button from "../../Button";
import { useEffect, useState } from "react";
import { authStore } from "@/mobx_stores/RootStore";
import { toast } from "react-toastify";

type OtpProps = {
  phoneNumber: string;
  onNext: () => void;
  onBack?: () => void;
};

export default function Otp({ phoneNumber, onNext, onBack }: OtpProps) {
  const [otp, setOtp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (resendTimer <= 0) {
      setCanResend(true);
      return;
    }
    const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendTimer]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast.error("Enter the 6-digit OTP");
      return;
    }

    setSubmitting(true);
    const result = await authStore.verifySignupPhoneOtp(otp, phoneNumber);
    setSubmitting(false);

    if (result?.error === false) {
      const uid = authStore.user?.uid;
      if (uid) {
        await authStore.UpdateIsPhoneVerified(uid, true);
      }
      toast.success("Phone verified. Proceeding to BVN validation.");
      onNext();
      return;
    }

    toast.error("Unable to verify OTP. Please try again.");
  };

  const handleResend = async () => {
    if (!canResend || submitting) return;
    setSubmitting(true);
    const result = await authStore.resendSignupPhoneOtp(phoneNumber);
    setSubmitting(false);
    if (result?.success) {
      toast.success("OTP resent.");
      setResendTimer(60);
      setCanResend(false);
    }
  };

  const validateNumber = (evt: any) => {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[0-9]/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-6 md:mt-12">
        <h2 className="text-brand-white">OTP</h2>
        <small className="text-gray-500 text-md">
          We’ve sent you an OTP code to your phone
        </small>
      </div>

      <h3 className="text-2xl text-gray-100 font-extrabold border-b border-gray-300 mb-4 pb-4">
        Enter OTP
      </h3>

      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        containerStyle="flex justify-center gap-3"
        renderInput={(props) => (
          <input {...props} placeholder="*" onKeyPress={validateNumber} />
        )}
        inputStyle="pin-style rounded-md border border-gray-300 text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition"
        renderSeparator={<span className="hidden" />}
      />

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
          content={submitting ? "Validating..." : "Validate"}
          classes="primary-btn btn-md !w-full"
          type="button"
          disabled={submitting}
          onClick={handleVerify}
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
          {canResend ? "Resend SMS" : `Resend SMS (${resendTimer}s)`}
        </button>
      </p>
    </div>
  );
}
