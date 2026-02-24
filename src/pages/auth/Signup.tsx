import {
  SIGNUP_FLOW,
  type AuthOption,
  type SignupFormData,
  type SignupStep,
} from "../../types/onboarding";
import { useState } from "react";
import Verification from "../../components/ui/modal/onboarding/Verification";
import Account from "../../components/ui/modal/onboarding/Account";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import AuthMethod from "@/components/ui/modal/onboarding/AuthMethod";
import PhoneNo from "@/components/ui/modal/onboarding/PhoneNo";
import Otp from "@/components/ui/modal/onboarding/Otp";
import Bvn from "@/components/ui/modal/onboarding/Bvn";
import Pin from "@/components/ui/modal/onboarding/Pin";
import { authStore } from "@/mobx_stores/RootStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function getInitialStepIndex(initialStep: SignupStep | undefined): number {
  if (!initialStep) return 0;
  const index = SIGNUP_FLOW.indexOf(initialStep);
  return index >= 0 ? index : 0;
}

export default function Signup({
  onClose,
  onSwitchToLogin,
  initialStep,
}: {
  onClose: () => void;
  onSwitchToLogin: () => void;
  initialStep?: SignupStep;
}) {
  const navigate = useNavigate();
  const [authMethod, setAuthMethod] = useState<AuthOption>("password");
  const [stepIndex, setStepIndex] = useState(() =>
    getInitialStepIndex(initialStep)
  );
  const step = SIGNUP_FLOW[stepIndex];
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const form = useForm<SignupFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      dateOfBirth: "",
      businessName: "",
      businessType: "",
      verificationCode: "",
    },
  });

  const next = () =>
    setStepIndex((index) => Math.min(index + 1, SIGNUP_FLOW.length - 1));
  const goToStep = (target: SignupStep) => {
    const idx = SIGNUP_FLOW.indexOf(target);
    setStepIndex(idx >= 0 ? idx : 0);
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (data: SignupFormData) => {
    setError("");
    if (step === "account") {
      next();
      return;
    }

    if (step === "password" && authMethod === "password") {
      setSubmitting(true);
      await authStore.CreateUser({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      setSubmitting(false);
      if (authStore.error) {
        setError(authStore.error);
        toast.error(authStore.error);
        return;
      }
      toast.success("Account created. Please check your email to verify.");
      next();
      return;
    }
  };

  const displayError = step === "password" ? authStore.error || error : error;
  const isLoading = step === "password" ? submitting : false;

  return (
    <>
      <title> Signup - Loadstone Financial</title>
      <meta name="description" content="Signup to Loadstone" />
      <Form form={form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} data-aos="fade-right">
          {step === "account" && (
            <Account
              control={form.control}
              error={displayError}
              setError={setError}
              onSwitchToLogin={onSwitchToLogin}
            />
          )}

          {step === "password" && (
            <AuthMethod
              control={form.control}
              value={authMethod}
              onChange={setAuthMethod}
              error={displayError}
              setError={setError}
              onSwitchToLogin={onSwitchToLogin}
              loading={isLoading}
            />
          )}

          {step === "verification" && (
            <Verification
            // control={form.control}
            // error={error}
            // setError={setError}
            />
          )}
          {step === "phoneVerification" && (
            <PhoneNo
              initialPhoneNumber={phoneNumber}
              onNext={(phone) => {
                setPhoneNumber(phone);
                goToStep("otpVerification");
              }}
              onBack={() => goToStep("verification")}
            />
          )}
          {step === "otpVerification" && (
            <Otp
              phoneNumber={phoneNumber}
              onNext={() => goToStep("bvnVerification")}
              onBack={() => goToStep("phoneVerification")}
            />
          )}
          {step === "bvnVerification" && (
            <Bvn
              onNext={() => goToStep("pinSetup")}
              onBack={() => goToStep("otpVerification")}
            />
          )}
          {step === "pinSetup" && (
            <Pin
              onNext={() => {
                toast.success("Account setup complete! Redirecting to dashboard.");
                onClose();
                navigate("/dashboard/", { replace: true });
              }}
              onBack={() => goToStep("bvnVerification")}
            />
          )}
          {/* {step === "success" && <Success onClose={onClose} />} */}
        </form>
      </Form>
    </>
  );
}
