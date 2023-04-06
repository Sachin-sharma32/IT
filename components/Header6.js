import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import Image from "next/image";
import { gsap } from "gsap";
import { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";
import { motion } from "framer-motion";

const Header6 = ({ yOffset, prev }) => {
  const dispatch = useDispatch();
  const containerRef = useRef();
  const isOnScreen = useOnScreen(containerRef);
  const [selected, setSelected] = useState(4);

  const data = [
    {
      title: "What kind of web and app development services do you offer?",
      details:
        "We offer a wide range of web and app development services, including custom website development, mobile app development, e-commerce website development, CMS development, and more. Our team of experienced developers can build custom solutions tailored to your unique business needs.",
    },
    {
      title: "How do you ensure the security of my website or app?",
      details:
        "We take security seriously and follow industry-standard best practices to secure your website or app. This includes using secure coding practices, implementing SSL encryption, and regularly updating software and security patches.",
    },
    {
      title:
        "How long does it typically take to complete a web or app development project?",
      details:
        "The timeline for each project can vary based on the complexity and scope of the project. We work closely with our clients to establish a realistic timeline and ensure timely delivery of the project.",
    },
    {
      title:
        "Do you provide ongoing maintenance and support for your web and app solutions?",
      details:
        "Yes, we offer ongoing maintenance and support for all of our web and app solutions. This includes regular updates, bug fixes, and technical support to ensure your website or app runs smoothly.",
    },
    {
      title:
        "What kind of technologies and tools do you use for web and app development?",
      details:
        "We use the latest technologies and tools to build high-quality web and app solutions. This includes using programming languages such as Java, Python, PHP, and Swift, as well as utilizing popular frameworks such as React, Angular, and Vue.js.",
    },
  ];

  useEffect(() => {
    const t1 = gsap.to(".header6", {
      scrollTrigger: {
        trigger: ".header6",
        scroller: "body",
        start: "top bottom",
        // markers: true,
      },
      y: 0,
      rotate: 0,
      duration: 1,
      stagger: 0.05,
    });
    gsap.to(".header6Text", {
      scrollTrigger: {
        trigger: ".header6Text",
        scroller: "body",
        start: "top bottom",
      },
      y: 0,
      rotate: 0,
      duration: 1,
      stagger: 0.05,
    });
    return () => {
      t1.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="cursor-none bg-fourth  z-10 h-fit md:h-[180vh] md:flex items-center w-screen md:py-20 py-10 px-2 md:px-10 relative"
      id="faqs"
    >
      <div className="cursor-none max-w-screen-xl text-white pb-8 mx-auto lg:pb-24 lg:px-6 flex justify-center flex-col py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [-100, 0] }}
          transition={{ duration: 1 }}
          className="cursor-none hidden md:flex uppercase  justify-center mb-6 text-[28px] md:text-5xl overflow-hidden md:px-10 font-extrabold tracking-tight text-center z-0  lg:mb-8"
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          {"Frequently Asked".split("").map((word) => {
            return word === " " ? (
              <span
                className="header6 inline-block transition-all duration-300"
                style={{ transform: "translateY(100px)" }}
              >
                &nbsp;
              </span>
            ) : (
              <span
                className=" header6 inline-block transition-all duration-300 "
                style={{ transform: "translateY(100px)" }}
              >
                {word}
              </span>
            );
          })}{" "}
          {" Questions".split("").map((word) => {
            return word === " " ? (
              <span
                className="header6 inline-block transition-all duration-300"
                style={{ transform: "translateY(100px)" }}
              >
                &nbsp;
              </span>
            ) : (
              <span
                className=" header6 inline-block transition-all duration-300 text-primary"
                style={{ transform: "translateY(100px)" }}
              >
                {word}
              </span>
            );
          })}{" "}
        </motion.div>
        <h2
          className="cursor-none md:hidden mb-6 text-[28px] md:text-3xl overflow-hidden md:px-10 font-extrabold tracking-tight text-center z-0  lg:mb-8"
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          Frequently Asked Questions
        </h2>
        <div className="cursor-none flex flex-col gap-6  mx-auto px-4 md:px-14">
          {data.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, x: [-100, 0], scale: 1 }}
              transition={{ duration: .5, yOffset: 100 }}
              whileHover={{ scale: 1.1}}
              key={i}
              className={`text-lg md:text-xl  ${
                i == 0 && ""
              }  p-6 rounded-3xl grid grid-cols-5 group justify-items-end hover:bg-white transition-colors duration-500 hover:text-black  bg-secondary text-white`}
              onClick={() => {
                selected === i ? setSelected(null) : setSelected(i);
              }}
            >
              <div className="cursor-none overflow-hidden flex gap-10 justify-between w-full col-span-4 items-center">
                <div className="flex gap-6">
                  <p className="w-[50px]">0{i + 1}</p>
                  <p
                    className=" header6Text"
                    style={{ transform: "translateY(100px)" }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="cursor-none  w-10 h-10 md:w-10 md:h-10 group-hover:bg-primary group-hover:border-primary rounded-full relative border-white border-[1.5px] hover:border-none ">
                <div
                  className={`h-6 md:h-5 w-[1.5px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    selected === i ? "max-h-0" : "max-h-[300px]"
                  }`}
                ></div>
                <div className="cursor-none  h-[1.5px] w-6 md:w-5 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div
                className={` col-span-4 text-lg  h-auto ${
                  selected === i ? "max-h-[300px] pt-4" : "max-h-0"
                } transition-all duration-500 overflow-hidden ml-[50px]`}
              >
                {item.details}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: [100, 0] }}
        transition={{ duration: 1 }}
        className="w-fit h-fit absolute top-52 -right-10 md:flex hidden"
      >
        <Image
          width={1000}
          height={1000}
          src="/new-1.png"
          className="cursor-none w-[500px]"
        />
      </motion.div>
    </section>
  );
};

export default Header6;
