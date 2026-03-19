import BaseDirectories from "@/baseDir/baseDirectories";
import Button from "../ui/Button";

export default function Download() {
  return (
    <div>
      <div className="bg-brand-purple-light flex md:flex-row flex-col w-full text-white text-center">
        <div className="max-w-xl mx-auto flex justify-end">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/business/iphone.png`}
            alt=""
          />
        </div>
        <div className="max-w-3xl mx-auto flex flex-col justify-center items-start">
          <h2 className="text-6xl font-bold mb-2 max-w-xl text-start">
            Download Our Mobile App!
          </h2>
          <p className="text-start text-lg  max-w-[320px]">
            Create an account to access our tailored financing solutions in no
            time.
          </p>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <img className="cursor-pointer"
              src={`${BaseDirectories.IMAGES_DIR}/landing/business/ios.png`}
              alt=""
            />
            <img className="cursor-pointer"
              src={`${BaseDirectories.IMAGES_DIR}/landing/business/andriod.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="bg-brand-purple-light  w-full lg:h-[248px] py-10 px-4 text-white text-center">
        <div className="lg:h-[200px} max-w-[1250px] mx-auto pt-37px">
          <h2 className="text-2xl  font-semibold fw-600 text-[40px] mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-4 text-[24px] fw-500 ">
            Subscribe to our newsletter to receive updates, exclusive offers,
            news, and more.
          </p>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <div className="relative">
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <img
                  src={`${BaseDirectories.ICONS_DIR}/Mail.png`}
                  alt="Mail icon"
                />
              </span>

              <input
                type="email"
                placeholder="Email address"
                className="bg-white pl-4 pr-3 py-2  lg:w-[393px] rounded border border-gray-300 text-black focus:outline-none"
              />
            </div>
            <Button
              classes="primary-btn btn-sm !py-5 "
              content="Subscribe"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
