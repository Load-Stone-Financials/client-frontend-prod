import { mdiCircleSmall, mdiMinus } from "@mdi/js";
import Icon from "@mdi/react";
import BaseDirectories from "../../baseDir/baseDirectories";
import toast from "react-hot-toast";

const cards = [
  {
    id: "01",
    title: "Operating capital financing",
    description: "Secure essential working capital today and start expanding your business. Apply now to get started.",
  },
  {
    id: "02",
    title: "Local Purchase Order Financing",
    description: "Secure essential working capital today and start expanding your business. Apply now to get started.",
  },
    {
    id: 3,
    title: "Invoice Discount Finance",
    description: "Secure essential working capital today and start expanding your business. Apply now to get started.",
  },

];
export default function WhatWeDo() {
  return (
    <section className="md:mt-10 mx-auto">
      <div className="grid md:grid-cols-2 grid-rows-1 px-2 md:mb-36 items-start justify-center mx-4 text-center gap-10 md:mx-20 my-8">
        <div className="flex md:justify-end justify-center items-end">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/wwd4.png`}
            alt="Hero"
            className="h-[450px]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-md -ml-6 text-brand-purple/50 flex text-start items-center font-bold mb-4">
            {" "}
            <Icon path={mdiCircleSmall} size={3} className="" />{" "}
            <span className="uppercase -ml-4">What We Do</span>
          </div>
          <div className="flex flex-col justify-self-start font-inter items-start gap-6 md:mt-2 text-center">
            <p className="max-w-lg text-start font-medium leading-10 text-lg text-gray-600">
              We offer Hassle-free B2B financing with zero collateral.
            </p>
            <div className="flex justify-center items-center gap-4">
              {/* <div className="before:content-[''] before:block before:w-2 before:h-32 before:bg-brand-purple before:mx-auto before:my-4" /> */}
              <div className="text-start max-w-lg ">
                {" "}
                <h4 className="text-6xl font-medium mb-4 text-gray-600 ">
                  Fast-moving consumer goods (FMCG)
                </h4>
                <p className="max-w-xs">
                  Tap into flexible financing to maintain inventory levels and
                  respond promptly to market opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="text-center">
        <h2 className="text-6xl font-semibold font-inter max-w-3xl text-center mx-auto mb-2">
          Secure instant funding for your business with ease
        </h2>
      </div>
      <div
        className="h-[350px] -mb-10"
        style={{
          backgroundImage: "url('/images/landing/bg2.png')",
          backgroundSize: "center",
          backgroundPosition: "start",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid md:grid-cols-3 grid-rows-1 px-2 md:mb-36 items-start justify-center mx-4 text-center gap-10 md:mx-20 my-8 pt-10">
          <div className="flex flex-col justify-center bg-brand-white p-4 rounded-xl shadow-md items-start gap-4 w-[400px]">
            <div className="flex items-center gap-2 text-start">
              <span className="text-xs font-bold bg-brand-purple text-gray-300 p-2 rounded-full">
                {cards[0].id}
              </span>{" "}
              <h2 className="text-xl font-medium font-inter mx-auto mb-2">
                {cards[0].title}
              </h2>
              <Icon className="ml-2" path={mdiMinus} size={1} />{" "}
            </div>

            <p className="max-w-xs text-start">
              {cards[0].description}
            </p>
            <span
              className="flex bg-gray-100 px-4 py-2 rounded-full text-brand-purple mt-4 cursor-pointer"
              onClick={() => {
                toast.success("Coming Soon");
              }}
            >
              <span className="">Learn More </span>{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
