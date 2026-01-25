import Icon from "@mdi/react";
import { mdiAccount, mdiShieldLock, mdiPin, mdiBell, mdiDeleteForever } from "@mdi/js";

type SettingsTab = "account" | "security" | "pin" | "notification" | "delete";

interface SettingsTabsProps {
  activeTab: SettingsTab;
  onTabChange: (tab: SettingsTab) => void;
}

export default function SettingsTabs({ activeTab, onTabChange }: SettingsTabsProps) {
  const tabs = [
    { id: "account" as const, label: "Account Profile", icon: mdiAccount },
    { id: "security" as const, label: "Security", icon: mdiShieldLock },
    { id: "pin" as const, label: "Pin", icon: mdiPin },
    { id: "notification" as const, label: "Notification", icon: mdiBell },
    { id: "delete" as const, label: "Delete Account", icon: mdiDeleteForever },
  ];

  return (
    <div className="px-4 sm:px-6 mb-6">
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
              activeTab === tab.id
                ? "bg-brand-light-purple text-brand-purple shadow-2xl shadow-gray-500"
                : " text-gray-700 border-gray-300 hover:border-brand-light-purple"
            }`}
          >
            <Icon path={tab.icon} size={0.8} className="border-2 border-brand-purple rounded-sm bg-white" />
            <span className="text-sm font-bold">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
