import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";
import { FormFieldDate } from "@/components/ui/forms/FormFieldDate";
import Button from "@/components/ui/Button";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import SuccessModal from "./SuccessModal";
import type { Guarantor } from "@/types/guarantor";

type AddGuarantorFormData = Omit<Guarantor, "id" | "status" | "dateAdded">;

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
  "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

export default function AddGuarantorForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [savedGuarantorName, setSavedGuarantorName] = useState("");

  const form = useForm<AddGuarantorFormData>({
    defaultValues: {
      fullName: "",
      gender: "Female",
      email: "",
      phoneNumber: "",
      dob: "",
      address: "",
      lga: "",
      state: "",
      country: "Nigeria",
      occupation: "",
      relationship: "",
      bvn: "",
      nin: "",
      employerOrCompanyName: "",
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (data: AddGuarantorFormData) => {
    console.log("Form data:", data);
    setIsSubmitting(true);
    setSavedGuarantorName(data.fullName);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
    }, 1000);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    navigate("/dashboard/guarantors");
  };

  return (
    <>
      <div className="bg-white shadow-2xl rounded-lg">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
          <button
            onClick={() => navigate("/dashboard/guarantors")}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Back to guarantors"
          >
            <Icon path={mdiArrowLeft} size={1} className="text-gray-700" />
          </button>
          <h3 className="font-bold text-brand-purple text-lg">
            Add New Guarantor
          </h3>
        </div>

        {/* Form */}
        <div className="p-6">
          <Form form={form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information Section */}
              <div className="mb-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormFieldText
                    control={control}
                    name="fullName"
                    label="Full Name"
                    placeholder="Enter full name" className="text-gray-500"
                    required
                  />
                  <FormFieldSelect
                    control={control}
                    name="gender"
                    label="Gender"
                    options={[
                      { value: "Male", label: "Male" },
                      { value: "Female", label: "Female" },
                      { value: "Other", label: "Other" },
                    ]}
                    placeholder="Select gender" className="text-gray-500"
                  />
                  <FormFieldDate
                    control={control}
                    name="dob"
                    label="Date of Birth"
                    placeholder="Select date" className="text-gray-500"
                    max={new Date().toISOString().split("T")[0]}
                  />
                  <FormFieldText
                    control={control}
                    name="relationship"
                    label="Relationship"
                    placeholder="e.g., Friend, Sibling, Colleague" className="text-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormFieldText
                    control={control}
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="john.doe@example.com" className="text-gray-500"
                    required
                  />
                  <FormFieldText
                    control={control}
                    name="phoneNumber"
                    label="Phone Number"
                    placeholder="08012345678" className="text-gray-500"
                    type="text"
                    required
                  />
                  <FormFieldText
                    control={control}
                    name="address"
                    label="Address"
                    placeholder="Enter address" className="text-gray-500"
                  />
                  <FormFieldText
                    control={control}
                    name="lga"
                    label="LGA"
                    placeholder="Enter LGA" className="text-gray-500"
                  />
                  <FormFieldSelect
                    control={control}
                    name="state"
                    label="State"
                    options={nigerianStates.map(state => ({ value: state, label: state }))}
                    placeholder="Select state" className="text-gray-500"
                  />
                  <FormFieldText
                    control={control}
                    name="country"
                    label="Country"
                    placeholder="Enter country" className="text-gray-500"
                  />
                </div>
              </div>

              {/* Employment Information */}
              <div className="mb-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormFieldText
                    control={control}
                    name="occupation"
                    label="Occupation"
                    placeholder="Enter occupation" className="text-gray-500"
                  />
                  <FormFieldText
                    control={control}
                    name="employerOrCompanyName"
                    label="Employer/Company Name"
                    placeholder="Enter employer or company name" className="text-gray-500"
                  />
                </div>
              </div>

              {/* Verification Details */}
              <div className="mb-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormFieldText
                    control={control}
                    name="bvn"
                    label="BVN"
                    placeholder="Enter BVN"
                    type="text" className="text-gray-500"
                  />
                  <FormFieldText
                    control={control}
                    name="nin"
                    label="NIN"
                    placeholder="Enter NIN"
                    type="text" className="text-gray-500"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  content="Cancel"
                  classes="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition btn-md flex-1"
                  onClick={() => navigate("/dashboard/guarantors")}
                  type="button"
                />
                <Button
                  content={isSubmitting ? "Saving..." : "Save Guarantor"}
                  classes="primary-btn btn-md flex-1"
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        title="Guarantor Added Successfully"
        message={`${savedGuarantorName} has been added as a guarantor.`}
      />
    </>
  );
}
