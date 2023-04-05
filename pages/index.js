import React, { use, useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";
import Header3 from "../components/Header3";
import Header4 from "../components/Header4";
import Header5 from "../components/Header5";
import Header6 from "../components/Header6";
import useOnScreen from "../utils/useOnScreen";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import Header7 from "../components/Header-7";
import { motion } from "framer-motion";
import Scrollbar from "smooth-scrollbar";
import Cursor from "../components/Cursor";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import Header8 from "../components/header-8";
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";
import Header9 from "../components/Header-9";
import Header10 from "../components/Header10";
import Header11 from "../components/header11";

const Home = () => {
  const dispatch = useDispatch();
  const [yOffset, setYOffset] = useState(0);
  const [prev, setPrev] = useState(0);
  const newRef = useRef(null);
  const header5Ref = useRef(null);
  const isOnScreen = useOnScreen(newRef);
  console.log(isOnScreen);

  const handleScroll = () => {
    setYOffset(window.pageYOffset);
    yOffset !== undefined && setPrev(yOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [yOffset]);

  useEffect(() => {
    const t1 = gsap.to(".revealI1", {
      scrollTrigger: {
        trigger: ".revealI1",
        scroller: "body",
        start: "center center",
      },
      y: 0,
      duration: 1,
    });
    gsap.to(".revealI2", {
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
    };
  }, []);

  // const options = {
  //     damping: 0.05,
  // };
  // useEffect(() => {
  //     Scrollbar.init(document.querySelector('.container'), options);
  // }, []);

  return (
    <div className="  min-h-[100vh] flex container mb-[90vh] max-w-[100vw]">
      <div className="flex flex-col">
        <Navbar yOffset={yOffset} prev={prev} />
        <Header yOffset={yOffset} prev={prev} />
        <Header10 />
        {/* <Header3 yOffset={yOffset} prev={prev} /> */}
        {/* <Header4 yOffset={yOffset} prev={prev} /> */}
        <Header9 />
        <Header5 yOffset={yOffset} prev={prev} header5Ref={header5Ref} />
        <Header7 />
        <Header6 yOffset={yOffset} prev={prev} />
        <section
          ref={newRef}
          className="cursor-none  min-h-[100vh] w-screen  z-40 bg-secondary text-white"
          id="pricing"
        >
          <div className="cursor-none ss max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div className="cursor-none mx-auto mb-8 text-center lg:mb-12 w-full overflow-hidden">
              <h2
                className="cursor-none mb-4 font-extrabold tracking-tight uppercase  font-satoshi text-2xl md:text-5xl w-full revealI1"
                style={{ transform: "translateY(100px)" }}
                onMouseEnter={() => {
                  dispatch(setHovering(true));
                }}
                onMouseLeave={() => {
                  dispatch(setHovering(false));
                }}
              >
                Designed for business teams{" "}
                <span className="text-primary">like yours</span>
              </h2>
            </div>
            <div className="cursor-none px-10 justify-center text-secondary space-y-8 justify-items-center grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 z-40">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: [-100, 0] }}
                transition={{ duration: 1 }}
                style={
                  typeof window !== "undefined" &&
                  window.innerWidth > 1000 &&
                  newRef.current?.getBoundingClientRect().top <= 0
                    ? {
                        transform: `rotate(${
                          newRef.current?.getBoundingClientRect().top * 0.01
                        }deg)`,
                        transformStyle: "preserve-3d",
                      }
                    : {}
                }
                className="cursor-none  card origin-bottom-right  h-[550px] w-[300px] sm:w-[380px] flex"
              >
                <div className="cursor-none card__side card__side--front flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] sm:w-[380px]  w-inherit">
                  <div className="cursor-none  h-fit overflow-hidden">
                    <div className=" overflow-hidden">
                      <h3
                        className="cursor-none mb-4 font-satoshi font-extrabold text-3xl uppercase font-extrabold revealI2"
                        style={{ transform: "translateY(100px)" }}
                      >
                        Basic Plan
                      </h3>
                    </div>
                  </div>
                  <div className=" overflow-hidden">
                    <p
                      className="cursor-none font-light sm:text-lg revealI2"
                      style={{ transform: "translateY(100px)" }}
                    >
                      Best option for personal small and medium size projects.
                    </p>
                  </div>

                  <div className="cursor-none flex items-baseline justify-center my-8 overflow-hidden">
                    <span
                      className="cursor-none mr-2 text-5xl font-satoshi font-extrabold text-primary inline-block revealI2"
                      style={{ transform: "translateY(100px)" }}
                    >
                      $199
                    </span>
                  </div>
                  <ul
                    role="list"
                    className="cursor-none mb-8 space-y-4 text-left"
                  >
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>5-6 Pages</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Small Business, Portfolio</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Responsive Design and mobile optimization</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Embed photos, videos and music in your project
                      </span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>One language only</span>
                    </li>
                  </ul>
                  <div className="cursor-none  absolute bottom-0 right-0 flex gap-1 items-center hover:gap-2 transition-all duration-300   focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  ">
                    See All
                    <EastIcon />
                  </div>
                </div>
                <div className="cursor-none card__side card__side--back justify-between flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                  <ul
                    role="list"
                    className="cursor-none mb-8 space-y-4 text-left"
                  >
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Basic SEO and Google Analytics</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Lightweight design with Material UI</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Includes web hosting and domain (.com) for 1 year
                      </span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Includes email accounts setup</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Includes traning and support via email or call
                      </span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Go live within 1 week</span>
                    </li>
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
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [100, 0] }}
                transition={{ duration: 1 }}
                className="cursor-none  card  origin-bottom-right  h-[550px] w-[300px] sm:w-[380px]"
              >
                <div className="cursor-none card__side card__side--front flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                  <div className=" overflow-hidden">
                    <h3
                      className="cursor-none mb-4 font-satoshi font-extrabold text-3xl uppercase font-semibold revealI3"
                      style={{ transform: "translateY(100px)" }}
                    >
                      Advanced Plan
                    </h3>
                  </div>
                  <div className=" overflow-hidden">
                    <p
                      className="cursor-none font-light sm:text-lg revealI3"
                      style={{ transform: "translateY(100px)" }}
                    >
                      Best option for personal medium to large size projects.
                    </p>
                  </div>
                  <div className="cursor-none flex items-baseline justify-center my-8 overflow-hidden">
                    <span
                      className="cursor-none mr-2 text-5xl font-satoshi font-extrabold text-primary inline-block revealI3"
                      style={{ transform: "translateY(100px)" }}
                    >
                      $499
                    </span>
                  </div>
                  <ul
                    role="list"
                    className="cursor-none mb-8 space-y-4 text-left"
                  >
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>9-12 Pages</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Small Business, Portfolio, Blog</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Responsive Design and mobile optimization</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Embed photos, videos and music in your project
                      </span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Bilingual (2 languages)</span>
                    </li>
                  </ul>
                  <div className="cursor-none  absolute bottom-0 right-0 flex gap-1 items-center hover:gap-2 transition-all duration-300   focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  ">
                    See All
                    <EastIcon />
                  </div>
                </div>
                <div className="cursor-none card__side card__side--back justify-between flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                  <ul
                    role="list"
                    className="cursor-none mb-8 space-y-4 text-left"
                  >
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Basic SEO and Google Analytics</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Lightweight design with Material UI</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Includes web hosting and domain (.com) for 1 year
                      </span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Includes email accounts setup</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Includes traning and support via email or call
                      </span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Go live within 1 week</span>
                    </li>
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
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: [100, 0] }}
                transition={{ duration: 1 }}
                style={
                  typeof window !== "undefined" &&
                  window.innerWidth > 1000 &&
                  newRef.current?.getBoundingClientRect().top <= 0
                    ? {
                        transform: `rotate(${
                          -newRef.current?.getBoundingClientRect().top * 0.01
                        }deg)`,
                        transformStyle: "preserve-3d",
                      }
                    : {}
                }
                className="cursor-none  card  origin-bottom-left  h-[550px] w-[300px] sm:w-[380px]"
              >
                <div className="cursor-none card__side card__side--front flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                  <div className=" overflow-hidden">
                    <h3
                      className="cursor-none mb-4 font-satoshi font-extrabold text-3xl uppercase font-semibold revealI4"
                      style={{ transform: "translateY(100px)" }}
                    >
                      Pro Plan
                    </h3>
                  </div>
                  <div className=" overflow-hidden">
                    <p
                      className="cursor-none font-light sm:text-lg revealI4"
                      style={{ transform: "translateY(100px)" }}
                    >
                      Best option for large scale serious project
                    </p>
                  </div>
                  <div className="cursor-none flex items-baseline justify-center my-8 overflow-hidden">
                    <span
                      className="cursor-none mr-2 text-5xl font-satoshi font-extrabold text-primary inline-block revealI4"
                      style={{ transform: "translateY(100px)" }}
                    >
                      $999
                    </span>
                  </div>
                  <ul
                    role="list"
                    className="cursor-none mb-8 space-y-4 text-left"
                  >
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>15-50 Pages</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Blog, protfolio, eCatalogue</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Responsive Design and mobile optimization</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Embed photos, videos and music in your project
                      </span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Upto 4 languages</span>
                    </li>
                  </ul>
                  <div className="cursor-none  absolute bottom-0 right-0 flex gap-1 items-center hover:gap-2 transition-all duration-300   focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  ">
                    See All
                    <EastIcon />
                  </div>
                </div>
                <div className="cursor-none card__side card__side--back justify-between flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                  <ul
                    role="list"
                    className="cursor-none mb-8 space-y-4 text-left"
                  >
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Advanced SEO and Google Analytics</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Complex web designs using cutting edge tools</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Includes web hosting and domain (.com) for 1 year
                      </span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Includes email accounts setup</span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Includes traning and support via email or call or video
                        conference.
                      </span>
                    </li>
                    <li className="cursor-none flex items-center space-x-3">
                      <svg
                        className="cursor-none flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Go live within 2 week</span>
                    </li>
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
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#184e51"
              fill-opacity="1"
              d="M0,64L21.8,80C43.6,96,87,128,131,154.7C174.5,181,218,203,262,197.3C305.5,192,349,160,393,165.3C436.4,171,480,213,524,208C567.3,203,611,149,655,122.7C698.2,96,742,96,785,117.3C829.1,139,873,181,916,218.7C960,256,1004,288,1047,272C1090.9,256,1135,192,1178,170.7C1221.8,149,1265,171,1309,160C1352.7,149,1396,107,1418,85.3L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
            ></path>
          </svg>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

Home.getInitialProps = async (context) => {
  return {
    title: "ITXcelerate",
    image: "/logo-3.png",
    summery:
      "Delivering exceptional customer service and ensuring that our clients are satisfied with every aspect of our services. From our initial consultation to post-project support, we strive to provide a seamless and stress-free experience for our clients.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "",
  };
};
