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
                <Header6 yOffset={yOffset} prev={prev} />
                <section
                    ref={newRef}
                    className=" h-full  overflow-hidden  z-40 bg-black px-10"
                    id="pricing"
                >
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
                            className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12 text-white"
                        >
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight">
                                Designed for business teams like yours
                            </h2>
                            <p className=" mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                Here at Landwind we focus on markets where
                                technology, innovation, and capital can unlock
                                long-term value and drive economic growth.
                            </p>
                        </div>
                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 z-40 ">
                            <div
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
                                className=" origin-bottom-right flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
                            >
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Starter
                                </h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                    Best option for personal use & for your next
                                    project.
                                </p>
                                <div className="flex items-baseline justify-center my-8">
                                    <span className="mr-2 text-5xl font-extrabold">
                                        $29
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400">
                                        month
                                    </span>
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
                                        <span>Individual configuration</span>
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
                                        <span>No setup, or hidden fees</span>
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
                                            Team size:{" "}
                                            <span className="font-semibold">
                                                1 developer
                                            </span>
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
                                            Premium support:{" "}
                                            <span className="font-semibold">
                                                6 months
                                            </span>
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
                                            Free updates:{" "}
                                            <span className="font-semibold">
                                                6 months
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                                >
                                    Get started
                                </a>
                            </div>
                            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Company
                                </h3>
                                <p className="font-light text-gray-500 sm:text-lg ">
                                    Relevant for multiple users, extended &
                                    premium support.
                                </p>
                                <div className="flex items-baseline justify-center my-8">
                                    <span className="mr-2 text-5xl font-extrabold">
                                        $99
                                    </span>
                                    <span className="text-gray-500">month</span>
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
                                        <span>Individual configuration</span>
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
                                        <span>No setup, or hidden fees</span>
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
                                            Team size:{" "}
                                            <span className="font-semibold">
                                                10 developers
                                            </span>
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
                                            Premium support:{" "}
                                            <span className="font-semibold">
                                                24 months
                                            </span>
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
                                            Free updates:{" "}
                                            <span className="font-semibold">
                                                24 months
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                                >
                                    Get started
                                </a>
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
                                className=" origin-bottom-left flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
                            >
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Enterprise
                                </h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                    Best for large scale uses and extended
                                    redistribution rights.
                                </p>
                                <div className="flex items-baseline justify-center my-8">
                                    <span className="mr-2 text-5xl font-extrabold">
                                        $499
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400">
                                        /month
                                    </span>
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
                                        <span>Individual configuration</span>
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
                                        <span>No setup, or hidden fees</span>
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
                                            Team size:{" "}
                                            <span className="font-semibold">
                                                100+ developers
                                            </span>
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
                                            Premium support:{" "}
                                            <span className="font-semibold">
                                                36 months
                                            </span>
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
                                            Free updates:{" "}
                                            <span className="font-semibold">
                                                36 months
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                                >
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
