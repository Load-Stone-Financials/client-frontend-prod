import { mdiContentCopy, mdiWallet } from "@mdi/js";
import StatCard from "../StatCard";
import RecentTable from "./RecentTable";
import Services from "./Services";
import Button from "@/components/ui/Button";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import WalletDetailsModal from "@/components/ui/modal/wallet/WalletDetailsModal";
import { Link } from "react-router-dom";

export default function Main() {
  const [isWalletDetailsModalOpen, setIsWalletDetailsModalOpen] = useState(false);

  const openWalletDetailsModal = () => {
    setIsWalletDetailsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        <StatCard
          title="Wallet Balance"
          icon={mdiWallet}
          value="₦5,000,000.00"
          title2="LOANSTONE"
          value2="01234567890"
          icon2={mdiContentCopy}
          action={
            <Button
              content="Fund Wallet"
              classes="primary-btn btn-md"
              onClick={openWalletDetailsModal}
            />
          }
          variant="one"
        />

        <StatCard
          title="Loans"
          value="₦0.00"
          action={<Link to="/dashboard/loans" className="text-sm underline">View all</Link>}
          variant="two"
        />

        <StatCard
          title="Investment"
          value="₦0.00"
          action={<Link to="/dashboard/invest" className="text-sm underline">View all</Link>}
          variant="three"
        />
      </div>
      <div className="flex flex-col my-4">
        <div className="flex items-center">
          <h4 className="uppercase font-extrabold text-xs sm:text-sm min-w-24 sm:min-w-28 text-brand-purple">
            our services
          </h4>
          <div className="bg-gray-300 h-0.5 w-full ml-2 sm:ml-4"></div>
        </div>
        <Services />
      </div>
      <RecentTable />
      <Modal
        isOpen={isWalletDetailsModalOpen}
        onClose={() => setIsWalletDetailsModalOpen(false)}
        title="Wallet Details"
        maxWidth="md"
        useBackgroundImage={false}
      >
        <WalletDetailsModal />
      </Modal>
    </>
  );
}
