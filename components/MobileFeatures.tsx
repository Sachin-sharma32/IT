import React, { useEffect, useLayoutEffect, useRef } from "react";
import { features } from "../utils/devData";
import { motion,  } from "framer-motion";
import gsap from "gsap";
import { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";
import Feature from './Feature'

const MobileFeatures = () => {
  const header3Ref = useRef(null);

  const dispatch = useDispatch();
  useEffect(() => {
    let t1 = gsap.to(".header3Reveal", {
      scrollTrigger: {
        trigger: ".headingBox",
        scroller: "body",
        start: "center center",
      },
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: Power1.easeInOut,
      delay: 0,
    });
    gsap.to(".header3Points", {
      scrollTrigger: {
        trigger: ".header3Points",
        scroller: "body",
        start: "top bottom",
      },
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: Power1.easeInOut,
      delay: 0,
    });
    gsap.to(".flowers", {
      scrollTrigger: {
        trigger: ".flowers",
        scroller: "body",
        start: "top bottom",
        scrub: 5,
      },
      right: "300px",
      duration: 1,
      ease: Power1.easeInOut,
      delay: 0,
    });
    return () => {
      t1.kill();
    };
  }, []);

  return (
    <div
      className="cursor-none overflow-hidden lg:hidden bg-[url('/rahul-5.png')] bg-cover bg-blend-soft-light  z-40 px-2 sm:px-4 md:px-10 w-screen bg-[#17383a] relative pb-20"
      ref={header3Ref}
    >
      <section
        className="cursor-none  relative  z-40 px-0 sm:px-6 md:px-10 header-3 pt-20"
        id="features"
      >
        <div className="cursor-none max-w-screen-xl sm:px-4 mx-auto space-y-12 lg:space-y-20 lg:px-4 z-20">
          <div className="cursor-none items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 z-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: [100, -200] }}
              transition={{
                duration: 2,
              }}
              className=" absolute top-0 w-fit hidden md:flex cursor-none"
            >
              <Image
                alt="random image"
                width={1000}
                height={1000}
                src="/png-5.png"
                className="scale-[1.5] w-[2000px]"
                style={{ right: "200px" }}
              />
            </motion.div>
            <Image
              alt="random image"
              width={5000}
              height={5000}
              src="/png-5.png"
              className="cursor-none right-10 md:hidden z-0 absolute scale-[1.5] top-0 flowers w-[2000px]"
              style={{ right: "200px" }}
            />
            <div className="cursor-none text-white">
              <div className="cursor-none  overflow-hidden headingBox">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, x: [-100, 0] }}
                  transition={{ duration: 1 }}
                  className="cursor-none mb-4 uppercase  text-xl sm:text-5xl  px-4 sm:px-0 font-extrabold tracking-tight text-white"
                  onMouseEnter={() => {
                    dispatch(setHovering(true));
                  }}
                  onMouseLeave={() => {
                    dispatch(setHovering(false));
                  }}
                >
                  <div className=" overflow-hidden">
                    <span
                      className=" inline-block header3Reveal"
                      style={{ transform: `translateY(100px)` }}
                    >
                      Why choose IT
                    </span>
                  </div>
                  <div className=" overflow-hidden">
                    <span
                      className=" inline-block header3Reveal"
                      style={{ transform: `translateY(100px)` }}
                    >
                      Xcelerate for Web
                    </span>
                  </div>
                  <div className=" overflow-hidden">
                    <span
                      className=" inline-block header3Reveal"
                      style={{ transform: `translateY(100px)` }}
                    >
                      App Development ?
                    </span>
                  </div>
                </motion.h2>
              </div>
              <ul
                role="list"
                className="cursor-none pt-8 space-y-5 px-4 border-t border-tertiary my-7"
              >
                {features.map((item, i) => (
                  <Feature key={i} item={item} i={i} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileFeatures;
