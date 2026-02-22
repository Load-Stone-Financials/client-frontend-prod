import type { AuthOption, SignupFormData } from "@/types/onboarding";
import type { Control } from "react-hook-form";
import Button from "../../Button";
import { Label } from "../../label";
import { Checkbox } from "../../checkbox";
import { Link } from "react-router";
import SmallSpinner from "../../SmallSpinner";
import { FormFieldPassword } from "../../forms/FormFieldPassword";
import BaseDirectories from "@/baseDir/baseDirectories";

type AuthMethodProps = {
  control: Control<SignupFormData>;
  value: AuthOption;
  onChange: (value: AuthOption) => void;
  error: string;
  setError: (error: string) => void;
  onSwitchToLogin: () => void;
  /** When provided (e.g. from auth store), used instead of local loading for Sign Up button */
  loading?: boolean;
};

export default function AuthMethod({
  control,
  value,
  onChange,
  error,
  // setError: _setError,
  onSwitchToLogin,
  loading: externalLoading,
}: AuthMethodProps) {
  const loading = externalLoading ?? false;

  return (
    <div>
      <h3 className="text-xl text-brand-white text-start font-semibold mb-6">
        Create an Account
      </h3>
      <div className="">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="">
          <p className="text-white">Choose authentication method</p>
          <div className="flex gap-4 mt-3">
            <button
              type="button"
              onClick={() => onChange("password")}
              className={`flex-1 rounded-xl border p-4 text-left transition ${
                value === "password"
                  ? "border-brand-purple border-2 bg-brand-purple/10"
                  : "border-white/20"
              }`}
            >
              <p className="font-semibold text-white">Password</p>
              <p className="text-sm text-gray-400">
                Most common authentication method
              </p>
            </button>

            <button
              type="button"
              onClick={() => onChange("passkey")}
              className={`relative flex-1 rounded-xl border p-4 text-left transition ${
                value === "passkey"
                  ? "border-brand-purple border-2 bg-brand-purple/10"
                  : "border-white/20"
              }`}
            >
              <span className="absolute -top-2 right-2 text-xs bg-gray-600 px-2 rounded-full">
                NEW
              </span>
              <p className="font-semibold text-white">Passkey</p>
              <p className="text-sm text-gray-400">
                Passwordless easier, and safer login
              </p>
            </button>
          </div>
        </div>
        <div className="">
          {" "}
          {value === "password" && (
            <>
              <FormFieldPassword
                control={control}
                name="password"
                label="Password"
                placeholder="••••••••"
                // required
              />

              <p className="text-start text-xs text-gray-500">
                Your password must contain letters and numbers
              </p>
            </>
          )}
          {value === "passkey" && (
            <div className="flex justify-center py-10">
              <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center">
                <img
                  src={`${BaseDirectories.ICONS_DIR}/key.png`}
                  alt="Auth Key"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 text-gray-300 my-4">
        <Checkbox id="terms"  />
        <Label htmlFor="terms">
          Receive our newsletter & marketing communication
        </Label>
      </div>{" "}
      <small className="text-gray-500">
        By creating av account, you agree with our{" "}
        <Link
          to="/terms-of-service"
          className="text-brand-purple hover:underline"
        >
          Terms of Service
        </Link>
      </small>
      {loading ? (
        <SmallSpinner />
      ) : (
        <Button
          content="Sign Up"
          type="submit"
          disabled={loading}
          classes="primary-btn btn-md mb-2 !w-full mt-6"
        />
      )}
      <div className="text-sm text-center mt-6 text-brand-white">
        Already have an account?{" "}
        <button
          onClick={onSwitchToLogin}
          className="text-brand-purple hover:underline cursor-pointer"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
