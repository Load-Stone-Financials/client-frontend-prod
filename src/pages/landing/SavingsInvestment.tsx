import Button from "@/components/ui/Button";
import LandingLayout from "../../components/_shared/LandingLayout";
import BaseDirectories from "@/baseDir/baseDirectories";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";

export default function SavingsInvestment() {
  return (
    <LandingLayout>
      <title>Savings & Investment - Loadstone Financial</title>
      <meta
        name="description"
        content="Explore savings and investment opportunities with Loadstone Financial"
      />
      <section className="">
        <div
          className="flex"
          style={{
            backgroundImage: "url('/images/landing/herobg3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full text-white text-start flex flex-col md:pt-28 gap-6 md:mx-16 pb-4">
            <h3 className="uppercase text-start text-brand-purple-light">
              {" "}
              SAVING & INVESTMENT
            </h3>
            <h1 className="text-5xl font-bold mb-4 max-w-4xl">
              Savings That Power Your Business Dreams
            </h1>
            <p className="text-xl md:max-w-md">
              Our savings plans are designed to help you set aside funds
              strategically so you can achieve your business goals.
            </p>
            <div className="mt-8">
              <Button
                content="Start Saving"
                classes="secondary-btn btn-sm !rounded-md"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={`${BaseDirectories.IMAGES_DIR}/landing/savings/main.png`}
              alt="Hero"
              className="w-full rounded-2xl"
            />
          </div>
          <div />
        </div>
        <div
          className="mx-10 md:space-y-14 space-y-4 py-4"
          data-aos="fade-up"
          data-aos-offset="70"
          data-aos-delay="3"
          data-aos-mirror="true"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-4">
            <div className="bg-white max-w-md rounded-3xl">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/savings/img1.jpg`}
                alt="Hero"
                className="w-full  rounded-2xl"
              />
              <h2 className="max-w-sm mt-6 mb-4 md:mx-10 mx-2 text-start font-bold text-2xl">
                Diversify your investment portfolio
              </h2>
            </div>
            <div className="text-start">
              <p className="text-start text-xl mb-6 md:max-w-md">
                Diversifying your investments helps spread risk across multiple
                opportunities, allowing you to grow your wealth more securely
                and maximize potential returns.
              </p>

              <Button
                content="Diversify Now"
                classes="primary-btn btn-sm mt-4 rounded-sm!"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-4">
            <div className="bg-white max-w-md rounded-3xl">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/savings/Img3.png`}
                alt="Hero"
                className="w-full rounded-2xl"
              />
              <h2 className="max-w-sm mt-6 mb-4 md:mx-10 mx-2 text-start font-bold text-2xl">
                Flexible saving and withdrawal options
              </h2>
            </div>
            <div className="text-start">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Smart Savings, Stronger Business
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                By saving strategically, you can build the financial foundation
                your business needs to grow, invest, and achieve long-term
                success.
              </p>

              <Button
                content="Save Now"
                classes="primary-btn btn-sm mt-4 rounded-sm!"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center pb-10">
            <div className="bg-white max-w-md rounded-3xl">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/savings/img2.png`}
                alt="Hero"
                className="w-full rounded-2xl"
              />
              <h2 className="max-w-sm mt-6 mb-4 md:mx-10 mx-2 text-start font-bold text-2xl">
                Profitable returns From Investment
              </h2>
            </div>
            <div className="text-start">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Fuel the 5Tr Supply Chain, Reap attractive Returns
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                By supporting a $5 trillion supply value chain, you can earn
                attractive returns while helping businesses access capital and
                grow their operations.
              </p>
              {/* <div className="flex gap-2 items-center">
                {" "}
                <Input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  value="newsletter"
                  checked
                  className="size-8 accent-[#EBF9F6] rounded text-yellow-400 focus:ring-red-400"
                />{" "}
                <Label htmlFor="subscribe">
                  Invest in growth opportunities.
                </Label>{" "}
              </div> */}

              <Button
                content="Invest Now"
                classes="primary-btn btn-sm mt-4 rounded-sm!"
              />
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
