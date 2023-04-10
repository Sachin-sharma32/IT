import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion, useTransform, useScroll, useInView } from "framer-motion";

import gsap from "gsap";
import { Power4, Power1 } from "gsap";
import Marquee from "react-fast-marquee";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";
import Image from "next/image";

const Hero = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const arrowRef = useRef(null);
  const isInView = useInView(arrowRef);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0.5, 0.7], ["0px", "-100px"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.7, 0.8],
    [0, 0, 0, 0, 1]
  );
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 0.6], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [4, 1]);

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".marquee", {
        y: "100%",
        opacity: 0,
        duration: 1.5,
        ease: Power4.easeOut,
        delay: 2,
      });
      gsap.to(".reveal", {
        y: 0,
        duration: 1,
        stagger: 0.5,
        delay: 2,
        ease: Power1.easeInOut,
      });
      gsap.to(".revealH1", {
        scrollTrigger: {
          trigger: ".revealH1",
          start: "center center",
          scrub: 3,
        },
        // scale: 0.5,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const variants1 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  const variants2 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  const data = [
    { title: "3+", desc: "Years in buisness" },
    { title: "7+", desc: "Of industry experience" },
    { title: "300+", desc: "Projects completed" },
    { title: "50+", desc: "Employees worldwide" },
  ];

  setTimeout(() => {
    if (active < 3) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  }, 2000);
  return (
    <section
      ref={ref}
      id="home"
      className={` bg-secondary h-screen  md:h-[200vh] left-0 top-0 z-[10] w-screen text-white flex relative items-center flex-col`}
    >
      <div className="hidden md:flex sticky top-0 w-full h-screen">
        <div className=" relative h-full w-full ">
          <motion.div style={{ opacity: opacity2 }} className="w-full h-full">
            <Image
              alt="random image"
              src={"/rahul-4.png"}
              width={2000}
              height={2000}
              className="w-full"
            />
          </motion.div>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 min-w-screen h-screen -translate-y-1/2 flex items-center justify-center">
            <motion.div
              style={{ scale }}
              className="border-[1000px] border-secondary  box-content w-[600px] h-[600px] rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="cursor-none  h-screen w-screen px-20 md:px-20 revealH1 justify-center z-50 flex-col-reverse sm:flex-col flex  sm:justify-center gap-32 items-center">
        <div className="flex flex-col gap-20">
          <div className="w-full">
            <motion.h1
              style={{ opacity }}
              // style={{ transform: `translateY(-${yOffset * 0.5}px)` }}
              className="cursor-none uppercase text-5xl flex flex-col md:flex-row justify-center gap-4 md:text-left leading-none w-full tracking-tight font-satoshi font-extrabold md:text-5xl xl:text-6xl dark:text-white z-50"
              onMouseEnter={() => {
                dispatch(setHovering(true));
              }}
              onMouseLeave={() => {
                dispatch(setHovering(false));
              }}
            >
              <div className="cursor-none h-full overflow-hidden">
                <span
                  className="cursor-none text-primary reveal inline-block"
                  style={{ transform: "translateY(1000px)" }}
                >
                  Accelerating
                </span>
                <span
                  className="cursor-none ml-3 reveal inline-block"
                  style={{ transform: "translateY(100%)" }}
                >
                  your digital
                </span>
                <span
                  className="cursor-none ml-3 reveal inline-block"
                  style={{ transform: "translateY(100%)" }}
                >
                  SUCCESS
                  <span className="bg-primary w-6 rounded-full ml-1 animate-pulse inline-block h-1"></span>
                </span>
              </div>
            </motion.h1>
          </div>
          <motion.div
            style={{ opacity }}
            className="cursor-none  w-full flex justify-center items-center gap-10 revealH1"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <div className="flex flex-col gap-1 w-[170px] items-center">
              <h2 className="text-7xl font-thin text-primary">
                {data[active].title}
              </h2>
              <p className=" text-">{data[active].desc}</p>
            </div>
            <motion.div ref={arrowRef}>
              <svg
                className="cursor-none o-ui-arrow stroke-white -rotate-90 stroke-2 scale-[1]"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <motion.path
                  d="M3.10162 3.10156L62.9999 62.9999"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={variants1}
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: isInView ? 1 : 0 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                ></motion.path>{" "}
                <motion.path
                  d="M63 1.00001L63 63L0.999989 63"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: isInView ? 1 : 0 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                ></motion.path>{" "}
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="cursor-none  z-40 bg-fourth marquee absolute bottom-0">
        <section className="cursor-none  ">
          <div className="cursor-none  p-4 z-40 w-screen">
            <Marquee
              className="cursor-none  w-screen"
              gradient={false}
              speed={50}
            >
              <div
                className="cursor-none flex gap-0 px-10 dark:text-tertiary font-satoshi font-extrabold font- text-3xl md:text-7xl overflow-hidden"
              >
                DESIGNING THE FUTURE OF TECHNOLOGY
              </div>
            </Marquee>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
