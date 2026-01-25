import { mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";
import BaseDirectories from "../../baseDir/baseDirectories";

export default function WhatWeDo() {
  return (
    <section className="md:mt-10 mx-auto">
      <div className="text-center">
        <div className="text-md text-brand-purple flex justify-center items-center font-bold mb-4">
          {" "}
          <Icon path={mdiCircleSmall} size={3} className="" />{" "}
          <span className="uppercase -ml-4">What We Do</span>
        </div>
        <h2 className="text-6xl font-bold mb-8 md:mx-2 mx-4">
          Transforming Business for MSMEs
        </h2>
      </div>
      <div className="grid md:grid-cols-2 grid-rows-1 px-2 md:mb-36 items-start mx-4 text-center justify-between h-full gap-8  md:mx-20 my-12">
        <div className="flex flex-col justify-self-start font-inter items-start gap-6 md:mt-14">
          <p className="max-w-lg text-start font-medium leading-10 text-2xl ">
            We make access to B2B financing simple and easy. No collaterals or
            long forms.
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="before:content-[''] before:block before:w-2 before:h-32 before:bg-brand-purple before:mx-auto before:my-4" />
            <div className="text-start">
              {" "}
              <h4 className="text-4xl font-medium mb-4">
                Fast-moving consumer goods (FMCG)
              </h4>
              <p className="">
                Get access to financial solutions that can help you keep your
                shelves stocked and respond to market demand quickly.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/wwd.png`}
            alt="Hero"
            className="md:w-3/5 mx-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}
