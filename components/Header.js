import Link from "next/link";
import React, { useEffect, useRef } from "react";
import sendMail from "../utils/verifyEmail";
import axios from "axios";

const Header = ({ yOffset, prev }) => {
    const ref = useRef(null);
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.playbackRate = ".9";
    }, []);

    return (
        <section
            ref={ref}
            className={`bg-gradient-to-b from-blue-200 to-green-200 min-h-screen fixed left-0 top-0 z-10 h-screen w-screen text-white`}
        >
            <div className="flex justify-center items-center h-full w-full sm:p-20 p-6 z-10 relative">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className=" brightness-50 absolute w-full min-h-[1000px]"
                >
                    <source src="/video-2.mp4" type="video/mp4" />
                </video>
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1
                        style={{ transform: `translateY(${-yOffset}px)` }}
                        className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
                    >
                        Accelerating your <br />
                        digital success.
                    </h1>
                    <p
                        style={{ transform: `translateY(${yOffset}px)` }}
                        className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl"
                    >
                        IT Xcelerate is a leading provider of technology
                        solutions for businesses of all sizes. Our mission is to
                        help our clients leverage the power of technology to
                        achieve their goals and succeed in the digital age.
                    </p>
                    <div
                        className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 z-0"
                        style={{ transform: `translateY(${yOffset}px)` }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center  border rounded-lg sm:w-auto focus:ring-4  text-white border-gray-700 bg-purple-700 focus:ring-gray-800 z-0"
                        >
                            CONNECT
                        </Link>
                    </div>
                </div>
                <div
                    className="hidden lg:mt-0 lg:col-span-5 lg:flex w-[50%]"
                    style={{ transform: `translateX(${yOffset * 2}px)` }}
                >
                    <img src="/svg-9.svg" alt="hero image" />
                </div>
            </div>
        </section>
    );
};

export default Header;
