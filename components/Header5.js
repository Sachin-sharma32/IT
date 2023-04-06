import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import { motion } from "framer-motion";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import { QuotePara } from "../utils/Styles";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  setHovering,
  setHoveringLeft,
  setHoveringRight,
} from "../redux/slices";
import Marquee from "react-fast-marquee";

const Header5 = ({ yOffset, header5Ref }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [num, setNum] = useState(0);
  // useEffect(()=>{
  //     if(typeof window !== 'undefined'){
  //         const sections = gsap.utils.toArray(".section");
  //         gsap.to(sections,{
  //             xPercent: -100 * (sections.length - 1),
  //             ease: "none",
  //             scrollTrigger: {
  //                 trigger: ".container",
  //                 pin:true,
  //                 scrub:1,
  //                 end: "+=100",
  //             }
  //         });
  //     }
  // },[])
  useEffect(() => {
    const t1 = gsap.to(".header5", {
      scrollTrigger: {
        trigger: ".header5",
        scroller: "body",
        start: "top bottom",
      },
      y: 0,
      rotate: 0,
      duration: 0.05,
      stagger: 0.05,
    });
    gsap.to(".header5Text", {
      scrollTrigger: {
        trigger: ".header5Text",
        scroller: "body",
        start: "top center",
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
  const data = [
    {
      title:
        "Working with IT Xcelerate was a game-changer for my business. They developed a custom software solution that streamlined our operations and increased our efficiency. The team was professional, responsive, and delivered the project on time and on budget. I highly recommend their services!",
      author: "John D.",
      position: "CEO of Reddhr",
    },
    {
      title:
        "Itxclerate is just awesome. It contains tons of components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS project.",
      author: "Micheal Gough",
      position: "CEO of Reddhr",
    },
    {
      title:
        "IT Xcelerate has been an invaluable partner for our business. They have helped us navigate complex IT challenges and provided us with innovative solutions to improve our operations. Their team is professional, knowledgeable, and always goes the extra mile to ensure our satisfaction. I highly recommend IT Xcelerate to any business looking for top-notch IT services.",
      author: "Tom L.",
      position: "COO of JKL Logistics",
    },
    {
      title:
        "I was impressed with IT Xcelerate&apos;s attention to detail and ability to understand our unique business needs. They provided us with a customized mobile app that has been a game-changer for our customer engagement and retention. I would recommend IT Xcelerate to any business looking to leverage technology to improve their operations..",
      author: "Rachel S.",
      position: "Owner of GHI Restaurant",
    },
    {
      title:
        "Ive been working with IT Xcelerate for years and they have consistently provided high-quality IT support and solutions. Their team is knowledgeable, responsive, and always goes above and beyond to ensure our technology needs are met. I highly recommend IT Xcelerate to any business looking for reliable IT services.",
      author: "Mark R.",
      position: "CFO of TBFE",
    },
    {
      title:
        "IT Xcelerate exceeded my expectations for our web development project. They not only created a beautiful and functional website, but they also provided excellent customer service throughout the entire process. I would definitely use them again for future projects.",
      author: "Sarah T.",
      position: "Marketing Manager at MulberryStudio",
    },
  ];
  return (
    <section
      className="cursor-none  z-40  md:h-[200vh] w-screen py-20  flex flex-col gap-20 items-center justify-center relative text-tertiary bg-fourth"
      id="testimonials"
      ref={ref}
    >
      <div className="flex flex-col justify-center items-center sm:px-20 gap-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [-100, 0] }}
          transition={{ duration: 1 }}
          className=" overflow-hidden w-full h-full"
        >
          <h3
            className="hidden md:flex font-satoshi font-extrabold uppercase text-2xl md:text-7xl font-bold px-2 md:px-10 text-center"
            onMouseEnter={() => {
              dispatch(setHovering(true));
            }}
            onMouseLeave={() => {
              dispatch(setHovering(false));
            }}
          >
            {"What our clients".split("").map((word) => {
              return word === " " ? (
                <span
                  className="header5 inline-block transition-all duration-300"
                  style={{ transform: "translateY(-100px)" }}
                >
                  &nbsp;
                </span>
              ) : (
                <span
                  className=" header5 inline-block transition-all duration-300 text-white"
                  style={{ transform: "translateY(-100px)" }}
                >
                  {word}
                </span>
              );
            })}
            {" have to say".split("").map((word) => {
              return word === " " ? (
                <span
                  className="header5 inline-block transition-all duration-300"
                  style={{ transform: "translateY(-100px)" }}
                >
                  &nbsp;
                </span>
              ) : (
                <span
                  className=" header5 inline-block transition-all duration-300 text-primary"
                  style={{ transform: "translateY(-100px)" }}
                >
                  {word}
                </span>
              );
            })}
          </h3>
          <h3
            className="md:hidden font-satoshi font-extrabold uppercase text-2xl md:text-5xl px-2 md:px-10 text-center"
            onMouseEnter={() => {
              dispatch(setHovering(true));
            }}
            onMouseLeave={() => {
              dispatch(setHovering(false));
            }}
          >
            What Our Clients Have To Say
          </h3>
        </motion.div>
        <div className=" relative px-4 pl-14  md:px-14 ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [100, 0] }}
            transition={{ duration: 1 }}
            className=" text-xl font-heebo quotePara mx-auto max-w-[1000px]"
          >
            ITXcelerate is a company that knows how to turn technology into
            business success. Their innovative solutions and exceptional service
            make them a top choice for companies looking to excel in the digital
            age.
          </motion.p>
        </div>
      </div>
      <div className="w-full  pb-10 md:pb-0 overflow-x-scroll overflow-y-hidden md:overflow-x-hidden md:h-fit flex flex-col gap-10">
        <div
          className=" flex md:gap-[50px] w-[600vw] md:w-[300vw] transition-all md:h-fit h-full duration-1000"
          style={{ transform: `translateX(calc(-100vw * ${num}))` }}
        >
          {data.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 1 }}
              key={index}
              className="w-[100vw] md:w-[50vw] h-full px-4 md:px-0"
            >
              <div
                className={` flex flex-col justify-center h-[400px] gap-10 items-center bg-secondary text-tertiary p-4 md:p-10 rounded-3xl`}
                onMouseEnter={() => {
                  if (index % 2 === 0) {
                    dispatch(setHoveringLeft(true));
                  } else {
                    dispatch(setHoveringRight(true));
                  }
                }}
                onMouseLeave={() => {
                  if (index % 2 === 0) {
                    dispatch(setHoveringLeft(false));
                  } else {
                    dispatch(setHoveringRight(false));
                  }
                }}
                onClick={() => {
                  if (index % 2 === 0) {
                    if (num > 0) {
                      setNum(num - 1);
                    } else {
                      setNum(2);
                    }
                  } else {
                    if (num < 2) {
                      setNum(num + 1);
                    } else {
                      setNum(0);
                    }
                  }
                }}
              >
                <blockquote className="flex flex-col gap-2">
                  <Rating name="size-medium" defaultValue={5} readOnly />
                  <q className="cursor-none text-base font-medium  md:text-2xl">
                    {item.title}
                  </q>
                </blockquote>
                <figcaption className="cursor-none flex self-start">
                  <div className="cursor-none flex  flex-col">
                    <div className="cursor-none font-medium font-satoshi font-extrabold text-primary">
                      {item.author}
                    </div>
                    <div className="cursor-none font-light text-lg">
                      {item.position}
                    </div>
                  </div>
                </figcaption>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className=" gap-10  justify-center hidden md:flex -translate-y-10">
        <div
          className="cursor-none  w-20 h-20 hover:bg-primary rounded-full group relative flex justify-center items-center border-white border-[1px] hover:border-none "
          onClick={() => {
            if (num > 0) {
              setNum(num - 1);
            } else {
              setNum(2);
            }
          }}
        >
          <svg
            className="cursor-none o-ui-arrow stroke-white -rotate-[225deg] group-hover:stroke-black  w-fit scale-50"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M3.10162 3.10156L62.9999 62.9999"
              stroke-linecap="round"
              stroke-linejoin="round"
              initial="hidden"
              animate="visible"
            ></path>{" "}
            <path
              d="M63 1.00001L63 63L0.999989 63"
              stroke-linecap="round"
              stroke-linejoin="round"
              initial="hidden"
              animate="visible"
            ></path>{" "}
          </svg>
        </div>
        <div
          className="cursor-none  w-20 h-20 hover:bg-primary rounded-full group relative flex justify-center items-center border-white border-[1px] hover:border-none "
          onClick={() => {
            if (num < 2) {
              setNum(num + 1);
            } else {
              setNum(0);
            }
          }}
        >
          <svg
            className="cursor-none o-ui-arrow stroke-white -rotate-45 group-hover:stroke-black  w-fit scale-50"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M3.10162 3.10156L62.9999 62.9999"
              stroke-linecap="round"
              stroke-linejoin="round"
              initial="hidden"
              animate="visible"
            ></path>{" "}
            <path
              d="M63 1.00001L63 63L0.999989 63"
              stroke-linecap="round"
              stroke-linejoin="round"
              initial="hidden"
              animate="visible"
            ></path>{" "}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Header5;
