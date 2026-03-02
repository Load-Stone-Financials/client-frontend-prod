import { mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";
import BaseDirectories from "@/baseDir/baseDirectories";

export default function HowItWorks() {
  return (
    <section className="my-2 mt-10">
      <div className="text-center flex flex-col justify-center items-center">
        <div className="text-xmd text-brand-purple flex justify-center items-center font-bold mb-4">
          {" "}
          <Icon path={mdiCircleSmall} size={3} />{" "}
          <span className="-ml-4 uppercase">how it works</span>{" "}
        </div>
        <h2 className="text-6xl font-inter font-extrabold mb-8 mx-2 max-w-5xl text-center">
          Unlock tailored financial solutions for your business
        </h2>
      </div>
      <div
        className="flex flex-col justify-start items-start px-6 md:-mt-60 gap-2"
        data-aos="fade-right"
        data-aos-offset="70"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <img
          src={`${BaseDirectories.IMAGES_DIR}/landing/hiw.png`}
          alt="How It Works"
          className="w-full h-full"
        />
      </div>
      {/* <div className="mx-auto grid md:grid-cols-2 grid-cols-1 mt-12 max-w-6xl shadow-2xl bg-brand-white rounded-l-2xl gap-8 ">
        <LoanCalc />
        <div
          className="flex flex-col justify-start items-start px-6 py-10 gap-2"
          data-aos="fade-right"
          data-aos-offset="70"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="flex justify-start items-center gap-2 mb-2">
            <div className="before:content-[''] before:block before:w-2 before:h-32 before:bg-brand-purple before:mx-auto before:my-4" />
            <div className="text-start">
              <h2 className="text-brand-purple text-4xl font-bold mb-2">
                Create an account
              </h2>
              <p className="text-md flex items-center justify-start max-w-[320px]">
                Create an Account with LoadStone and access funding to grow
                your business
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
          <div className=" flex items-start justify-start w-full mt-8">
            <Button
              content="Take Loan"
              classes="primary-btn btn-md w-full "
              onClick={() => toast.success("Coming soon")}
            />
          </div>
        </div>
      </div> */}
    </section>
  );
}
