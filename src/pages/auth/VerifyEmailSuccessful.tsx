import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import Modal from "@/components/ui/modal/Modal";
import BaseDirectories from "@/baseDir/baseDirectories";

export default function VerifyEmailSuccessful() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    window.location.href = "/login";
  };

  if (!isOpen) return null;

  return (
    <div>
        <Modal isOpen={isOpen} onClose={handleClose}>
            <div className="flex flex-col items-center">
                <img src={`${BaseDirectories.ICONS_DIR}/mail2.png`} alt="Email Verified" />
                <h1 className="text-2xl font-bold">Email Verified</h1>
                <p className="text-gray-500">Your email has been verified successfully</p>
            </div>
        </Modal>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
    </div>
  )
}

