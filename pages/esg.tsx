import React from "react";
import { motion } from "framer-motion";
import Smooth from "../utils/Smooth";
import Image from "next/image";

const Esg = () => {
  return (
    <Smooth>
      <div className="cursor-none min-h-screen flex flex-col gap-20 pb-20 text-secondary">
        <div className="cursor-none  h-screen flex flex-col md:flex-row relative">
          <Image
            alt="random image"
            width={500}
            height={500}
            src="/esg-1.jpg"
            className="cursor-none  brightness-75 md:w-[33%] h-[33.5%] w-screen md:h-full"
          />
          <Image
            alt="random image"
            width={500}
            height={500}
            src="/esg-2.jpg"
            className="cursor-none  brightness-75 md:w-[33%] h-[33.5%] w-screen md:h-full"
          />
          <Image
            alt="random image"
            width={500}
            height={500}
            src="/esg-3.jpg"
            className="cursor-none  brightness-75 md:w-[34%] h-[33%] w-screen md:h-full"
          />
          <h1 className="cursor-none absolute top-1/2  left-10 text-4xl md:text-6xl w-[50%] font-satoshi font-extrabold text-white -translate-y-1/2 leading-[1.4] font-extrabold">
            Building a equitable and sustainable digital future.
          </h1>
        </div>
        <div className="cursor-none h-fit py-10 flex justify-center items-center px-10">
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ y: [10, 0], scale: 1 }}
            transition={{ duration: 1 }}
            className="cursor-none  border-2 border-primary  rounded-tl-none rounded-br-none md:rounded-bl-[100px] md:rounded-tr-[100px] rounded-bl-[50px] rounded-tr-[50px] p-6 md:p-10 flex flex-col gap-4"
          >
            <h2 className="cursor-none  text-5xl font-satoshi font-extrabold fontex">
              OUR PURPOSE
            </h2>
            <p className="cursor-none text-lg ">
              We&apos;re committed to making a positive impact on the
              environment, society, and governance through our business
              practices and operations.
            </p>
          </motion.div>
        </div>
        <div className="cursor-none flex flex-col gap-10">
          <h2 className="cursor-none   text-3xl font-satoshi font-extrabold font-extrabold text-center">
            ENVIRONMENTAL COMMITMENT
          </h2>
          <div className="cursor-none flex gap-10 justify-center flex-col md:flex-row items-center">
            <div className="cursor-none  w-[300px] px-4 leading-[1.9] hover:scale-110 py-4 flex flex-col gap-4 h-[550px]  shadow-2xl rounded-lg  hover:-translate-y-4 transition-all duration-500">
              <Image
                alt="random image"
                width={100}
                height={100}
                src="/svg-1.svg"
                className="cursor-none w-[200px] h-[200px] self-center"
              />
              At IT Xcelerate, we recognize that climate change is one of the
              most pressing issues facing the world today. As a technology
              company, we&apos;re committed to using our expertise and resources
              to develop innovative solutions that address climate change and
              promote sustainable practices.
            </div>
            <div className="cursor-none  w-[300px] px-4 leading-[1.9] hover:scale-110 py-4 flex flex-col gap-4 h-[550px]  shadow-2xl rounded-lg  hover:-translate-y-4 transition-all duration-500">
              <Image
                alt="random image"
                width={100}
                height={100}
                src="/svg-2.svg"
                className="cursor-none w-[200px] h-[200px]  self-center"
              />
              To minimize our environmental impact, we use energy-efficient
              technologies and implement waste reduction and recycling programs.
              We also ensure that our supply chain partners and vendors share
              our commitment to environmental sustainability.
            </div>
          </div>
        </div>
        <div className="cursor-none flex flex-col gap-10">
          <h2 className="cursor-none   text-3xl font-satoshi font-extrabold font-extrabold text-center">
            SOCIAL RESPONSIBILITIES
          </h2>
          <div className="cursor-none flex gap-10 justify-center flex-col md:flex-row items-center">
            <div className="cursor-none  w-[300px] px-4 leading-[1.9] hover:scale-110 py-4 flex flex-col gap-4 h-[550px]  shadow-2xl rounded-lg  hover:-translate-y-4 transition-all duration-500">
              <Image
                alt="random image"
                width={100}
                height={100}
                src="/svg-3.svg"
                className="cursor-none w-[200px] h-[200px] self-center"
              />
              We believe that every business has a responsibility to contribute
              to the well-being of society. At IT Xcelerate, we&apos;re
              committed to promoting diversity, equity, and inclusion in our
              workplace and our communities.
            </div>
            <div className="cursor-none  w-[300px] px-4 leading-[1.9] hover:scale-110 py-4 flex flex-col gap-4 h-[550px]  shadow-2xl rounded-lg  hover:-translate-y-4 transition-all duration-500">
              <Image
                alt="random image"
                width={100}
                height={100}
                src="/svg-4.svg"
                className="cursor-none w-[200px] h-[200px] self-center"
              />
              We support various community organizations and initiatives,
              including those that promote education, health and wellness, and
              environmental sustainability. We also encourage our employees to
              volunteer their time and skills to support community initiatives
              that align with our values and mission.
            </div>
            <div className="cursor-none  w-[300px] px-4 leading-[1.9] hover:scale-110 py-4 flex flex-col h-[550px] gap-4  shadow-2xl rounded-lg  hover:-translate-y-4 transition-all duration-500">
              <Image
                alt="random image"
                width={100}
                height={100}
                src="/svg-5.svg"
                className="cursor-none w-[200px] h-[200px] self-center"
              />
              We ensure that our employees are treated with respect, fairness,
              and dignity, and we do not tolerate any form of discrimination,
              harassment, or abuse. Our goal is to create a workplace where
              every employee feels valued, supported, and empowered to reach
              their full potential.
            </div>
          </div>
        </div>
        <div className="cursor-none flex flex-col gap-10">
          <h2 className="cursor-none   text-3xl font-satoshi font-extrabold font-extrabold text-center">
            GOVERNANCE POLICIES
          </h2>
          <div className="cursor-none flex gap-10 justify-center flex-col md:flex-row items-center">
            <div className="cursor-none  w-[300px] px-4 leading-[1.9] hover:scale-110 py-4 flex flex-col gap-4 h-[550px]  shadow-2xl rounded-lg  hover:-translate-y-4 transition-all duration-500">
              <Image
                alt="random image"
                width={100}
                height={100}
                src="/svg-6.svg"
                className="cursor-none w-[200px] h-[200px] self-center"
              />
              We&apos;re committed to maintaining the highest standards of
              ethical conduct, transparency, and accountability in our business
              practices. We have a robust governance framework in place to
              ensure that we operate in compliance with all relevant laws and
              regulations.
            </div>
            <div className="cursor-none  w-[300px] px-4 leading-[1.9] hover:scale-110 py-4 flex flex-col gap-4 h-[550px]  shadow-2xl rounded-lg  hover:-translate-y-4 transition-all duration-500">
              <Image
                alt="random image"
                width={100}
                height={100}
                src="/svg-7.svg"
                className="cursor-none w-[200px] h-[200px] self-center"
              />
              We value the input and feedback of our stakeholders and are
              committed to maintaining open and transparent communication with
              them. We regularly assess our governance practices and make
              improvements as necessary to ensure that we meet the highest
              standards of corporate responsibility.
            </div>
            <div className="cursor-none  w-[300px] px-4 leading-[1.9] hover:scale-110 py-4 flex flex-col gap-4 h-[550px]  shadow-2xl rounded-lg  hover:-translate-y-4 transition-all duration-500">
              <Image
                alt="random image"
                width={100}
                height={100}
                src="/svg-8.svg"
                className="cursor-none w-[200px] h-[200px] self-center"
              />
              Our commitment to ESG is an ongoing journey, and we&apos;re
              continuously looking for ways to improve our environmental,
              social, and governance practices. We believe that ESG is not just
              the right thing to do, but it also makes good business sense.
            </div>
          </div>
        </div>
      </div>
    </Smooth>
  );
};

export default Esg;

Esg.getInitialProps = async () => {
  return {
    title: "ITXcelerate - ESG",
    image: "/logo-3.png",
    summery:
      "We're committed to making a positive impact on the environment, society, and governance through our business practices and operations.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "esg",
  };
};
