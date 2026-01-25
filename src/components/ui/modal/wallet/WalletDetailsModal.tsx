import Button from "@/components/ui/Button";
import { mdiContentCopy } from "@mdi/js";
import Icon from "@mdi/react";
import { toast } from "react-hot-toast";

export default function WalletDetailsModal() {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center">
      <h4 className="text-xl font-bold text-brand-purple">Wallet Details</h4>
      <hr className="w-full border-gray-200" />
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="flex justify-between  p-4 gap-2 w-full items-center bg-brand-purple">
          <h5 className="text-lg font-bold text-white">Bank</h5>
          <p className="text-sm text-white">VFD</p>
        </div>
        <div className="flex justify-between  p-4 gap-2 w-full items-center bg-brand-purple">
          <h5 className="text-lg font-bold text-white">Wallet Balance</h5>
          <p className="text-sm text-white">₦5,000,000.00</p>
        </div>
        <div className="flex justify-between  p-4 gap-2 w-full items-center bg-brand-purple">
          <h5 className="text-lg font-bold text-white">Account Number</h5>
          <p className="text-sm text-white flex gap-2">
            01234567890
            <span
              className="text-yellow-500"
              onClick={() => {
                navigator.clipboard.writeText("01234567890");
                toast.success("Account number copied to clipboard");
              }}
            >
              {" "}
              <Icon path={mdiContentCopy} size={1} className="text-white" />
            </span>
          </p>
        </div>
        <div className="flex justify-between  p-4 gap-2 w-full items-center bg-brand-purple">
          <h5 className="text-lg font-bold text-white">Single Limit</h5>
          <p className="text-sm text-white">₦10,000,000.00</p>
        </div>
        <div className="flex justify-between  p-4 gap-2 w-full items-center bg-brand-purple">
          <h5 className="text-lg font-bold text-white">Daily Limit</h5>
          <p className="text-sm text-white">₦10,000,000.00</p>
        </div>
      </div>
      <div className="flex flex-col opacity-50 w-full">
        <div className="flex justify-between items-center">
          <h5 className="">Tier 2</h5>
          <Button content="Upgrade Account" classes="primary-btn btn-md" />
        </div>
        <div className="flex justify-between items-center">
          <h5 className="">Transaction daily Limit</h5>
          <p className="text-sm ">₦10,000,000.00</p>
        </div>
        <div className="flex justify-between items-center">
          <h5 className="">Transaction Single Limit</h5>
          <p className="text-sm ">₦10,000,000.00</p>
        </div>
      </div>
      <hr className="w-full border-gray-200" />
      <div className="flex flex-col opacity-50 w-full">
        <div className="flex justify-between items-center">
          <h5 className="">Tier 3</h5>
          <Button content="Upgrade Account" classes="primary-btn btn-md" />
        </div>
        <div className="flex justify-between items-center">
          <h5 className="">Transaction daily Limit</h5>
          <p className="text-sm ">₦10,000,000.00</p>
        </div>
        <div className="flex justify-between items-center">
          <h5 className="">Transaction Single Limit</h5>
          <p className="text-sm ">₦10,000,000.00</p>
        </div>
      </div>
    </div>
  );
}
