import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import EditableField from "@/components/ui/EditableField";
import { Form } from "@/components/ui/form";

interface NextOfKinFormData {
  firstName: string;
  lastName: string;
  gender: string;
  relationship: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface FieldConfig {
  label: string;
  key: keyof NextOfKinFormData;
  type?: "text" | "email";
  fieldType?: "text" | "select";
  selectOptions?: { value: string; label: string }[];
  required?: boolean;
}

export default function NextOfKinSection() {
  const [isEditing, setIsEditing] = useState(false);

  const originalData: NextOfKinFormData = {
    firstName: "",
    lastName: "",
    gender: "",
    relationship: "",
    email: "",
    phoneNumber: "",
    address: "",
  };

  const form = useForm<NextOfKinFormData>({
    defaultValues: originalData,
  });

  const { control, watch, reset, handleSubmit } = form;
  const formData = watch();

  const fields: FieldConfig[] = [
    {
      label: "First Name*",
      key: "firstName",
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      key: "lastName",
      type: "text",
    },
    {
      label: "Gender*",
      key: "gender",
      fieldType: "select",
      selectOptions: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" },
      ],
      required: true,
    },
    {
      label: "Next of kin's Relationship",
      key: "relationship",
      fieldType: "select",
      selectOptions: [
        { value: "Parent", label: "Parent" },
        { value: "Spouse", label: "Spouse" },
        { value: "Sibling", label: "Sibling" },
        { value: "Child", label: "Child" },
        { value: "Other", label: "Other" },
      ],
    },
    {
      label: "Email Address*",
      key: "email",
      type: "email",
      required: true,
    },
    {
      label: "Phone Number",
      key: "phoneNumber",
      type: "text",
    },
    {
      label: "Address",
      key: "address",
      type: "text",
    },
  ];

  const onSubmit = (data: NextOfKinFormData) => {
    // TODO: Save data to backend
    setIsEditing(false);
    console.log("Saving Next of Kin data:", data);
  };

  const handleCancel = () => {
    // Reset to original values
    reset(originalData);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Form form={form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {fields.map((field) => (
              <EditableField
                key={field.key}
                label={field.label}
                name={field.key}
                control={control}
                value={formData[field.key] || ""}
                type={field.type}
                isEditing={isEditing}
                fieldType={field.fieldType}
                selectOptions={field.selectOptions}
                placeholder={
                  field.key === "firstName"
                    ? "Name"
                    : field.key === "lastName"
                    ? "Surname"
                    : field.key === "gender"
                    ? "Select employment status"
                    : field.key === "relationship"
                    ? "Select option"
                    : field.key === "email"
                    ? "Email"
                    : field.key === "phoneNumber"
                    ? "+234 000 000 0000"
                    : field.key === "address"
                    ? "Enter address"
                    : ""
                }
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            {!isEditing ? (
              <Button
                type="button"
                content="Edit Profile"
                classes="primary-btn btn-md px-8"
                onClick={() => setIsEditing(true)}
              />
            ) : (
              <>
                <Button
                  type="button"
                  content="Cancel"
                  classes="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 rounded-lg transition btn-md"
                  onClick={handleCancel}
                />
                <Button
                  type="submit"
                  content="Save Changes"
                  classes="primary-btn btn-md px-8"
                />
              </>
            )}
          </div>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
