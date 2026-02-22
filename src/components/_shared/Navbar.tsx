import { navLink, productLinks, supportLinks } from "../../data/landing";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseDirectories from "../../baseDir/baseDirectories";
import Dropdown from "../ui/Dropdown";
import Button from "../ui/Button";
import Modal from "../ui/modal/Modal";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";
import type { SignupStep } from "@/types/onboarding";

const ONBOARDING_STEP_PARAM = "step";

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [initialSignupStep, setInitialSignupStep] = useState<SignupStep | undefined>(undefined);

  const handleSwitchToSignup = () => {
    setInitialSignupStep(undefined);
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  useEffect(() => {
    const step = searchParams.get(ONBOARDING_STEP_PARAM);
    if (step === "phoneVerification") {
      setIsSignupModalOpen(true);
      setInitialSignupStep("phoneVerification");
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleCloseSignup = () => {
    setIsSignupModalOpen(false);
    setInitialSignupStep(undefined);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getDropdownLinks = (text: string) => {
    switch (text.toLowerCase()) {
      case "products":
        return productLinks;
      case "support":
        return supportLinks;
      default:
        return null;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section
      className={`px-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/20 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="h-16 bg-linear-to-br from-[#A6A4A7] via-[#A9A7A9] to-white rounded-full flex items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <Link to={'/'} className="text-white font-bold z-50">
          <img
            src={`${BaseDirectories.LOGOS_DIR}/brand.png`}
            alt="LoadStone"
            className="h-10"
          />
        </Link>

        {/* Desktop Navn */}
        <div className="hidden lg:flex gap-2 relative">
          {navLink.map((link) => {
            const dropdownLinks = getDropdownLinks(link.text);
            const hasDropdown = dropdownLinks && dropdownLinks.length > 0;

            return (
              <div
                key={link.text}
                className="relative group"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.text)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold bg-white text-brand-purple block text-start px-4 py-2 rounded-full"
                      : "block text-start px-4 py-2 text-grey-800 font-medium hover:text-brand-purple"
                  }
                >
                  {link.text}
                </NavLink>
                {hasDropdown && activeDropdown === link.text && (
                  <div
                    className="absolute top-full left-0 pt-2 w-full"
                    onMouseEnter={() => setActiveDropdown(link.text)}
                  >
                    <Dropdown heading={link.text} links={dropdownLinks} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-6">
          <button 
            className="text-grey-800 font-medium cursor-pointer"
            onClick={() => setIsLoginModalOpen(true)}
          >
            Log in
          </button>
          <Button
            classes="primary-btn btn-sm"
            content="Signup"
            onClick={() => setIsSignupModalOpen(true)}
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-red-800 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-red-800 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-red-800 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-yellow-400 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navLink.map((link) => {
            const dropdownLinks = getDropdownLinks(link.text);
            const hasDropdown = dropdownLinks && dropdownLinks.length > 0;

            return (
              <div key={link.text}>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-brand-purple block py-2"
                        : "block py-2 text-grey-800 font-medium"
                    }
                    onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                  {hasDropdown && (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.text ? null : link.text)
                      }
                      className="p-2"
                    >
                      <span
                        className={`block w-2 h-2 border-r-2 border-b-2 border-grey-800 transition-transform duration-200 ${
                          activeDropdown === link.text ? "-rotate-135" : "rotate-45"
                        }`}
                      ></span>
                    </button>
                  )}
                </div>
                {hasDropdown && activeDropdown === link.text && (
                  <div className="pl-4 space-y-2 pb-2">
                    {dropdownLinks?.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.url}
                        className="block py-2 text-sm text-grey-600 hover:text-brand-purple"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-start gap-2">
                          <span>{item.text}</span>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile Auth Buttons */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <button 
              className="w-full text-left py-2 text-grey-800 font-medium"
              onClick={() => {
                setIsLoginModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Log in
            </button>
            <Button
              classes="primary-btn btn-sm w-full"
              content="Signup"
              onClick={() => {
                setIsSignupModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            />
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title=""
        maxWidth="lg"
      >
        <Login
          onSwitchToSignup={handleSwitchToSignup}
          onClose={() => setIsLoginModalOpen(false)}
        />
      </Modal>

      {/* Signup Modal */}
      <Modal
        isOpen={isSignupModalOpen}
        onClose={handleCloseSignup}
        title=""
        maxWidth="lg"
      >
        <Signup
          onSwitchToLogin={handleSwitchToLogin}
          onClose={handleCloseSignup}
          initialStep={initialSignupStep}
        />
      </Modal>
    </section>
  );
}
