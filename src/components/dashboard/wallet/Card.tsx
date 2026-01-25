import {
  mdiAccessPoint,
  mdiChevronRight,
  mdiRecycle,
  mdiWallet,
} from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import type { TransferType } from "@/types/wallet";
import Estatement from "./Estatement";
import Transfer from "./Transfer";
import TransferWallet from "./TransferWallet";

export default function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TransferType | null>(
    null
  );

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOption(null);
  };

  const content = [
    {
      title: "Bank Transfer" as TransferType,
      Icon: mdiWallet,
      Icon2: mdiChevronRight,
    },
    {
      title: "Wallet Transfer" as TransferType,
      Icon: mdiRecycle,
      Icon2: mdiChevronRight,
    },
    {
      title: "Generated E-statement" as TransferType,
      Icon: mdiAccessPoint,
      Icon2: mdiChevronRight,
    },
  ];

  const handleCardClick = (option: TransferType) => {
    setSelectedOption(option);
    setIsModalOpen(true);
  };

  const renderModalContent = () => {
    switch (selectedOption) {
      case "Bank Transfer":
        return <Transfer />;
      case "Wallet Transfer":
        return <TransferWallet />;
      case "Generated E-statement":
        return <Estatement />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-4 rounded-2xl">
        {content.map((service, index) => (
          <span
            className="bg-white flex items-center gap-2 order-2 p-2 py-4 shadow-2xl rounded-lg hover:bg-gray-100 cursor-pointer justify-between"
            key={index}
            onClick={() => handleCardClick(service.title)}
          >
            <span className="flex items-center gap-2">
              <Icon
                path={service.Icon}
                size={1}
                className="text-brand-purple"
              />
              <h4 className="">{service.title}</h4>
            </span>
            {service.Icon2 && (
              <Icon
                path={service.Icon2}
                size={1}
                className="text-brand-purple text-end"
              />
            )}
          </span>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        useBackgroundImage={false}
      >
        <div className="p-4">{renderModalContent()}</div>
      </Modal>
    </>
  );
}
