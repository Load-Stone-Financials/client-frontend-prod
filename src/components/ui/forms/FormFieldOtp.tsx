"use client"

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import type { Control, FieldValues, Path } from "react-hook-form"
import OtpInput from "react-otp-input"

type FormFieldOTPProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  length?: number
  inputType?: "text" | "tel" | "password"
  className?: string
  containerStyle?: string
  placeholder?: string
}

export function FormFieldOTP<T extends FieldValues>({
  control,
  name,
  label,
  length = 6,
  inputType = "tel",
  className,
  containerStyle,
  placeholder,
}: FormFieldOTPProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="text-center text-sm font-medium text-gray-700 mb-4 block">
            {label}
          </FormLabel>

          <FormControl>
            <div className="flex justify-center">
              <OtpInput
                value={field.value || ""}
                onChange={field.onChange}
                numInputs={length}
                inputType={inputType}
                shouldAutoFocus
                renderInput={(props) => (
                  <input
                    {...props}
                    type={inputType}
                    placeholder={placeholder || "*"}
                    className="w-10! h-10 rounded-md border border-purple-200 text-center text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white text-gray-900 focus:border-transparent transition"
                  />
                )}
                containerStyle={containerStyle || "flex justify-center gap-4"}
              />
            </div>
          </FormControl>

          <FormMessage name={name} />
        </FormItem>
      )}
    />
  )
}
