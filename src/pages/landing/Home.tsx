import LandingLayout from "../../components/_shared/LandingLayout";
import FAQ from "../../components/landingSections/FAQ";
// import GetLoan from "../../components/landingSections/GetLoan";
import Hero from "../../components/landingSections/Hero";
import HowItWorks from "../../components/landingSections/HowItWorks";
// import MarqueeComponent from "../../components/landingSections/MarqueeComponent";
import Testimonial from "../../components/landingSections/Testimonial";
import WhatWeDo from "../../components/landingSections/WhatWeDo";
import Blank from "./Blank";

export default function Home() {
  return (
    <LandingLayout>
      <title> Home - Loadstone Financial</title>
      <meta name="description" content="Welcome to Loadstone" />
      <Hero />
      {/* <MarqueeComponent /> */}
      <WhatWeDo />
      {/* <GetLoan /> */}
      <Blank height="40px" />
      <HowItWorks />
      {/* <Blank height="50px" /> */}
      <Testimonial />
      <FAQ />
    </LandingLayout>
  );
}
