import React, { useEffect, useRef, useState } from "react";
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
import sendMail from "../utils/verifyEmail";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import Header7 from "../components/Header-7";
import { motion } from "framer-motion";

const Home = () => {
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

    return (
        <div className=" min-h-[100vh] flex justify-center items-center">
            <div className="flex flex-col">
                <div id="home"></div>
                <Navbar yOffset={yOffset} prev={prev} />
                <Header yOffset={yOffset} prev={prev} />
                <Header2 yOffset={yOffset} prev={prev} />
                <Header3 yOffset={yOffset} prev={prev} />
                <Header4 yOffset={yOffset} prev={prev} />
                <Header5
                    yOffset={yOffset}
                    prev={prev}
                    header5Ref={header5Ref}
                />
                <Header7 />
                <Header6 yOffset={yOffset} prev={prev} />
                <section
                    ref={newRef}
                    className=" min-h-[100vh]  overflow-hidden z-40 bg-gradient-to-tr from-blue-50 to-blue-100"
                    id="pricing"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#d9cdf6"
                            fill-opacity="1"
                            d="M0,192L30,208C60,224,120,256,180,245.3C240,235,300,181,360,154.7C420,128,480,128,540,154.7C600,181,660,235,720,266.7C780,299,840,309,900,282.7C960,256,1020,192,1080,176C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
                        ></path>
                    </svg>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                        <div
                            style={
                                isOnScreen &&
                                newRef.current?.getBoundingClientRect().top >= 0
                                    ? {
                                          transform: `translateY(${
                                              -newRef.current?.getBoundingClientRect()
                                                  .top * 1
                                          }px)`,
                                      }
                                    : {}
                            }
                            className="max-w-screen-md px-14 mx-auto mb-8 text-center lg:mb-12 "
                        >
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-black">
                                Designed for business teams like yours
                            </h2>
                            <p className=" mb-5 font-light text-black sm:text-xl ">
                                Here at ITXcelerate we focus on markets where
                                technology, innovation, and capital can unlock
                                long-term value and drive economic growth.
                            </p>
                        </div>
                        <div className="space-y-8 justify-items-center grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 z-40">
                            <motion.div
                                style={
                                    typeof window !== "undefined" &&
                                    window.innerWidth > 1000 &&
                                    newRef.current?.getBoundingClientRect()
                                        .top <= 0
                                        ? {
                                              transform: `rotate(${
                                                  newRef.current?.getBoundingClientRect()
                                                      .top * 0.01
                                              }deg)`,
                                              transformStyle: "preserve-3d",
                                          }
                                        : {}
                                }
                                className=" card  origin-bottom-right text-gray-900 h-[550px] w-[300px] sm:w-[380px] flex"
                            >
                                <div className="card__side card__side--front flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] sm:w-[380px]  w-inherit">
                                    <h3 className="mb-4 text-2xl font-semibold">
                                        Basic Plan
                                    </h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                        Best option for personal small and
                                        medium size projects.
                                    </p>
                                    <div className="flex items-baseline justify-center my-8">
                                        <span className="mr-2 text-5xl font-extrabold">
                                            $199
                                        </span>
                                        {/* <span className="text-gray-500 dark:text-gray-400">
                                            month
                                        </span> */}
                                    </div>
                                    <ul
                                        role="list"
                                        className="mb-8 space-y-4 text-left"
                                    >
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Small Business, Portfolio
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Responsive Design and mobile
                                                optimization
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Embed photos, videos and music
                                                in your project
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                    <div className=" absolute bottom-0 right-0 flex gap-1 items-center hover:gap-2 transition-all duration-300  text-purple-500 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  dark:focus:ring-purple-900">
                                        See All
                                        <EastIcon />
                                    </div>
                                </div>
                                <div className="card__side card__side--back justify-between flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                                    <ul
                                        role="list"
                                        className="mb-8 space-y-4 text-left"
                                    >
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Basic SEO and Google Analytics
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Lightweight design with Material
                                                UI
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Includes web hosting and domain
                                                (.com) for 1 year
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Includes email accounts setup
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Includes traning and support via
                                                email or call
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                        className=" text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                                    >
                                        Let&apos;s Talk
                                    </Link>
                                </div>
                            </motion.div>
                            <div className=" card  origin-bottom-right text-gray-900 h-[550px] w-[300px] sm:w-[380px]">
                                <div className="card__side card__side--front flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                                    <h3 className="mb-4 text-2xl font-semibold">
                                        Advanced Plan
                                    </h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                        Best option for medium to large size
                                        projects.
                                    </p>
                                    <div className="flex items-baseline justify-center my-8">
                                        <span className="mr-2 text-5xl font-extrabold">
                                            $499
                                        </span>
                                        {/* <span className="text-gray-500 dark:text-gray-400">
                                            month
                                        </span> */}
                                    </div>
                                    <ul
                                        role="list"
                                        className="mb-8 space-y-4 text-left"
                                    >
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Small Business, Portfolio, Blog
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Responsive Design and mobile
                                                optimization
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Embed photos, videos and music
                                                in your project
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                    <div className=" absolute bottom-0 right-0 flex gap-1 items-center hover:gap-2 transition-all duration-300  text-purple-500 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  dark:focus:ring-purple-900">
                                        See All
                                        <EastIcon />
                                    </div>
                                </div>
                                <div className="card__side card__side--back justify-between flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                                    <ul
                                        role="list"
                                        className="mb-8 space-y-4 text-left"
                                    >
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Basic SEO and Google Analytics
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Lightweight design with Material
                                                UI
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Includes web hosting and domain
                                                (.com) for 1 year
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Includes email accounts setup
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Includes traning and support via
                                                email or call
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                        className=" text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                                    >
                                        Let&apos;s Talk
                                    </Link>
                                </div>
                            </div>
                            <div
                                style={
                                    typeof window !== "undefined" &&
                                    window.innerWidth > 1000 &&
                                    newRef.current?.getBoundingClientRect()
                                        .top <= 0
                                        ? {
                                              transform: `rotate(${
                                                  -newRef.current?.getBoundingClientRect()
                                                      .top * 0.01
                                              }deg)`,
                                              transformStyle: "preserve-3d",
                                          }
                                        : {}
                                }
                                className=" card  origin-bottom-left text-gray-900 h-[550px] w-[300px] sm:w-[380px]"
                            >
                                <div className="card__side card__side--front flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                                    <h3 className="mb-4 text-2xl font-semibold">
                                        Pro Plan
                                    </h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                        Best option for large scale serious
                                        product.
                                    </p>
                                    <div className="flex items-baseline justify-center my-8">
                                        <span className="mr-2 text-5xl font-extrabold">
                                            $999
                                        </span>
                                        {/* <span className="text-gray-500 dark:text-gray-400">
                                            month
                                        </span> */}
                                    </div>
                                    <ul
                                        role="list"
                                        className="mb-8 space-y-4 text-left"
                                    >
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Blog, protfolio, eCatalogue
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Responsive Design and mobile
                                                optimization
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Embed photos, videos and music
                                                in your project
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                    <div className=" absolute bottom-0 right-0 flex gap-1 items-center hover:gap-2 transition-all duration-300  text-purple-500 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:  dark:focus:ring-purple-900">
                                        See All
                                        <EastIcon />
                                    </div>
                                </div>
                                <div className="card__side card__side--back justify-between flex flex-col max-w-lg p-6 mx-auto text-center xl:p-8 bg-white shadow-xl rounded-lg h-[550px] w-inherit">
                                    <ul
                                        role="list"
                                        className="mb-8 space-y-4 text-left"
                                    >
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Advanced SEO and Google
                                                Analytics
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Complex web designs using
                                                cutting edge tools
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Includes web hosting and domain
                                                (.com) for 1 year
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Includes email accounts setup
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                                Includes traning and support via
                                                email or call or video
                                                conference.
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                                        className=" w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                                    >
                                        Let&apos;s Talk
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#282828"
                            fill-opacity="1"
                            d="M0,192L30,208C60,224,120,256,180,245.3C240,235,300,181,360,154.7C420,128,480,128,540,154.7C600,181,660,235,720,266.7C780,299,840,309,900,282.7C960,256,1020,192,1080,176C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
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
