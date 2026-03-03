import Button from "@/components/ui/Button";
import LandingLayout from "../../components/_shared/LandingLayout";
import BaseDirectories from "@/baseDir/baseDirectories";

export default function Finance() {
  return (
    <LandingLayout>
      <title>Finance - Loadstone Financial</title>
      <meta
        name="description"
        content="Explore financial solutions with Loadstone Financial"
      />
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
            className="px-2 flex pt-10 text-center justify-between gap-2 md:mx-20"
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
                finance
              </h3>
              <h1 className="text-5xl font-bold mb-4 md:max-w-lg">
                Unlock instant loans for your business
              </h1>
              <p className="text-xl md:max-w-md">
                Skip the delays, collateral and get up to ₦10M in funding in
                just six hours.
              </p>
              <div className="mt-8">
                <Button content="Get Loan" classes="secondary-btn btn-sm " />
              </div>
            </div>
            <div className="flex items-center justify-center text-white">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/prd1.png`}
                alt="Hero"
                className="max-w-full md:mt-16"
              />
            </div>
          </div>{" "}
        </div>
        <section
          className="grid  grid-rows-1 px-2  items-center gap-2  md:mx-16"
          data-aos="fade-up"
          data-aos-offset="70"
          data-aos-delay="3"
          data-aos-mirror="true"
        >
          <div
            className="grid md:grid-cols-2 grid-cols-1 justify-center  text-start items-center gap-8"
            data-aos="fade-down"
          >
            <div className="">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Power your supply chain with our tailored LPO financing
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                Looking to grow your SME and confidently handle bigger
                contracts? Our purchase order financing empowers you to do all
                that and more.
              </p>
              <Button
                content="Get Funding Now"
                classes="primary-btn btn-sm !rounded-md"
              />
            </div>
            <div className="flex items-center justify-center text-white">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/prd2.png`}
                alt="Hero"
                className="max-w-full md:mt-16"
              />
            </div>
          </div>
          <div
            className="grid md:grid-cols-2 grid-cols-1 justify-center  text-start items-center gap-8 mt-6"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center text-white">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/prd3.png`}
                alt="Hero"
                className="max-w-full md:mt-16"
              />
            </div>{" "}
            <div className="">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Leverage working capital for business success
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                Are you finding it challenging to manage daily expenses or
                planning to grow your business? Our working capital solutions
                provide the funding you need to take your business to the next
                level.
              </p>
              <Button
                content="Get Funding Now"
                classes="primary-btn btn-sm !rounded-md"
              />
            </div>
          </div>
          <div
            className="grid md:grid-cols-2 grid-cols-1 justify-center  text-start items-center gap-8 my-6"
            data-aos="fade-down"
          >
            <div className="">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Boost your cash flow with our invoice discounting
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                Waiting on customer payments slowing you down? Get the funds you
                need to keep cash flowing and your business moving with a few
                clicks.
              </p>
              <Button content="Get Funding Now" classes="primary-btn btn-sm " />
            </div>
            <div className="flex items-center justify-center text-white">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/prd4.png`}
                alt="Hero"
                className="max-w-full md:mt-16"
              />
            </div>
          </div>
        </section>
      </section>
    </LandingLayout>
  );
}
