import BaseDirectories from "@/baseDir/baseDirectories";
import { authStore } from "@/mobx_stores/RootStore";
import Button from "../../Button";
// import type { Control } from "react-hook-form";
// import type { SignupFormData } from "@/types/onboarding";

// type VerificationProps = {
//   control: Control<SignupFormData>;
//   error: string;
//   setError: (error: string) => void;
// };

export default function Verification(
//   {
//   control,
//   error,
//   onNext,
// }: VerificationProps
) {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="flex flex-col items-center mb-6 md:mt-12">
        <img src={`${BaseDirectories.ICONS_DIR}/success.png`} alt="Auth Key" />
        <h2 className="text-2xl text-gray-100 font-extrabold">Signup Successful</h2>
      </div>
      <p className="text-gray-500 mb-6 max-w-104 flex text-center">
        We’ve sent you an email to complete your registration. After you verify
        your email, come back here to continue.
      </p>
      <Button
        content="Resend Verification Email"
        classes="primary-btn btn-md my-6 !w-full"
        type="button"
        onClick={() => authStore.ResendVerificationEmail()}
      />
    </div>
  );
}
