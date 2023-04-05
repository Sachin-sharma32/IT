import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";
import Spline from "@splinetool/react-spline";

const Header7 = () => {
  const dispatch = useDispatch();
  const data = [
    { name: "Education", image: "/svg-10.svg" },
    { name: "Art & Museum", image: "/svg-11.svg" },
    { name: "Automobile and Logistics", image: "/svg-12.svg" },
    { name: "Food and Beverage", image: "/svg-13.svg" },
    { name: "Hospitality", image: "/svg-14.svg" },
    { name: "Healthcare", image: "/svg-15.svg" },
    { name: "Entertainment", image: "/svg-16.svg" },
    { name: "Retail", image: "/svg-17.svg" },
    { name: "Agriculture", image: "/svg-18.svg" },
    { name: "Fintech", image: "/svg-19.svg" },
    { name: "Social Media", image: "/svg-20.svg" },
    { name: "Social Media", image: "/svg-20.svg" },
  ];
  const [counter, setCounter] = useState(1);
  setTimeout(() => {
    if (counter < 5) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  }, 1000);

  const scaleRef = useRef(null);
  const cardRefs = useRef(data.map((item) => React.createRef()));
  const [isHovering, setIsHovering] = useState(false);
  const [element, setElement] = useState(null);
  console.log(isHovering, element);
  const [hoverPosition, setHoverPosition] = useState({ x: null, y: null });

  const handleMouseEnter = (e, j) => {
    console.log(j);
    console.log(scaleRef.current);
    scaleRef.current.style.backgroundColor = "white";
    scaleRef.current.classList.add("left-0");
    setElement(j);
    setIsHovering(true);
    setHoverPosition({ x: e.clientX, y: e.clientY });
    box.current.style.visibility = "visible";
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverPosition({ x: null, y: null });
    box.current.style.visibility = "hidden";
  };

  const box = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        box.current.style.left = `${e.clientX + 30}px`;
        box.current.style.top = `${e.clientY}px`;
      });
    }
  }, []);

  useEffect(() => {
    const t1 = gsap.to(".parallax-0", {
      scrollTrigger: {
        trigger: ".parallax-0",
        scroller: "body",
        start: "top center",
        scrub: true,
      },
      y: -500,
      duration: 1,
      ease: Power1.easeInOut,
      delay: 0,
    });
    gsap.to(".parallax-2", {
      scrollTrigger: {
        trigger: ".parallax-2",
        scroller: "body",
        start: "top center",
        scrub: true,
      },
      y: -500,
      duration: 1,
      ease: Power1.easeInOut,
      delay: 0,
    });
    gsap.to(".header7", {
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

  return (
    <div className="cursor-none flex lg:hidden flex-col z-30 h-fit relative justify-center items-center p-2 md:px-10 py-10 md:py-20 w-screen bg-secondary">
      <div
        style={{ visibility: "hidden" }}
        className="cursor-none  bg-blend-difference fixed -translate-y-1/2 pointer-events-none  z-[1000] h-10 text- flex flex-col gap-4"
        ref={box}
      >
        <div className="cursor-none bg-primary rounded-full font-satoshi font-extrabold font-extrabold px-10 py-1 w-fit">
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
            width={100}
            height={100}
            src={`/slider-${counter}.jpg`}
            className="cursor-none  w-80 brightness-50"
          />
          <p className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-satoshi font-extrabold font-extrabold text-white">
            {counter === 1 && "WEB"}
            {counter === 2 && "MOBILE"}
            {counter === 3 && "DEPLOYMENT"}
            {counter === 4 && "CLOUD"}
            {counter === 5 && "EXCELLENCE"}
          </p>
        </div>
      </div>
      <div className="cursor-none text- sm:text-lg  flex flex-col gap-0 md:gap-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [-100, 0] }}
          transition={{ duration: 1 }}
          className="cursor-none hidden md:flex mx-auto  text-2xl md:text-7xl  font-bold uppercase font-satoshi font-extrabold overflow-hidden text-center px-4 sm:px-0 "
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          {"Industries We ".split("").map((word) => {
            return word === " " ? (
              <span
                className="header7 inline-block transition-all duration-300"
                style={{ transform: "translateY(100px)" }}
              >
                &nbsp;
              </span>
            ) : (
              <span
                className=" header7 inline-block transition-all duration-300 text-white"
                style={{ transform: "translateY(100px)" }}
              >
                {word}
              </span>
            );
          })}
          {"CATER".split("").map((word) => {
            return word === " " ? (
              <span
                className="header7 inline-block transition-all duration-300"
                style={{ transform: "translateY(100px)" }}
              >
                &nbsp;
              </span>
            ) : (
              <span
                className=" header7 inline-block transition-all duration-300 text-primary"
                style={{ transform: "translateY(100px)" }}
              >
                {word}
              </span>
            );
          })}
        </motion.h2>
        <h2
          className="cursor-none md:hidden  text-4xl md:text-5xl text-primary uppercase font-bold  md:h-[50px] font-satoshi font-extrabold md:overflow-hidden text-center px-4 sm:px-0  transition-all duration-500"
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          Industries We Cater
        </h2>
        <div className="cursor-none hidden py-10 sm:grid md:grid-cols-3 justify-items-center justify-center  lg:grid-cols-3 gap-10 px-4 md:px-10 w-screen  overflow-scroll header-4">
          {data.map((item, i) => (
            <motion.div
              ref={cardRefs.current[i]}
              onMouseEnter={(e) => {
                handleMouseEnter(e, i);
              }}
              onMouseLeave={handleMouseLeave}
              key={i}
              className={`cursor-none bg-opacity-50 bg-white overflow-hidden hover:grayscale-0 text-secondary shadow-lg rounded-lg p-4 flex flex-col justify-center w-[350px] gap-6 items-center  transition-all duration-500 grayscale `}
            >
              <div
                ref={scaleRef}
                className="cursor-none rounded-full absolute bg-primary top-0 left-0 opacity-20 h-[1px] w-[1px]  transition-all duration-1000"
                style={
                  isHovering && element === i
                    ? { transform: "scale(70000%)" }
                    : {}
                }
              ></div>
              <div>
                <div className="cursor-none  bg-tertiary rounded-full p-4 flex justify-center items-center h-32 w-32">
                  <Image
                    width={100}
                    height={100}
                    src={`${item.image}`}
                    alt=""
                    className="cursor-none w-20  transition-all duration-300"
                  />
                </div>
              </div>
              <motion.h5
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: [200, 0] }}
                transition={{ duration: 1, delay: 0.1 }}
                className="cursor-none text-2xl   uppercase text-center font-satoshi font-extrabold font-extrabold"
              >
                {item.name}
              </motion.h5>
            </motion.div>
          ))}
        </div>
        <div className="cursor-none md:hidden py-32 gap-10 px-4 md:px-10 h-full w-screen flex overflow-x-scroll header-4">
          {data.map((item, i) => (
            <div
              key={i}
              className={`cursor-none bg-opacity-50 bg-white overflow-hidden hover:grayscale-0 text-secondary shadow-lg rounded-lg p-4 flex flex-col justify-center min-w-[250px] gap-6 items-center  transition-all duration-500 grayscale `}
            >
              <div
                ref={scaleRef}
                className="cursor-none rounded-full absolute bg-primary top-0 left-0 opacity-20 h-[1px] w-[1px]  transition-all duration-1000"
                style={
                  isHovering && element === i
                    ? { transform: "scale(70000%)" }
                    : {}
                }
              ></div>
              <div>
                <div className="cursor-none  bg-tertiary rounded-full p-4 flex justify-center items-center h-32 w-32">
                  <Image
                    width={100}
                    height={100}
                    src={`${item.image}`}
                    alt=""
                    className="cursor-none w-20  transition-all duration-300"
                  />
                </div>
              </div>
              <h5 className="cursor-none text-2xl   uppercase text-center font-satoshi font-extrabold font-extrabold">
                {item.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen w-screen relative overflow-hidden hidden">
        {/* <Spline
          className=" h-screen w-screen absolute top-1/2 -translate-y-[87%] left-1/2 -translate-x-[70%] z-50"
          scene="https://prod.spline.design/wLFgE289qdMerm8r/scene.splinecode"
        /> */}
      </div>
    </div>
  );
};

export default Header7;
