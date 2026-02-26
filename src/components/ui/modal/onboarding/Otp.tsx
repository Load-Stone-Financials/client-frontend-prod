import OTPInput from "react-otp-input";
import Button from "../../Button";
import { useEffect, useState } from "react";
import { authStore } from "@/mobx_stores/RootStore";
import { observer } from "mobx-react-lite";

type OtpProps = {
  phoneNumber: string;
  onNext: () => void;
  onBack?: () => void;
};

function Otp({ phoneNumber, onNext, onBack }: OtpProps) {
  const [otp, setOtp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (resendTimer <= 0) {
      if (!canResend) {
        setCanResend(true);
      }
      return;
    }
    const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendTimer, canResend]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      authStore.notifyError("Enter the 6-digit OTP");
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
      authStore.notifySuccess(
        "Phone verified. Proceeding to BVN validation."
      );
      onNext();
      return;
    }

    authStore.notifyError("Unable to verify OTP. Please try again.");
  };

  const handleResend = async () => {
    if (!canResend || submitting) return;
    setSubmitting(true);
    const result = await authStore.resendSignupPhoneOtp(phoneNumber);
    setSubmitting(false);
    if (result?.success) {
      setResendTimer(60);
      setCanResend(false);
    }
  };

  const validateNumber = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const theEvent = evt.nativeEvent as KeyboardEvent || window.event;
    const key = theEvent.key;
    const regex = /[0-9]/;
    if (!regex.test(key)) {
      evt.preventDefault();
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

      <div className="flex gap-3 flex-1 mt-6">
        {onBack && (
          <Button
            content="Back"
            classes="secondary-btn btn-md flex-1"
            type="button"
            onClick={onBack}
          />
        )}
        <Button
          content={submitting ? "Validating..." : "Validate"}
          classes="primary-btn btn-md flex-1"
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

export default observer(Otp);
