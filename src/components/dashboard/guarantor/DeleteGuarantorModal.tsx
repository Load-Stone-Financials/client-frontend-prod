
import Icon from "@mdi/react";
import { mdiAlertCircleOutline } from "@mdi/js";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/modal/Modal";
import type { Guarantor } from "@/types/guarantor";

interface DeleteGuarantorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  guarantor: Guarantor | null;
  isDeleting?: boolean;
}

export default function DeleteGuarantorModal({
  isOpen,
  onClose,
  onConfirm,
  guarantor,
  isDeleting = false,
}: DeleteGuarantorModalProps) {
  if (!guarantor) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="md" useBackgroundImage={false}>
      <div className="p-6">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
            <Icon path={mdiAlertCircleOutline} size={2} className="text-red-600" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Delete Guarantor
          </h2>
          <p className="text-gray-600 mb-4">
            Are you sure you want to delete this guarantor? This action cannot be undone.
          </p>
          
          {/* Guarantor Details */}
          <div className="bg-gray-50 rounded-lg p-4 mt-4 text-left">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Name:</span>
                <span className="text-sm font-medium text-gray-900">{guarantor.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Email:</span>
                <span className="text-sm font-medium text-gray-900">{guarantor.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Phone:</span>
                <span className="text-sm font-medium text-gray-900">{guarantor.phoneNumber}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            content="Cancel"
            classes="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition btn-md flex-1"
            onClick={onClose}
            disabled={isDeleting}
          />
          <Button
            content={isDeleting ? "Deleting..." : "Delete"}
            classes="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition btn-md flex-1"
            onClick={onConfirm}
            disabled={isDeleting}
          />
        </div>
      </div>
    </Modal>
  );
}