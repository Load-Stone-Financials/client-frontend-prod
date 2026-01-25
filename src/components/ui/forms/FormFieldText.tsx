"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../input";

type FormFieldTextProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "date";
  className?: string;
  required?: boolean | string;
};

export function FormFieldText<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className,
  required,
}: FormFieldTextProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      rules={{
        required:
          required === true
            ? `${label} is required`
            : required || false,
      }}
      render={({ field }) => (
        <FormItem className={`${className} text-start text-gray-700 `}>
          <FormLabel className="text-start">{label}</FormLabel>

          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>

          <FormMessage name={name} />
        </FormItem>
      )}
    />
  );
}
