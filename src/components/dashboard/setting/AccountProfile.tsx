import { useState } from "react";
import { motion } from "framer-motion";
import ProfileHeader from "./ProfileHeader";
import ProfileSubTabs from "./ProfileSubTabs";
import PersonalInfoForm from "./PersonalInfoForm";
import NextOfKinSection from "./NextOfKinSection";
import DocumentsSection from "./DocumentsSection";

type ProfileTab = "personal" | "nextOfKin" | "documents";

export default function AccountProfile() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("personal");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="px-4 sm:px-6"
    >
      <ProfileHeader />
      <ProfileSubTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "personal" && <PersonalInfoForm />}
      {activeTab === "nextOfKin" && <NextOfKinSection />}
      {activeTab === "documents" && <DocumentsSection />}
    </motion.div>
  );
}
