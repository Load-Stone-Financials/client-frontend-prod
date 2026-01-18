import LandingLayout from "../../components/_shared/LandingLayout";
import BlogPage from "../../data/BlogPage";
import { FaSearch } from "react-icons/fa"
export default function Blog() {
  return (
    <LandingLayout>
      <section className="font-montserrat w-full text-xl">


        {/* ================= HERO SECTION ================= */}
        <section className="w-full h-[600px] sm:h-[700px] md:h-[776px] bg-contactus text-white font-inter text-center overflow-hidden px-4">

          <div className="flex flex-col items-center justify-center text-center h-full"
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true">
            <h2 className="text-xl md:text-[70px] font-bold md:w-full">
              Search your favourite blog
            </h2>

            <div className="mt-6 w-full max-w-xl">

              <div className="relative w-full">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="Default"
                  className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-3 placeholder:text-black focus:outline-none"
                />
              </div>

            </div>
          </div>

        </section>
        <div className="" data-aos="fade-right"
          data-aos-offset="70"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
          <BlogPage />
        </div>
      </section>
    </LandingLayout>
  );
}
