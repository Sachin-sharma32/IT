import React from "react";
import Smooth from "../utils/Smooth";

const Next = () => {
  return (
    <Smooth>
      <div className="cursor-none min-h-screen w-screen text-secondary">
        <div className="cursor-none  bg-secondary h-[40vh] flex items-end">
          <h1 className="cursor-none  text-3xl sm:text-5xl text-white mb-10 ml-10 uppercase">
            NAVIGATE YOUR NEXT
          </h1>
        </div>
        <div className="cursor-none flex p-10 gap-10 flex-col md:flex-row">
          <div className="cursor-none flex flex-col gap-4">
            <h2 className="cursor-none  text-4xl font-bold h-10">OVERVIEW</h2>
            <p className=" text-justify cursor-none leading-[1.9] font-[100] text-xl">
              Welcome to &quot;Navigate Your Next&quot;! At IT Xcelerate, we
              understand the challenges that come with digital transformation
              and how it can impact businesses of all sizes. Our goal is to help
              you navigate the complexities of the digital landscape and help
              you reach your goals.
            </p>
          </div>
          <div className="cursor-none flex flex-col gap-4">
            <div className="cursor-none h-10"></div>
            <p className=" text-justify cursor-none leading-[1.9] text-lg font-semibold">
              We believe in taking a holistic approach to digital
              transformation. This means we take the time to understand your
              business objectives and work with you to develop a customized
              strategy that addresses your specific needs. Our team of experts
              has extensive experience in a variety of industries, and we use
              this knowledge to create solutions that are tailored to your
              unique situation.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </Smooth>
  );
};

export default Next;

Next.getInitialProps = async (context) => {
  return {
    title: "ITXcelerate - Navigate Your Next",
    image: "/logo-3.png",
    summery:
      "Welcome to 'Navigate Your Next'! At IT Xcelerate, we understand the challenges that come with digital transformation and how it can impact businesses of all sizes. Our goal is to help you navigate the complexities of the digital landscape and help you reach your goals.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "next",
  };
};
