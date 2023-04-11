import React, { useEffect, useRef, useState } from "react";
import { faqs } from "../utils/devData";
import useOnScreen from '../utils/useOnScreen'
import Image from "next/image";
import { gsap } from "gsap";
import { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";
import { motion } from "framer-motion";
import Faq from './Faq'

const Faqs = () => {
  const dispatch = useDispatch();
  const containerRef = useRef();
  const [selected, setSelected] = useState(null);

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
            // dispatch(setHovering(false));
          }}
        >
          {"Frequently Asked".split("").map((word, i) => {
            return word === " " ? (
              <span
                key={i}
                className="header6 inline-block transition-all duration-300"
                style={{ transform: "translateY(100px)" }}
              >
                &nbsp;
              </span>
            ) : (
              <span
                key={i}
                className=" header6 inline-block transition-all duration-300 "
                style={{ transform: "translateY(100px)" }}
              >
                {word}
              </span>
            );
          })}{" "}
          {" Questions".split("").map((word, i) => {
            return word === " " ? (
              <span
                key={i}
                className="header6 inline-block transition-all duration-300"
                style={{ transform: "translateY(100px)" }}
              >
                &nbsp;
              </span>
            ) : (
              <span
                key={i}
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
          {faqs.map((item, i) => (
            <Faq
              key={i}
              item={item}
              i={i}
              setSelected={setSelected}
              selected={selected}
            />
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
          alt="random image"
          width={1000}
          height={1000}
          src="/new-1.png"
          className="cursor-none w-[500px]"
        />
      </motion.div>
    </section>
  );
};

export default Faqs;
