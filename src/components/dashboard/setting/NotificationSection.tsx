import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiBell } from "@mdi/js";
import Button from "@/components/ui/Button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface NotificationSettings {
  enableDesktop: boolean;
  enableEmail: boolean;
  notifyLoansApproved: boolean;
  notifyTransactionMade: boolean;
}

export default function NotificationSection() {
  const [settings, setSettings] = useState<NotificationSettings>({
    enableDesktop: false,
    enableEmail: false,
    notifyLoansApproved: false,
    notifyTransactionMade: false,
  });

  const handleToggle = (key: keyof NotificationSettings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    // TODO: Save settings to backend
    console.log("Saving notification settings:", settings);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto px-4 sm:px-6"
    >
      {/* Notification Icon and Title */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-brand-purple flex items-center justify-center mb-4">
          <Icon path={mdiBell} size={2.5} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-brand-purple">
          Notification settings
        </h2>
      </div>

      {/* General Notification Toggles */}
      <div className="space-y-6 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-700">
            Enable desktop notification
          </Label>
          <Switch
            checked={settings.enableDesktop}
            onCheckedChange={() => handleToggle("enableDesktop")}
          />
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-700">
            Enable email notifications
          </Label>
          <Switch
            checked={settings.enableEmail}
            onCheckedChange={() => handleToggle("enableEmail")}
          />
        </div>
      </div>

      {/* Notification Preferences Section */}
      <div className="mb-6">
        <div className="bg-gray-200 px-4 py-3 mb-4">
          <h3 className="text-sm font-bold text-brand-purple uppercase">
            NOTIFICATION PREFERENCES
          </h3>
          <p className="text-xs text-gray-600 mt-1">Notify me when</p>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">
              Loans are approved
            </Label>
            <Switch
              checked={settings.notifyLoansApproved}
              onCheckedChange={() => handleToggle("notifyLoansApproved")}
            />
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">
              A transaction is made
            </Label>
            <Switch
              checked={settings.notifyTransactionMade}
              onCheckedChange={() => handleToggle("notifyTransactionMade")}
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <Button
          type="button"
          content="Save Settings"
          classes="primary-btn btn-md px-8"
          onClick={handleSave}
        />
      </div>
    </motion.div>
  );
}
