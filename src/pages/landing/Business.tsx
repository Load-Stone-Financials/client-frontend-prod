import LoanCalc from "@/components/landingSections/LoanCalc";
import LandingLayout from "../../components/_shared/LandingLayout";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

import Download from "@/components/landingSections/Download";

export default function Business() {
  return (
    <LandingLayout>
      <section className="h-screen text-3xl flex justify-center items-center">
        This is Business page
      </section>
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
       <div className="flex justify-between items-center gap-6">
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
                Complete your profile by telling about your business and uploading
                documents to verify your business.
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
