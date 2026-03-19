import LoanCalc from "@/components/landingSections/LoanCalc";
import LandingLayout from "../../components/_shared/LandingLayout";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";
import Download from "@/components/landingSections/Download";
import Icon from "@mdi/react";
import { mdiCircleSmall, mdiMinus, mdiPlus } from "@mdi/js";
import BaseDirectories from "@/baseDir/baseDirectories";
import { useState } from "react";

const cards = [
  {
    id: "01",
    title: "Operating capital financing",
    description:
      "Secure essential working capital today and start expanding your business. Apply now to get started.",
  },
  {
    id: "02",
    title: "Local Purchase Order Financing",
    description:
      "Secure essential working capital today and start expanding your business. Apply now to get started.",
  },
  {
    id: "03",
    title: "Invoice Discount Finance",
    description:
      "Secure essential working capital today and start expanding your business. Apply now to get started.",
  },
];

export default function Business() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveCardId(activeCardId === id ? null : id);
  };
  return (
    <LandingLayout>
      <title>Business</title>
      <meta name="description" content="Loadstone Business" />
      <section className="">
        <div
          className=""
          style={{
            backgroundImage: "url('/images/landing/herobg2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div
            className="px-2 flex md:flex-row flex-col pt-10 text-center justify-between gap-2 md:mx-20"
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div className="text-white text-start flex flex-col mt-20 gap-6 ">
              <h3 className="uppercase text-start text-brand-purple-light">
                {" "}
                Why Tradestone?
              </h3>
              <h1 className="text-5xl font-bold mb-4 md:max-w-lg">
                Build Wealth and Grow Bigger with Loadstone
              </h1>
              <p className="text-xl md:max-w-md">
                Across every sector, Loadstone provides tailored financing
                solutions designed to fuel your growth and success.
              </p>
              <div className="mt-8">
                <Button content="Get Loan" classes="secondary-btn btn-sm !rounded-md" />
              </div>
            </div>
            <div className="flex items-center justify-center text-white">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/business/hero.png`}
                alt="Hero"
                className="max-w-full md:mt-16"
              />
            </div>
          </div>{" "}
        </div>
        <div className="">
          <h2 className="text-center text-5xl font-semibold max-w-4xl mx-auto mt-6">
            Secure instant funding for your business with ease
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-2 md:mb-6 items-start justify-center text-center w-full pb-6 mt-20 mx-auto">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="cursor-pointer "
              >
                <div className="flex flex-col justify-center hover:bg-gray-100 transition-all duration-300 hover:shadow-md bg-brand-white p-4 rounded-xl shadow-md items-start gap-4 w-[400px]">
                  <div className="flex items-center gap-2 text-start">
                    <span className="text-xs font-bold bg-brand-purple text-gray-300 p-2 rounded-full">
                      {card.id}
                    </span>
                    <h2 className="text-xl font-medium font-inter mx-auto mb-2">
                      {card.title}
                    </h2>
                    <Icon
                      className="ml-2"
                      path={activeCardId === card.id ? mdiMinus : mdiPlus}
                      size={1}
                    />
                  </div>

                  {activeCardId === card.id && (
                    <>
                      <p className="max-w-xs text-start">{card.description}</p>
                      <span
                        className="flex text-xs bg-gray-200 p-2 rounded-full text-brand-purple mt-4 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          toast.success("Coming Soon");
                        }}
                      >
                        Learn More
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="text-center flex flex-col justify-center items-center">
        <div className="text-xmd text-brand-purple flex justify-center items-center font-bold mb-4">
          {" "}
          <Icon path={mdiCircleSmall} size={3} />{" "}
          <span className="-ml-4 uppercase">how it works</span>{" "}
        </div>
        <h2 className="text-6xl font-inter font-semibold mb-8 mx-2 max-w-5xl text-center">
          Get the funding your business needs to grow
        </h2>
      </div>
      <div className="max-w-xl mx-auto">
        <LoanCalc />
      </div>
      <div
        className="flex flex-col justify-center items-center px-6 py-10 gap-2"
        data-aos="fade-right"
        data-aos-offset="70"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <div className="flex md:flex-row flex-col justify-between items-center gap-6">
          <div className="flex justify-start items-center gap-2 mb-2">
            <div className="before:content-[''] before:block before:w-2 before:h-32 before:bg-brand-purple before:mx-auto before:my-4" />
            <div className="text-start">
              <h2 className="text-brand-purple text-4xl font-bold mb-2">
                Create an account
              </h2>
              <p className="text-md flex items-center justify-start max-w-[320px]">
                Create an Account with LoadStone and access funding to grow your
                business
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 mb-2">
            <div className="before:content-[''] before:block before:w-2 before:h-32 before:bg-[#EAA942] before:mx-auto before:my-4" />
            <div className="text-start">
              <h2 className="text-[#EAA942] text-4xl font-bold mb-2">
                Complete profile
              </h2>
              <p className="text-md flex items-center justify-start max-w-[320px]">
                Complete your profile by telling about your business and
                uploading documents to verify your business.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 mb-2">
            <div className="before:content-[''] before:block before:w-2 before:h-24 before:bg-brand-purple before:mx-auto before:my-4" />
            <div className="text-start">
              <h2 className="text-brand-purple text-4xl font-bold mb-2">
                Apply for loan
              </h2>
              <p className="text-md flex items-center justify-start max-w-[320px]">
                Apply for our lending financial solution no long forms or
                collateral
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center w-full mt-8">
          <Button
            content="Take Loan"
            classes="primary-btn btn-md w-full "
            onClick={() => toast.success("Coming soon")}
          />
        </div>
      </div>

      <Download />
    </LandingLayout>
  );
}
