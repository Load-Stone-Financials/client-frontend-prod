import LandingLayout from "../../components/_shared/LandingLayout";
import BaseDirectories from "../../baseDir/baseDirectories";

export default function AboutUs() {
  return (
    <LandingLayout>
      <title>About Us - Loadstone Financial</title>
      <meta
        name="description"
        content="Learn more about Loadstone Financial, our mission, and how we support SMEs across Africa."
      />
      <section className="font-montserrat w-full text-xl flex justify-center items-center">
        <div className="w-full bg-white">
          {/* ================= HERO SECTION ================= */}
          <section
            className="relative w-full h-[600px] sm:h-[700px] md:h-[784px] bg-aboutus text-white font-inter text-center overflow-hidden px-4"
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            {/* Left Africa image */}
            <img
              src={`${BaseDirectories.ABOUT_US_DIR}/africa.png`}
              alt="Left Africa"
              className="absolute bottom-6 left-4 w-30 opacity-40 md:200 sm:left-6 lg:w-auto md:bottom-1/6 md:left-6 md:brightness-10 md:opacity-50 z-10"
            />

            {/* <img
              src={`${BaseDirectories.ABOUT_US_DIR}/africa-big.png`}
              alt="Big Africa"
              className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-30 md:w-[1050px]
            md:top-20 md:left-1/2  md:brightness-75 md:opacity-50 z-20"
            /> */}
            {/*
            <img
              src={`${BaseDirectories.ABOUT_US_DIR}/africa.png`}
              alt="Right Africa"
              className="absolute top-1/7 right-4
            w-30 opacity-40
            lg:w-auto md:top-1/5 md:right-1/12 md:brightness-20 md:opacity-50 z-10"
            /> */}

            <div className="absolute  inset-0 flex justify-center items-end z-20">
              <h2
                className="
                 font-inter font-black text-2xl  md:text-[60px] mb-8 tracking-[1px]
                 w-full text-center [word-spacing:0.1em] "
              >
                Unlocking capital for SMEs across the{" "}
                <br className="hidden md:block" /> African Continent
              </h2>
            </div>
          </section>

          <section
            className="max-w-7xl  mx-auto  py-16 flex flex-col md:flex-row items-center gap-14 md:gap-20 "
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            {/* Text */}
            <div className="md:w-1/2 lg:pr-10  w-full md:text-start">
              <h3 className="text-[#6993C2] md:text-2xl font-semibold tracking-wide">
                WHO WE ARE
              </h3>

              <h2 className="text-2xl lg:text-4xl  font-bold text-[#14142B] mt-2">
                Supply Chain Finance Ecosystem
              </h2>

              <p className="mt-4 font-medium text-[18px] md:text-[24px] text-[#4E4B66] fw-500 leading-relaxed">
                We are a financial services company that supports micro, small,
                and informal retailers with access to business financing. We
                also connect retailers to trusted distributors and
                manufacturers. We operate from Lagos, Nigeria.{" "}
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 lg:pl-5 w-full">
              <img
                src={`${BaseDirectories.ABOUT_US_DIR}/ab1.png`}
                alt="Two ladies"
                className="rounded-xl w-full"
              />
            </div>
          </section>

          <div
            className="bg-[#F5EFF7]  px-5"
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <section className="max-w-7xl mx-auto  py-16 flex flex-col md:flex-row items-center gap-14 md:gap-20">
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={`${BaseDirectories.ABOUT_US_DIR}/ab2.png`}
                  alt="Three men"
                  className="rounded-xl w-full"
                />
              </div>
              <div className="md:w-1/2 lg:px-7 w-full  md:text-start">
                <h3 className="text-[#6993C2] text-2xl font-semibold tracking-wide">
                  OUR MISSION
                </h3>

                <h2 className="text-2xl  lg:text-4xl  font-bold text-[#14142B] lg:whitespace-nowrap mt-2 ">
                  SMEs <span className="text-[#054B99]">•</span> Finance{" "}
                  <span className="text-[#054B99]">•</span> Growth
                </h2>

                <p className="mt-4 font-medium text-[18px] md:text-[24px] text-[#4E4B66] fw-500   leading-relaxed">
                  We believe that every business has a higher potential to grow
                  bigger when provided financial support. And we are on a
                  mission to help SMEs accross emerging markets access financing
                  for business growth.{" "}
                </p>
              </div>
            </section>
          </div>

          <section
            className="max-w-7xl  mx-auto  py-16 flex flex-col md:flex-row items-center gap-14 md:gap-20 "
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            {/* Text */}
            <div className="md:w-1/2 lg:pr-10  w-full md:text-start">
              <h3 className="text-[#6993C2] md:text-2xl font-semibold tracking-wide">
                OUR VISION
              </h3>

              <h2 className="text-2xl lg:text-4xl  font-bold text-[#14142B] mt-2">
                Fueling retail growth
              </h2>

              <p className="mt-4 font-medium text-[18px] md:text-[24px] text-[#4E4B66] fw-500 leading-relaxed">
                Our vision is to build an inclusive ecosystem where every micro
                and informal retailer has access to the capital and supply
                networks needed to grow sustainably.{" "}
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 lg:pl-5 w-full">
              <img
                src={`${BaseDirectories.ABOUT_US_DIR}/ab3.png`}
                alt="Two ladies"
                className="rounded-xl w-full"
              />
            </div>
          </section>

          {/* <section
            className="bg-[#F8F9FB] text-[20px] w-full py-16 px-6"
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl  md:text-4xl font-bold text-[#14142B] mb-8 whitespace-nowrap">
                Our core values
              </h2>

              <div className="flex flex-wrap justify-center gap-16 md:gap-20 pb-12">
                <div className="w-full max-w-[326px] md:w-1/4 text-[#14142B] font-semibold flex flex-col items-center">
                  <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                    <img
                      src={`${BaseDirectories.ICONS_DIR}/profession.png`}
                      alt="Professionalism"
                    />
                  </div>
                  <h4 className="text-3xl font-semibold mb-2">
                    Professionalism
                  </h4>
                  <p className="text-[18px] md:text-[20px]">
                    our goal is to pay attention to you and give you utmost
                    satisfaction.
                  </p>
                </div>

                <div className="w-full max-w-[326px] md:w-1/4 text-[#14142B] font-semibold flex flex-col items-center">
                  <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                    <img
                      src={`${BaseDirectories.ICONS_DIR}/bulb.png`}
                      alt="Innovation"
                    />
                  </div>
                  <h4 className="text-3xl mb-2">Innovation</h4>
                  <p className="text-[18px] md:text-[20px]">
                    We embrace new ideas, and strategic methods to improve your
                    experience
                  </p>
                </div>

                <div className="w-full max-w-[326px] md:w-1/4 text-[#14142B] font-semibold flex flex-col items-center">
                  <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                    <img
                      src={`${BaseDirectories.ICONS_DIR}/headset.png`}
                      alt="Service"
                    />
                  </div>
                  <h4 className="text-3xl mb-2">Service</h4>
                  <p className="text-[18px] md:text-[20px]">
                    We focus on going beyond your imaginations to meet your
                    business needs.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-12 mt-8">
                <div className="w-full max-w-[347px] sm:w-1/2 md:w-1/3 text-[#14142B] font-semibold flex flex-col items-center">
                  <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                    <img
                      src={`${BaseDirectories.ICONS_DIR}/diamond.png`}
                      alt="Excellence"
                    />
                  </div>
                  <h4 className="text-3xl mb-2">Excellence</h4>
                  <p className="text-[18px] md:text-[20px]">
                    We set and achieve ambitious goals. we are passionate about
                    people, process and our product.
                  </p>
                </div>

                <div className="w-full max-w-[326px] sm:w-1/2 md:w-1/3 text-[#14142B] font-semibold flex flex-col items-center">
                  <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                    <img
                      src={`${BaseDirectories.ICONS_DIR}/speed.png`}
                      alt="Speed"
                    />
                  </div>
                  <h4 className="text-3xl mb-2">Speed</h4>
                  <p className="text-[18px] md:text-[20px]">
                    Time is a money, so we stay ahead to help you take your
                    business to the next level.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </section>
    </LandingLayout>
  );
}
