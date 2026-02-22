import { Route, Routes } from "react-router-dom";
import Home from "../pages/landing/Home";
import AboutUs from "../pages/landing/AboutUs";
import Business from "../pages/landing/Business";
import Support from "../pages/landing/Support";
import Products from "../pages/landing/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import Finance from "../pages/landing/Finance";
import SavingsInvestment from "../pages/landing/SavingsInvestment";
import ContactUs from "../components/landingSections/ContactUs";
import Blog from "../pages/landing/Blog";
import TermsandCondition from "../components/landingSections/TermsandCondition";
import BlogMain from "../pages/landing/BlogMain";
import Dashboard from "@/components/_shared/Dashboard";
import Overview from "@/pages/dashboard/Overview";
import Settings from "@/pages/dashboard/Settings";
import Loans from "@/pages/dashboard/Loans";
import Wallet from "@/pages/dashboard/Wallet";
import Invest from "@/pages/dashboard/Invest";
import Guarantors from "@/pages/dashboard/Guarantors";
import FAQ from "@/pages/landing/FAQ";
import GuarantorDetails from "@/components/dashboard/guarantor/GuarantorDetails";
import AddGuarantorForm from "@/components/dashboard/guarantor/AddGuarantorForm";
import NotFound from "@/pages/NotFound";
import VerifyEmailSuccessful from "@/pages/auth/VerifyEmailSuccessful";

export default function MainRoutes() {
  AOS.init();

  return (
    <>
      <Routes>
        <Route path="/verify-email" element={<VerifyEmailSuccessful />} />

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/business" element={<Business />} />
        <Route path="/support" element={<Support />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/Saving-Investment" element={<SavingsInvestment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/faq" element={<FAQ />} />
        <Route path="/T&C" element={<TermsandCondition />} />
        <Route path="/news" element={<BlogMain />} />

        {/* TO BE PROTECTED  */}
        <Route path="dashboard/" element={<Dashboard />}>
          {/* <Route
            path="overview"
            element={<div>Dashboard Page - To be implemented</div>}
          /> */}
          <Route index element={<Overview />} />

          <Route path="loans" element={<Loans />} />
          <Route path="guarantors" element={<Guarantors />} />
           <Route path="guarantors/:id" element={<GuarantorDetails />} />
           <Route path="guarantors/add" element={<AddGuarantorForm />} />
          <Route path="invest" element={<Invest />} />
          <Route path="wallet" element={<Wallet />} />

          <Route path="settings" element={<Settings />} />
           <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
