"use client"

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Control, FieldValues, Path } from "react-hook-form"

type FormFieldSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  options: { value: string; label: string }[]
  placeholder?: string
  className?: string
}

export function FormFieldSelect<T extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder = "Select an option",
  className,
}: FormFieldSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-700 text-start">{label}</FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="z-9999 text-gray-700">
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value} className={className}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage name={name} />
        </FormItem>
      )}
    />
  )
}
