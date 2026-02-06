/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Button from "../../components/ui/Button";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import type { LoginFormData } from "@/types/onboarding";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { FormFieldPassword } from "@/components/ui/forms/FormFieldPassword";

interface LoginProps {
  onSwitchToSignup?: () => void;
  onClose?: () => void;
}

export default function Login({
  onSwitchToSignup,
  // control,
  onClose,
}: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useForm<LoginFormData>({
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const handleSubmit = async (data: LoginFormData) => {
    setError("");
    setIsLoading(true);

    try {
      // Add your login API call here
      console.log("Login data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // On success, close modal
      onClose?.();
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <> 
    <title>Login - Loadstone Financial</title>
    <meta name="description" content="Login to Loadstone" />
    <Form form={form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} data-aos='zoom-out-left'>
        <h3 className="text-xl text-brand-white text-start font-semibold mb-6">
         Log into Loanstone
        </h3>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="space-y-4 my-4">
          {" "}
          <FormFieldText
            control={form.control}
            name="emailOrUsername"
            label="Email or Username"
            placeholder="you@example.com"
            className=""
            required
          />
          <FormFieldPassword
            control={form.control}
            name="password"
            label="Password"
            placeholder="••••••••"
            className=""
            required
          />
        </div>
      
          <Button
            content="Login with Password"
            type="submit"
            // onClick={onNext}
            classes="primary-btn btn-md mb-2 !w-full my-4" disabled={isLoading}  
          />
          <div className="flex items-center justify-center">
            <div className="border w-full border-gray-600" />{" "}
            <span className="text-brand-white">OR</span>{" "}
            <div className="border w-full border-gray-600" />
          </div>
          <Button
            content="Login with Passkey"
            type="button"
            // onClick={onNext}
            classes="primary-btn !bg-[#190740] !text-brand-purple btn-md my-4 !w-full"
            disabled
          />

        <div className="mt-4 flex justify-between items-center ">
          <div className="text-sm text-center mt-6 text-brand-white">
            Already have an account?{" "}
            <button
              onClick={onSwitchToSignup}
              className="text-brand-purple hover:underline cursor-pointer"
            >
              Signup
            </button>
          </div>
          <div className="text-brand-purple">Trouble with log in?</div>
        </div>
      </form>
    </Form> 
    </>
   
  );
}
