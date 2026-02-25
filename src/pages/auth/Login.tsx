/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Button from "../../components/ui/Button";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import type { LoginFormData } from "@/types/onboarding";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { FormFieldPassword } from "@/components/ui/forms/FormFieldPassword";
import { LogIn } from "@/utils/firebase/AuthFirestore";
import { auth } from "@/firebase/Firebase";
import { authStore } from "@/mobx_stores/RootStore";
import SmallSpinner from "@/components/ui/SmallSpinner";

interface LoginProps {
  onSwitchToSignup?: () => void;
  onClose?: () => void;
}

export default function Login({
  onSwitchToSignup,
  // control,
  onClose,
}: LoginProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useForm<LoginFormData>({
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const resolvePostLogin = async () => {
    const uid = auth.currentUser?.uid;
    if (!uid) return "login" as const;

    await auth.currentUser?.phoneNumber;
    await authStore.checkBvnLivenessStatus();

    // New user - no phone verified & no BVN yet: go through full onboarding flow
    if (!auth.currentUser?.phoneNumber && !authStore.hasBvn) {
      return "onboarding" as const;
    }

    // Fully verified user: send to dashboard
    if (auth.currentUser?.phoneNumber && authStore.hasBvn) {
      return "dashboard" as const;
    }

    // Fallback: treat as onboarding
    return "onboarding" as const;
  };

  const handleSubmit = async (data: LoginFormData) => {
    setError("");
    setIsLoading(true);

    try {
      const res = await LogIn({
        email: data.emailOrUsername,
        password: data.password,
      });

      if (res.error) {
        const code = res.data.code;
        if (code === "auth/user-not-found") {
          setError("User not found");
        } else if (
          code === "auth/wrong-password" ||
          code === "auth/invalid-login-credentials"
        ) {
          setError("Invalid email or password");
        } else if (code === "auth/invalid-email") {
          setError("Invalid email format");
        } else if (code === "auth/network-request-failed") {
          setError("Network error. Please check your connection.");
        } else if (code === "auth/too-many-requests") {
          setError("Too many attempts. Please try again later.");
        } else {
          setError(res.data.message || "Unable to login");
        }
        toast.error(error || "Login failed");
        return;
      }

      toast.success("Login successful");

      // Small delay so the toast is visible
      setTimeout(async () => {
        const next = await resolvePostLogin();

        if (next === "dashboard") {
          onClose?.();
          navigate("/dashboard/", { replace: true });
          return;
        }

        if (next === "onboarding") {
          // Use query param so Navbar opens the signup modal at phoneVerification
          onClose?.();
          window.location.href = "/?step=phoneVerification";
          return;
        }
      }, 800);
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
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          data-aos="zoom-out-left"
        >
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
              className="text-white"
              required
            />
            <FormFieldPassword
              control={form.control}
              name="password"
              label="Password"
              placeholder="••••••••"
              className="text-white"
              required
            />
          </div>
          {isLoading ? (
            <SmallSpinner />
          ) : (
            <>
              {" "}
              <Button
                content="Login with Password"
                type="submit"
                // onClick={onNext}
                classes="primary-btn btn-md mb-2 !w-full my-4"
                disabled={isLoading}
              />
            </>
          )}

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
