import BaseDirectories from '../../baseDir/baseDirectories';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Button from '../ui/Button';

export default function Footer() {
  return (
    <footer className="lg:h-[797px text-white bottom-0 left-0">
      {/* Newsletter Section */}
      <div className="bg-brand-purple-light  w-full lg:h-[248px] py-10 px-4 text-white text-center">
        <div className="lg:h-[200px} max-w-[1250px] mx-auto pt-37px">
          <h2
            className="text-2xl  font-semibold fw-600 text-[40px] mb-2"
          >
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
              onClick={() => { }}
            />


          </div>

        </div>
      </div>
      {/* Main Footer Content */}
      <div className="bg-[#612FCC] w-full py-10 px-4  fw-500 text-[20px]">
        <div className="max-w lg:max-w-[1250px] mx-auto">

          <div className="pt-20 pb-10 mx-auto flex flex-col md:flex-row justify-between gap-8">
            {/* Left Section: Logo */}
            <div className="w-1/5 min-w-[200px]">
              <div className="mb-4 mx-6">
                <img
                  src={`${BaseDirectories.ICONS_DIR}/brand.png`}
                  alt="Loadstone Logo"
                  className=" size-40"
                />
              </div>
              <div className="lg:w-[225px] lg:h-[110px] mx-4  fw-500 text-start lg:pt-[55px]">
                <h3 className="fw-700  font-semibold ">ADDRESS</h3>
                <h4 className=" fw-500 pt-2 ">Maryland, Ikeja, Lagos</h4>

                <h4 className="fw-400 text-white pt-2">info@loadstone.com</h4>
              </div>
            </div>

            {/* Right Section: Links */}
            <div className=" w-4/5 text-start sm:flex flex-wrap justify-between gap-8 md:min-w-[400px]">
              {/* Product */}

              <div >
                <h3 className=" font-semibold mt-10 md:mt-0 fw-700">PRODUCT</h3>
                <h4 className=" pt-5">Loans</h4>
                <h4 className=" pt-5">
                  <Link to="/Saving-Investment" className="hover:text-[#9668FF] transition">
                    Savings & Investment
                  </Link></h4>
                <h4 className=" pt-5">FMCG</h4>
              </div>
              {/* Company */}
              <div >
                <h3 className="fw-700 mt-10 md:mt-0 font-semibold ">COMPANY</h3>
                <h4 className="pt-5">
                  <Link to="/about-us" className="hover:text-[#9668FF] transition">
                    About Us
                  </Link>
                </h4>

                <h4 className=" pt-5">Careers</h4>
                <h4 className=" pt-5">
                  <Link to="/blog" className="hover:text-[#9668FF] transition">
                    Blog
                  </Link></h4>
              </div>

              {/* Support */}
              <div >
                <h3 className=" font-semibold mt-10 md:mt-0 fw-700 ">SUPPORT</h3>
                <h4 className="pt-5"> <Link to="/blog" className="hover:text-[#9668FF] transition">
                  Blog
                </Link></h4>
                <h4 className=" pt-5 "> <a href='#faq' className="hover:text-[#9668FF] transition">
                  FAQ
                </a>
                </h4>
                <h4 className=" pt-5">
                  <Link to="/contact-us" className="hover:text-[#9668FF] transition">
                    Contact Us
                  </Link>
                </h4>
              </div>

              {/* Legal */}
              <div >
                <h3 className="fw-700 mt-10 md:mt-0 font-semibold">LEGAL</h3>
                <h4 className="pt-5"> <Link to="/T&C" className="hover:text-[#9668FF] transition">
                  Terms and Conditions
                </Link></h4>
                <h4 className="pt-5">Privacy Policy</h4>
                <h4 className=" pt-5">Cookies</h4>

              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="font-montserrat fw-500 text-[15px] md:text-[18px]  mt-10 border-t border-[#EFF0F6] pt-6 text-start">
            <p>All personal data & information are confidential and protected in line with NDPB data privacy.</p>
            <div className="pt-6 flex justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>© {new Date().getFullYear()} All rights reserved. Loadstone</p>
              </div>
              <div className="flex gap-4 text-2xl text-white">
                <FaLinkedin />
                <FaInstagram />
                <FaTwitter />
                <FaFacebook />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer >
  );
}