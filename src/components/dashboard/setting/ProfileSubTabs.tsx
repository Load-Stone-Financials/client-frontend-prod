type ProfileTab = "personal" | "nextOfKin" | "documents";

interface ProfileSubTabsProps {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}

export default function ProfileSubTabs({ activeTab, onTabChange }: ProfileSubTabsProps) {
  const tabs = [
    { id: "personal" as const, label: "Personal" },
    { id: "nextOfKin" as const, label: "Next of Kin" },
    { id: "documents" as const, label: "Documents" },
  ];

  return (
    <div className="flex justify-center items-center gap-8 border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-3 text-sm font-medium transition-all ${
            activeTab === tab.id
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
