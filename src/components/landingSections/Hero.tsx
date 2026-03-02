import BaseDirectories from "../../baseDir/baseDirectories";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className=""
      style={{
        backgroundImage: "url('/images/landing/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="grid md:grid-cols-2 grid-rows-1 pl-2  items-center pt-20 text-center justify-between h-full gap-2"
        data-aos="fade-right"
        data-aos-offset="70"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <div className="text-white text-start flex flex-col mt-20 gap-6 mb-6 md:ml-36 ">
          <span className="text-6xl leading-wider mb-4 md:max-w-2xl">
            Empowering <br/> MSMEs Through Financial Inclusion
          </span>
          <p className="text-xl md:max-w-md">
            Access the financing you need to stock inventory, meet large orders,
            and expand your business.
          </p>
          <div className="mt-8">
            <Button
              content="Create an Account"
              classes="secondary-btn btn-sm "
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-white">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/hero.png`}
            alt="Hero"
            className="max-w-full md:mt-26 mb-0"
          />
        </div>
      </div>
    </section>
  );
}
