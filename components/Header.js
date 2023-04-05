import React, { useEffect, useRef, useLayoutEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion, useTransform, useScroll } from "framer-motion";

import gsap from "gsap";
import { Power4, Power1 } from "gsap";
import Marquee from "react-fast-marquee";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";
import Image from "next/image";

const Header = ({ yOffset, prev }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0.5, 0.7], ["0px", "-100px"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.7, 0.8, 0.9],
    [0, 0, 0, 0, 0, 1]
  );
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

  return (
    <section
      ref={ref}
      id="home"
      className={` bg-secondary h-screen  md:h-[200vh] left-0 top-0 z-[10] w-screen text-white flex relative items-center flex-col`}
    >
      <div className="hidden md:flex sticky top-0 w-full h-screen">
        <div className=" relative h-full w-full ">
          <Image
            src={"/rahul-4.png"}
            width={2000}
            height={2000}
            className="w-full"
          />
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 min-w-screen h-screen -translate-y-1/2 flex items-center justify-center">
            <motion.div
              style={{ scale }}
              className="border-[600px] border-secondary  box-content w-[400px] h-[400px] rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="cursor-none w-screen px-20 md:px-20 revealH1 justify-center  flex-col-reverse sm:flex-row flex gap-20 sm:justify-between sm:gap-0 mt-32 h-screen md:h-[200vh] items-center">
        <div className="w-full ">
          <motion.h1
            style={{ opacity }}
            // style={{ transform: `translateY(-${yOffset * 0.5}px)` }}
            className="cursor-none uppercase text-3xl font-bold text-center md:text-left leading-none w-full tracking-tight font-satoshi md:text-5xl xl:text-5xl dark:text-white z-50"
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
            </div>
            <div className="cursor-none  overflow-hidden">
              <span
                className="cursor-none reveal inline-block"
                style={{ transform: "translateY(100%)" }}
              >
                your digital
              </span>
            </div>
            <div className="cursor-none  overflow-hidden">
              <span
                className="cursor-none  reveal inline-block"
                style={{ transform: "translateY(100%)" }}
              >
                <Typewriter
                  options={{
                    strings: ["success."],
                    autoStart: true,
                    loop: true,
                    pauseFor: 2500,
                  }}
                  className="cursor-none text-white z-50"
                />
              </span>
            </div>
          </motion.h1>
        </div>
        <motion.div
          style={{ opacity }}
          className="cursor-none   w-full flex justify-center md:justify-end md:mr-20 revealH1"
        >
          <motion.div>
            <svg
              className="cursor-none o-ui-arrow stroke-white -rotate-90 scale-[2] sm:scale-[3] md:scale-[4]"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <motion.path
                d="M3.10162 3.10156L62.9999 62.9999"
                stroke-linecap="round"
                stroke-linejoin="round"
                variants={variants1}
                initial="hidden"
                animate="visible"
              ></motion.path>{" "}
              <motion.path
                d="M63 1.00001L63 63L0.999989 63"
                stroke-linecap="round"
                stroke-linejoin="round"
                variants={variants2}
                initial="hidden"
                animate="visible"
              ></motion.path>{" "}
            </svg>
          </motion.div>
        </motion.div>
      </div>
      <div className="cursor-none  z-40 bg-black marquee">
        <section className="cursor-none  ">
          <div className="cursor-none  p-4 z-40 w-screen">
            <Marquee
              className="cursor-none  w-screen"
              gradient={false}
              speed={50}
            >
              <div
                // style={{
                //   transform: `translateX(${-yOffset - 10}px)`,
                // }}
                className="cursor-none flex gap-20 px-10 dark:text-tertiary font-monumentRegular font- text-3xl md:text-5xl overflow-hidden"
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

export default Header;
