import React, { useEffect, useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useOnScreen from "../utils/useOnScreen";
import Image from "next/image";
import { gsap } from "gsap";
import { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";

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
      className="cursor-none bg-white  z-10 h-fit md:h-[180vh] md:flex items-center w-screen md:py-20 py-10 px-2 md:px-10 relative"
      id="faqs"
    >
      <div className="cursor-none max-w-screen-xl pb-8 mx-auto lg:pb-24 lg:px-6 flex justify-center flex-col py-20">
        <h2
          className="cursor-none hidden md:flex justify-center mb-6 text-[28px] md:text-3xl overflow-hidden md:px-10 font-extrabold tracking-tight text-center z-0 text-black lg:mb-8 font-monumentRegular"
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          {"Frequently Asked Questions".split("").map((word) => {
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
        </h2>
        <h2
          className="cursor-none md:hidden mb-6 text-[28px] md:text-3xl overflow-hidden md:px-10 font-extrabold tracking-tight text-center z-0 text-black lg:mb-8 font-monumentRegular"
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          Frequently Asked Questions
        </h2>
        <div className="cursor-none  mx-auto px-4 md:px-14 font-gilroy4">
          {data.map((item, i) => (
            <div
              key={i}
              className={`text-lg md:text-2xl text-gray-500 ${
                i == 0 && "border-t"
              } border-b py-6 grid grid-cols-5 justify-items-end`}
            >
              <div className="cursor-none overflow-hidden flex gap-10 justify-between w-full col-span-4 items-center">
                <p
                  className=" header6Text"
                  style={{ transform: "translateY(100px)" }}
                >
                  {item.title}
                </p>
              </div>
              <div
                className="cursor-none  w-10 h-10 md:w-20 md:h-20 hover:bg-primary rounded-full relative border-black border-[1px] hover:border-none "
                onClick={() => {
                  selected === i ? setSelected(null) : setSelected(i);
                }}
              >
                <div
                  className={`h-6 md:h-14 w-[1px] bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    selected === i ? "max-h-0" : "max-h-[300px]"
                  }`}
                ></div>
                <div className="cursor-none  h-[1px] w-6 md:w-14 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div
                className={` col-span-4 text-lg text-black h-auto ${
                  selected === i ? "max-h-[300px]" : "max-h-0"
                } transition-all duration-500 overflow-hidden`}
              >
                {item.details}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full"></div>
      <Image
        width={1000}
        height={1000}
        src="/new-1.png"
        className="cursor-none hidden md:flex absolute w-[500px] top-52 -right-10"
      />
    </section>
  );
};

export default Header6;
