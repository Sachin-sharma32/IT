import Link from "next/link";
import React, { useEffect, useRef } from "react";
import sendMail from "../utils/verifyEmail";
import axios from "axios";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Header = ({ yOffset, prev }) => {
    const ref = useRef(null);
    // const videoRef = useRef(null);
    // useEffect(() => {
    //     videoRef.current.playbackRate = ".9";
    // }, []);

    return (
        <section
            ref={ref}
            className={`${
                yOffset < 1000 ? "" : "opacity-0"
            } bg-gradient-to-b from-blue-200 to-green-200 min-h-screen fixed left-0 top-0 z-10 w-screen text-white bg-inherit`}
        >
            <motion.div
                initial={{ y: [100, 0], opacity: 0 }}
                whileInView={{ y: [0, 0], opacity: 1 }}
                className="flex justify-center items-center h-screen w-full sm:p-20 p-6 z-10 relative"
            >
                {/* <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className=" brightness-50 absolute w-full min-h-[1000px]"
                >
                    <source src="/video-1.mp4" type="video/mp4" />
                </video> */}
                <img
                    src="/bs-9.jpg"
                    className={`absolute w-full min-h-[1000px] brightness-50`}
                    style={{ transform: `scale(${yOffset * 0.05 + 100}%)` }}
                    alt=""
                />
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1
                        style={{ transform: `translateY(-${yOffset * 0.5}px)` }}
                        className=" mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white z-50 "
                    >
                        <span className="text-purple-500">Accelerating</span>{" "}
                        your digital <br />
                        <span>
                            <Typewriter
                                options={{
                                    strings: ["success."],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 2500,
                                }}
                                className="text-white z-50"
                            />
                        </span>
                    </h1>

                    {/* <div
                        className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 z-0"
                        style={{ transform: `translateY(${yOffset}px)` }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center  border rounded-lg sm:w-auto focus:ring-4  text-white border-gray-700 bg-purple-700 focus:ring-gray-800 z-0"
                        >
                            CONNECT
                        </Link>
                    </div> */}
                </div>
                {/* <div
                    className="hidden lg:mt-0 lg:col-span-5 lg:flex w-[50%]"
                    style={{ transform: `translateX(${yOffset * 2}px)` }}
                >
                    <img src="/svg-9.svg" alt="hero image" />
                </div> */}
            </motion.div>
        </section>
    );
};

export default Header;
