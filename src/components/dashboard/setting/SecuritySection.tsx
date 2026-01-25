import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiShieldLock, mdiCheck } from "@mdi/js";
import Button from "@/components/ui/Button";
import { FormFieldPassword } from "@/components/ui/forms/FormFieldPassword";
import { Form } from "@/components/ui/form";

interface SecurityFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function SecuritySection() {
  const form = useForm<SecurityFormData>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // const { control, handleSubmit, watch, setError } = form;
  const { control, handleSubmit, setError } = form;
  // const newPassword = watch("newPassword");

  const onSubmit = (data: SecurityFormData) => {
    // Validate that new password and confirm password match
    if (data.newPassword !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    // TODO: Save data to backend
    console.log("Saving security data:", data);
    // You can add success toast notification here
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
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Security Icon and Title */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-brand-purple flex items-center justify-center">
                <Icon path={mdiShieldLock} size={2.5} className="text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center border-4 border-white">
                <Icon path={mdiCheck} size={1} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-brand-purple">Security</h2>
          </div>

          {/* Password Fields */}
          <div className="space-y-6 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <FormFieldPassword
                control={control}
                name="currentPassword"
                label="Current password"
                placeholder="Current password"
                required
                className="text-start [&_label]:!text-gray-700"
              />
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <FormFieldPassword
                control={control}
                name="newPassword"
                label="New password"
                placeholder="Current password"
                required
                className="text-start [&_label]:!text-gray-700"
              />
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <FormFieldPassword
                control={control}
                name="confirmPassword"
                label="Confirm password"
                placeholder="Current password"
                required
                className="text-start [&_label]:!text-gray-700"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              content="Save Changes"
              classes="primary-btn btn-md px-8"
            />
          </div>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
