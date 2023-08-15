import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="Discount number"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">25%</span> Discount for{" "}
            <span className=" text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          {/* ss:leading-[100px] changes the height between words */}
          <h1 className="flex1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            {" "}
            The Next
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Generation</span>{" "}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method starts here
        </h1>

        <p className={`${styles.paragraph}, max-w-[470px] mt-5`}>
          We’ve spent the past few years working with leading fintechs to design
          and build Deloitte’s Converge prosperity BankingSuite, enabling
          behavioral banking products and features that can be deployed rapidly.
          Experience our honed, leading-class design and engineering
          capabilities and the digital assets that result from them; engage with
          the full breadth of our creative, design, strategy, and engineering
          capabilities.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div>
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full  white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
