import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import EditableField from "@/components/ui/EditableField";
import { Form } from "@/components/ui/form";

interface PersonalInfoFormData {
  title: string;
  fullName: string;
  email: string;
  position: string;
  share: string;
  dateOfBirth: string;
  gender: string;
  bvn: string;
  identificationType: string;
  identificationNumber: string;
  address: string;
  lga: string;
  state: string;
  country: string;
  residentialStatus: string;
  maritalStatus: string;
  yearMovedToAddress: string;
  educationalLevel: string;
}

interface FieldConfig {
  label: string;
  key: keyof PersonalInfoFormData;
  type?: "text" | "email" | "date";
  fieldType?: "text" | "select";
  selectOptions?: { value: string; label: string }[];
}

export default function PersonalInfoForm() {
  const [isEditing, setIsEditing] = useState(false);

  const originalData: PersonalInfoFormData = {
    title: "Mr",
    fullName: "Zion Imago-Dei",
    email: "zion@example.com",
    position: "CEO",
    share: "60%",
    dateOfBirth: "03/03/2000",
    gender: "Male",
    bvn: "00223867403",
    identificationType: "NIN",
    identificationNumber: "00223867403",
    address: "Kale dean road, Ikeja Lagos",
    lga: "Ikeja",
    state: "Lagos",
    country: "Nigeria",
    residentialStatus: "Tenant",
    maritalStatus: "single",
    yearMovedToAddress: "2020",
    educationalLevel: "B.sc",
  };

  const form = useForm<PersonalInfoFormData>({
    defaultValues: originalData,
  });

  const { control, watch, reset, handleSubmit } = form;
  const formData = watch();

  const fields: FieldConfig[] = [
    {
      label: "Title",
      key: "title",
      fieldType: "select",
      selectOptions: [
        { value: "Mr", label: "Mr" },
        { value: "Mrs", label: "Mrs" },
        { value: "Miss", label: "Miss" },
        { value: "Dr", label: "Dr" },
        { value: "Prof", label: "Prof" },
      ],
    },
    { label: "Full name", key: "fullName", type: "text" },
    { label: "Email Address", key: "email", type: "email" },
    { label: "Position in company", key: "position", type: "text" },
    { label: "Share in the company", key: "share", type: "text" },
    { label: "Date of birth", key: "dateOfBirth", type: "date" },
    {
      label: "Gender",
      key: "gender",
      fieldType: "select",
      selectOptions: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" },
      ],
    },
    { label: "BVN", key: "bvn", type: "text" },
    {
      label: "Identification type",
      key: "identificationType",
      fieldType: "select",
      selectOptions: [
        { value: "NIN", label: "NIN" },
        { value: "Driver's License", label: "Driver's License" },
        { value: "International Passport", label: "International Passport" },
        { value: "Voter's Card", label: "Voter's Card" },
      ],
    },
    { label: "identification number", key: "identificationNumber", type: "text" },
    { label: "Address", key: "address", type: "text" },
    { label: "LGA", key: "lga", type: "text" },
    { label: "State", key: "state", type: "text" },
    { label: "Country", key: "country", type: "text" },
    {
      label: "Residential status",
      key: "residentialStatus",
      fieldType: "select",
      selectOptions: [
        { value: "Tenant", label: "Tenant" },
        { value: "Owner", label: "Owner" },
        { value: "Living with Family", label: "Living with Family" },
      ],
    },
    {
      label: "Marital status",
      key: "maritalStatus",
      fieldType: "select",
      selectOptions: [
        { value: "single", label: "Single" },
        { value: "married", label: "Married" },
        { value: "divorced", label: "Divorced" },
        { value: "widowed", label: "Widowed" },
      ],
    },
    { label: "Year you moved to the address", key: "yearMovedToAddress", type: "text" },
    {
      label: "Educational level",
      key: "educationalLevel",
      fieldType: "select",
      selectOptions: [
        { value: "B.sc", label: "B.sc" },
        { value: "M.sc", label: "M.sc" },
        { value: "Ph.D", label: "Ph.D" },
        { value: "HND", label: "HND" },
        { value: "OND", label: "OND" },
        { value: "SSCE", label: "SSCE" },
        { value: "Primary", label: "Primary" },
      ],
    },
  ];

  const onSubmit = (data: PersonalInfoFormData) => {
    // TODO: Save data to backend
    setIsEditing(false);
    console.log("Saving data:", data);
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
