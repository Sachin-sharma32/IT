import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setHovering } from "../redux/slices";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { PlanProps } from "../utils/types";

const Plan = ({ item, cardFunction, i }: PlanProps) => {
  useEffect(() => {
    const t1 = gsap.to(".revealI2", {
      scrollTrigger: {
        trigger: ".revealI2",
        scroller: "body",
        start: "top center",
      },
      stagger: 0.5,
      y: 0,
      duration: 1,
    });
    gsap.to(".revealI3", {
      scrollTrigger: {
        trigger: ".revealI3",
        scroller: "body",
        start: "top center",
      },
      stagger: 0.5,
      y: 0,
      duration: 1,
    });
    gsap.to(".revealI4", {
      scrollTrigger: {
        trigger: ".revealI4",
        scroller: "body",
        start: "top center",
      },
      stagger: 0.5,
      y: 0,
      duration: 1,
    });
    return () => {
      t1.kill();
    }
  });
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={cardFunction(i)}
      transition={{ duration: 1 }}
      className="cursor-none  card  origin-bottom-left  h-[550px] w-[300px] sm:w-[380px]"
    >
      <div className="cursor-none card__side card__side--front gap-10 flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-fourth text-white shadow-xl rounded-lg h-[550px] w-inherit">
        <div className=" overflow-hidden">
          <h3
            className="cursor-none mb-4 font-satoshi  text-primary text-3xl uppercase font-semibold revealI4"
            style={{ transform: "translateY(100px)" }}
          >
            {item.title}
          </h3>
        </div>
        <div className=" overflow-hidden">
          <p
            className="cursor-none font-light sm:text-lg revealI4"
            style={{ transform: "translateY(100px)" }}
          >
            {item.desc}
          </p>
        </div>
        <ul role="list" className="cursor-none mb-8 space-y-4 text-left">
          {item.list_front.map((item: string, i: number) => (
            <li key={i} className="cursor-none flex items-center space-x-3">
              <svg
                className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="cursor-none  absolute bottom-0 right-0 flex gap-1 items-center hover:gap-2 transition-all duration-300   focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  ">
          See All
          <EastIcon />
        </div>
      </div>
      <div className="cursor-none card__side card__side--back justify-between flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-fourth text-white shadow-xl rounded-lg h-[550px] w-inherit">
        <ul role="list" className="cursor-none mb-8 space-y-4 text-left">
          {item.list_back.map((item: string, i: number) => (
            <li key={i} className="cursor-none flex items-center space-x-3">
              <svg
                className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="cursor-none  rounded-full bg-secondary hover:bg-primary   text-white hover:text-secondary transition-all duration-300 font-medium  text-lg px-4 lg:px-5 py-2 lg:py-2.5 md:mr-2 lg:mr-0 "
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          Let&apos;s Talk
        </Link>
      </div>
    </motion.div>
  );
};

export default Plan;
