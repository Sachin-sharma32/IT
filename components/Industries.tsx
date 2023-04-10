import Image from "next/image";
import { industries } from "../utils/devData";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { setHovering } from "../redux/slices";
import Industry from "./Industry";
gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
  const [active, setActive] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const t1 = gsap.to(".header7", {
      scrollTrigger: {
        trigger: ".header7",
        scroller: "body",
        start: "bottom bottom",
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

  const box = useRef(null);
  const [counter, setCounter] = useState(1);
  setTimeout(() => {
    if (counter < 5) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  }, 1000);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        box.current.style.left = `${e.clientX + 30}px`;
        box.current.style.top = `${e.clientY}px`;
      });
    }
  }, []);

  return (
    <div className=" w-screen hidden md:flex min-h-screen p-20 z-50 bg-secondary flex flex-col gap-10 justify-center items-center">
      <div
        style={{ visibility: "hidden" }}
        className="cursor-none  bg-blend-difference fixed -translate-y-1/2 pointer-events-none  z-[1000] h-10 text- flex flex-col gap-4"
        ref={box}
      >
        <div className="cursor-none bg-primary rounded-full font-satoshi font-extrabold  px-10 py-1 w-fit">
          {" "}
          ITXCELERATE
        </div>
        <div className="cursor-none  bg-opacity-50 px-1 pb-1 flex py-1 flex-col gap-1 bg-tertiary relative rounded-md">
          <div className="cursor-none flex gap-2 pl-2">
            <div className="cursor-none  w-2 h-2 bg-primary rounded-full"></div>
            <div className="cursor-none  w-2 h-2 bg-primary rounded-full"></div>
            <div className="cursor-none  w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <Image
            alt="random image"
            width={100}
            height={100}
            src={`/slider-${counter}.jpg`}
            className="cursor-none  w-80 brightness-50"
          />
          <p className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-satoshi  font-extrabold text-white">
            {counter === 1 && "WEB"}
            {counter === 2 && "MOBILE"}
            {counter === 3 && "DEPLOYMENT"}
            {counter === 4 && "CLOUD"}
            {counter === 5 && "EXCELLENCE"}
          </p>
        </div>
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: [-100, 0] }}
        transition={{ duration: 1 }}
        className="cursor-none hidden md:flex mx-auto  text-2xl md:text-7xl uppercase font-satoshi font-extrabold overflow-hidden h-[110px] text-center px-4 sm:px-0 "
        onMouseEnter={() => {
          dispatch(setHovering(true));
        }}
        onMouseLeave={() => {
          dispatch(setHovering(false));
        }}
      >
        {"Industries We ".split("").map((word, i) => {
          return word === " " ? (
            <span
              key={i}
              className="header7 inline-block transition-all duration-300"
              style={{ transform: "translateY(100px)" }}
            >
              &nbsp;
            </span>
          ) : (
            <span
              key={i}
              className=" header7 inline-block transition-all duration-300 text-white"
              style={{ transform: "translateY(100px)" }}
            >
              {word}
            </span>
          );
        })}
        {"CATER".split("").map((word, i) => {
          return word === " " ? (
            <span
              key={i}
              className="header7 inline-block transition-all duration-300"
              style={{ transform: "translateY(100px)" }}
            >
              &nbsp;
            </span>
          ) : (
            <span
              key={i}
              className=" header7 inline-block transition-all duration-300 text-primary"
              style={{ transform: "translateY(100px)" }}
            >
              {word}
            </span>
          );
        })}
      </motion.h2>
      <h2
        className="cursor-none md:hidden  text-4xl md:text-5xl text-primary uppercase  md:h-[50px] font-satoshi font-extrabold md:overflow-hidden text-center px-4 sm:px-0  transition-all duration-500"
        onMouseEnter={() => {
          dispatch(setHovering(true));
        }}
        onMouseLeave={() => {
          dispatch(setHovering(false));
        }}
      >
        Industries We Cater
      </h2>
      <div className="flex w-full gap-2 h-[250px] justify-center items-center">
        {industries.map((item, i) => (
          <Industry
            key={i}
            item={item}
            i={i}
            active={active}
            setActive={setActive}
            box={box}
          />
        ))}
      </div>
    </div>
  );
};

export default Industries;
