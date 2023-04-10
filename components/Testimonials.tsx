// @ts-ignore
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { testimonials } from "../utils/devData";
import { motion } from "framer-motion";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch } from "react-redux";
import {
  setHovering,
} from "../redux/slices";
import Testimonial from './Testimonial'

const Testimonials = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [num, setNum] = useState(0);
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
    return () => {
      t1.kill();
    };
  }, []);
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
            className="hidden md:flex font-satoshi  uppercase text-2xl md:text-7xl font-bold px-2 md:px-10 text-center"
            onMouseEnter={() => {
              dispatch(setHovering(true));
            }}
            onMouseLeave={() => {
              dispatch(setHovering(false));
            }}
          >
            {"What our clients".split("").map((word,i) => {
              return word === " " ? (
                <span
                  key={i}
                  className="header5 inline-block transition-all duration-300"
                  style={{ transform: "translateY(-100px)" }}
                >
                  &nbsp;
                </span>
              ) : (
                <span
                key={i}
                  className=" header5 inline-block transition-all duration-300 text-white"
                  style={{ transform: "translateY(-100px)" }}
                >
                  {word}
                </span>
              );
            })}
            {" have to say".split("").map((word,i) => {
              return word === " " ? (
                <span
                  key={i}
                  className="header5 inline-block transition-all duration-300"
                  style={{ transform: "translateY(-100px)" }}
                >
                  &nbsp;
                </span>
              ) : (
                <span
                  key={i}
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
          {testimonials.map((item, index) => (
           <Testimonial key={index} index={index} num={num} setNum={setNum} item={item}/> 
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
              strokeLinecap="round"
              strokeLinejoin="round"
              // initial="hidden"
              // animate="visible"
            ></path>{" "}
            <path
              d="M63 1.00001L63 63L0.999989 63"
              strokeLinecap="round"
              strokeLinejoin="round"
              // initial="hidden"
              // animate="visible"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              // initial="hidden"
              // animate="visible"
            ></path>{" "}
            <path
              d="M63 1.00001L63 63L0.999989 63"
              strokeLinecap="round"
              strokeLinejoin="round"
              // initial="hidden"
              // animate="visible"
            ></path>{" "}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
