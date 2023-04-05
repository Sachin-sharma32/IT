import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion, stagger } from "framer-motion";
import gsap from "gsap";
import { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";

const Header3 = () => {
  const header3Ref = useRef(null);
  // useLayoutEffect(()=>{
  //     const ctx = gsap.context(()=>{
  //         gsap.to('.header3Reveal',{
  //             scrollTrigger:{
  //                 trigger: ".header3Reveal",
  //                 scroller: "body",
  //                 marker: true,
  //                 start: "top 80%",
  //             },
  //             y:0,
  //             duration:1,
  //             stagger:0.5,
  //             ease:Power1.easeInOut,
  //             delay:
  //         })
  //     }, header3Ref)
  //     return ()=>ctx.revert();
  // },[])

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

  const data = [
    "Competitive pricing and flexible engagement models to suit diverse budgets and project scopes.",
    "Transparent communication and regular updates throughout the development cycle.",
    "Robust testing and quality assurance processes to ensure high-performance and reliability.",
    "Timely delivery and efficient project management.",
    "Strong focus on user experience and intuitive design.",
    "Customized solutions tailored to meet specific business needs and requirements.",
    "Experienced team of developers with expertise in the latest technologies.",
  ];

  return (
    <div
      className="cursor-none overflow-hidden bg-[url('/rahul-5.png')] bg-cover bg-blend-soft-light  z-40 px-2 sm:px-4 md:px-10 w-screen bg-[#17383a] relative pb-20"
      ref={header3Ref}
    >
      <section
        className="cursor-none  relative  z-40 px-0 sm:px-6 md:px-10 header-3 pt-20"
        id="features"
      >
        {/* <Image width={100} height={100} 
                src="/bg-1.jpg"
                className="cursor-none  h-full w-full absolute top-0 left-0 z-0"
                alt=""
            /> */}
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
                width={1000}
                height={1000}
                src="/png-5.png"
                className="scale-[1.5] w-[2000px]"
                style={{ right: "200px" }}
              />
            </motion.div>
            <Image
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
                {data.map((item, i) => (
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-100, 0] }}
                    transition={{
                      duration: 1,
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    }}
                    key={i}
                    className="cursor-none overflow-hidden"
                  >
                    <div
                      className="flex gap-3 items-start header3Points"
                      style={{ transform: "translateY(200px)" }}
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://www.greenit-solution.de/wp-content/themes/greenit/dist/images/icon-bullet-18-muted.3b1a73.svg"
                        className="cursor-none  w-4"
                      />
                      <span className="cursor-none text-base font-medium leading-tight  ">
                        {item}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header3;
