import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";
import type { Control, FieldValues, Path } from "react-hook-form";

interface EditableFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  value: string;
  type?: "text" | "email" | "date";
  isEditing?: boolean;
  fieldType?: "text" | "select";
  selectOptions?: { value: string; label: string }[];
  placeholder?: string;
}

export default function EditableField<T extends FieldValues>({
  label,
  name,
  control,
  value,
  type = "text",
  isEditing = false,
  fieldType = "text",
  selectOptions = [],
  placeholder,
}: EditableFieldProps<T>) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      {isEditing ? (
        fieldType === "select" ? (
          <FormFieldSelect
            control={control}
            name={name}
            label={label}
            options={selectOptions}
            placeholder={placeholder || label}
            className=""
          />
        ) : (
          <div className="text-start [&_label]:!text-gray-700">
            <FormFieldText
              control={control}
              name={name}
              label={label}
              type={type}
              placeholder={placeholder || label}
              className="text-start"
            />
          </div>
        )
      ) : (
        <>
          <label className="block text-start text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
          <div className="text-start text-base text-gray-900 py-2 min-h-10 flex items-center">
            {value || <span className="text-gray-400">—</span>}
          </div>
        </>
      )}
    </div>
  );
}
