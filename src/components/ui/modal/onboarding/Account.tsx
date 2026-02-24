import type { SignupFormData } from "@/types/onboarding";
import Button from "../../Button";
import { Checkbox } from "../../checkbox";
import { FormFieldText } from "../../forms/FormFieldText";
import { Label } from "../../label";
import type { Control } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-phone-input-2/lib/style.css";

export default function Account({
  control,
  error,
  // setError,
  // onNext,
  onSwitchToLogin,
}: {
  control: Control<SignupFormData>;
  error: string;
  setError: (error: string) => void;
  // onNext: () => void;
  onSwitchToLogin: () => void;
}) {
  return (
    <div className="flex flex-col" data-aos="zoom-in-right">
      <h3 className="text-xl text-brand-white text-start font-semibold mb-6">
        Create an Account
      </h3>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="space-y-4 my-4">
        {/* <div className="grid grid-cols-12 gap-4">
          {" "}
          <FormFieldText
            control={control}
            name="firstName"
            label="First Name"
            placeholder="John"
            className="col-span-6 text-white"
            required
          />
          <FormFieldText
            control={control}
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            className="col-span-6 text-white"
            required
          />
        </div> */}

        <div className="text-start">
          <FormFieldText
            control={control}
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            className="text-white"
            // required
          />
          <small className="text-gray-500 mt-0">
            Your email must be a valid email address
          </small>
        </div>
        <div className="text-start">
          <PhoneInput
            defaultCountry="ng"
            value=""
            onChange={() => {}}
            inputClassName="!w-full text-white placeholder:text-white"
            className="!w-full"
            style={{ width: '100%' }}
            inputStyle={{ width: '100%' }}
          />
          <small className="text-gray-500 mt-0">
            Your phone number must be a valid phone number
          </small>
        </div>

      </div>
      <Button 
        content="Next"
        type="submit"
        // onClick={onNext}
        // disabled={loading}
        classes="primary-btn btn-md mb-2"
      />
      <div className="flex items-center gap-3 text-gray-500">
        <Checkbox id="terms" required />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>{" "}
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
