import BaseDirectories from "../../baseDir/baseDirectories";
import LandingLayout from "../../components/_shared/LandingLayout";
import { Link } from "react-router-dom";


export default function Blog() {
  return (
    <LandingLayout>
      <section className="font-montserrat w-full text-xl">


        {/* ================= HERO SECTION ================= */}
        <section className="w-full h-[280px]  bg-blog text-white font-inter text-center overflow-hidden px-4">

          <div className="flex flex-col items-center justify-center text-center h-full">
            <h2 className="text-xl md:text-[70px] font-bold md:w-full">
              Blog
            </h2>
          </div>
        </section>


        <section className="max-w-[1250px]  mx-auto">
          <div className="md:px-3">
            <div className="flex items-center gap-3 px-3 text-[10px] md:text-[20px] text-gray-600 pt-3 pb-3">
              <Link to="/" className="font-semibold text-black hover:underline">
                Home
              </Link>

              {/* Dot */}
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

              <span>Finance</span>

              {/* Dot */}
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

              <span>September 14, 2022</span>

              {/* Dot */}
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

              <span>2 Mins Read</span>
            </div>
          </div>

          <div className="flex px-3 items-center justify-center pt-5 pb-5  mx-auto ">
            <h2 className="md:text-[48px]   m-5 md:m-0 text-start font-bold text-black md:pr-20">
              97k Crypto Investors Burnt As High US Inflation Data Wipes Out $89 Billion Market Value
            </h2>
          </div>

          <div className="flex  mx-auto justify-center items-center  rounded-md mb-4">
            <img src={`${BaseDirectories.BLOG_MAIN_DIR}/IMAGE.png`} alt="Speed" />
          </div>



          <div className="max-w-7xl px-3 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 px-5">

            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-1 space-y-10 order-2 lg:order-1">

              {/* AUTHOR CARD */}
              <div className="flex pt-4 items-start gap-4">
                <div>
                  <img
                    src={`${BaseDirectories.BLOG_MAIN_DIR}/Author.png`}
                    alt="Author"
                    className=" rounded-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-start space-y-1 mt-1">
                  <h3 className="text-lg font-semibold text-gray-900">Kehinde Stephen</h3>
                  <p className="  text-black">Creative Writer</p>
                  <p className="text-black">Loanstone</p>
                </div>
              </div>

              {/* TABLE OF CONTENTS */}

              <div className="flex flex-col items-start">
                <h4 className="text-lg font-semibold text-[#612FCC] mb-3">On This Page</h4>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700 hover:text-[#612FCC] cursor-pointer">
                    <span className="text-sm">›</span>
                    <span>How to mint coins</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 hover:text-[#612FCC] cursor-pointer">
                    <span className="text-sm">›</span>
                    <span>How to mint coins</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 hover:text-[#612FCC] cursor-pointer">
                    <span className="text-sm">›</span>
                    <span>How to mint coins</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* RIGHT CONTENT AREA */}
            <div className="lg:col-span-2 order-1 lg:order-2">

              <div className="max-w-none text-start text-gray-800 leading-7 space-y-6">

                <p>
                  Following the August U.S inflation report which revealed that prices grew
                  faster than expected, Bitcoin and crypto assets greatly fell in value on
                  Tuesday, on high indication that the Federal Reserve will likely raise
                  interest rates by another 0.75% the following week.
                </p>

                <p>
                  The crypto market is back to below a trillion-dollar market value as about
                  $89 billion worth of crypto got evaporated.
                </p>

                <p>
                  About 97k traders have liquidated positions totalling more than $357
                  million in the crypto derivatives market today, with long BTC positions
                  accounting for about 75% of those transactions.
                </p>

                <p>
                  The leading cryptocurrency recently traded just around $20,300, down more
                  than 7% from the previous day, and dropped significantly for the day.
                </p>

                <p>
                  Bitcoin fell more than 5% in the hour following the CPI release and
                  continued to fall, from where it had been hovering around $22,500 shortly
                  before the report was released.
                </p>

                <p>
                  Ether, the second-largest cryptocurrency by market value, followed a
                  similar pattern as inflation worries overrode Merge exuberance and was
                  trading under $1,600, down roughly 6% from the previous day.
                </p>

                <p>
                  Thursday is the scheduled day for The Merge, which will convert Ethereum’s
                  blockchain from a slower, more energy-intensive proof-of-work protocol to a
                  proof-of-stake one.
                </p>

                <p>
                  However, recent ETH activity, even before the dismal CPI, has suggested
                  that the biggest price increases have already taken place.
                </p>

                <p>
                  A number of market pundits anticipate that since risk asset sentiment may
                  be so negative right now that there may be little opportunity for markets
                  to rise over this year as the prospect of high inflation provides the Fed
                  more room to raise rates faster than most investors are assuming.
                </p>

                <p className="font-semibold ">Source: Nairametrics</p>

                <div className="md:h-[190px]">
                  <div className="flex items-center gap-6 text-gray-600 text-sm">

                    {/* LIKE */}
                    <button className="flex items-center gap-2 hover:text-black active:scale-90 transition-transform duration-150">
                      <img
                        src={`${BaseDirectories.ICONS_DIR}/LIKE.png`}
                        alt="Loadstone Logo"
                        className="h-auto w-auto"
                      />
                    </button>

                    {/* COMMENT */}
                    <button className="flex items-center gap-2 hover:text-black active:scale-90 transition-transform duration-150">
                      <img
                        src={`${BaseDirectories.ICONS_DIR}/Comment.png`}
                        alt="Loadstone Logo"
                        className="h-auto w-auto"
                      />
                    </button>


                    {/* SHARE */}
                    <button className="flex items-center gap-2 hover:text-black">
                      <img
                        src={`${BaseDirectories.ICONS_DIR}/bi_share.png`}
                        alt="Loadstone Logo"
                        className="h-auto w-auto"
                      />
                    </button>

                  </div>
                </div>

              </div>


            </div>

          </div>



          <div className=" text-start p-6 rounded-lg">
            <h2 className="md:text-5xl font-bold text-center mb-8">Related Posts</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* CARD 1 */}
              <div className=" md:h-[594px] space-y-3 ">
                <img src={`${BaseDirectories.BLOG_MAIN_DIR}/wallstreet.png`} alt="Speed" />
                <div className="pl-5">
                  <div className="flex  items-center gap-3 text-sm text-gray-600">
                    <span className="font-semibold">Finance</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>September 14, 2022</span>
                  </div>

                  <h3 className=" md:text-[28px] font-medium">
                    FINTECHS; Critical Success Factors (3/3)
                  </h3>

                  <p className=" md:text-[18px] pt-3">
                    Government policies in no doubt is one...
                  </p>

                  <a href="#" className="text-blue-600 pt-5 font-semibold text-[18px] inline-flex items-center gap-1">
                    Read Blog ↗
                  </a>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="md:h-[594px] space-y-3 ">
                <img src={`${BaseDirectories.BLOG_MAIN_DIR}/Crypto.png`} alt="Speed" />
                <div className="pl-5">
                  <div className="flex  items-center gap-3 text-sm text-gray-600">
                    <span className="font-semibold">Finance</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>September 14, 2022</span>
                  </div>

                  <h3 className="md:text-[28px] font-medium">
                    FINTECHS; Critical Success Factors (3/3)
                  </h3>

                  <p className=" md:text-[18px] pt-3">
                    Government policies in no doubt is one...
                  </p>

                  <a href="#" className="text-blue-600 pt-5 font-semibold text-[18px] inline-flex items-center gap-1">
                    Read Blog ↗
                  </a>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="md:h-[594px] space-y-3 ">
                <img src={`${BaseDirectories.BLOG_MAIN_DIR}/wallstreet2.png`} alt="Speed" />
                <div className="pl-5">
                  <div className="flex  items-center gap-3 text-sm text-gray-600">
                    <span className="font-semibold">Finance</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>September 14, 2022</span>
                  </div>

                  <h3 className="md:text-[28px] font-medium">
                    FINTECHS; Critical Success Factors (3/3)
                  </h3>

                  <p className=" md:text-[18px] pt-3">
                    Government policies in no doubt is one...
                  </p>

                  <a href="#" className="text-blue-600 pt-5 font-semibold text-[18px] inline-flex items-center gap-1">
                    Read Blog ↗
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


      </section>
    </LandingLayout>
  );
}
