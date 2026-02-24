import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "@/components/ui/modal/Modal";
import BaseDirectories from "@/baseDir/baseDirectories";
import Button from "@/components/ui/Button";

export default function VerifyEmailSuccessful() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    navigate({ pathname: "/", search: "?step=phoneVerification" }, { replace: true });
  };

  if (!isOpen) return null;

  return (
    <div>
        <Modal isOpen={isOpen} onClose={handleClose}>
            <div className="flex flex-col items-center">
                <img src={`${BaseDirectories.ICONS_DIR}/mail2.png`} alt="Email Verified" />
                <h1 className="text-2xl font-bold text-gray-300">Email Verified</h1>
                <p className="text-gray-500">Your email has been verified successfully</p>
                <Button content="Continue" classes="primary-btn btn-md w-full" onClick={handleClose} />
            </div>
        </Modal>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
    </div>
  )
}

