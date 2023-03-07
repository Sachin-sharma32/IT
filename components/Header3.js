import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Header3 = ({ yOffset, prev }) => {
    const headingRef = useRef(null);
    console.log(headingRef.current?.getBoundingClientRect().top);
    useEffect(() => {
        if (headingRef.current?.getBoundingClientRect().top <= 500) {
            headingRef.current.classList.remove("translate-y-24");
        } else {
            headingRef.current.classList.add("translate-y-24");
        }
    }, [yOffset]);
    return (
        <div className="path z-40 px-10">
            <section
                className=" relative  z-40 px-10 bg-green-100 header-3 pt-20"
                id="features"
            >
                {/* <img
                src="/bg-1.jpg"
                className=" h-full w-full absolute top-0 left-0 z-0"
                alt=""
            /> */}
                <div className="max-w-screen-xl px-4 mx-auto space-y-12 lg:space-y-20 lg:px-4 z-20">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 z-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: [50, 0] }}
                            transition={{ duration: 1.5 }}
                            className="text-gray-500 sm:text-lg dark:text-gray-400"
                        >
                            <div className=" overflow-hidden">
                                <h2
                                    ref={headingRef}
                                    className="mb-4 transition-all duration-500 translate-y-24 text-xl sm:text-3xl px-4 sm:px-0 font-extrabold tracking-tight text-gray-900"
                                >
                                    Why choose IT Xcelerate for Web App
                                    Development ?
                                </h2>
                            </div>
                            {/* <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions. Accelerate
                            critical development work, eliminate toil, and
                            deploy changes with ease.
                        </p> */}
                            <ul
                                role="list"
                                className="pt-8 space-y-5 px-4 border-t border-gray-200 my-7 dark:border-gray-700"
                            >
                                <li className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-black">
                                        Experienced team of developers with
                                        expertise in the latest technologies.
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-black">
                                        Customized solutions tailored to meet
                                        specific business needs and
                                        requirements.
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-black">
                                        Strong focus on user experience and
                                        intuitive design.
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-black">
                                        Timely delivery and efficient project
                                        management.
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-black">
                                        Robust testing and quality assurance
                                        processes to ensure high-performance and
                                        reliability.
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-black">
                                        Transparent communication and regular
                                        updates throughout the development
                                        cycle.
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-black">
                                        Competitive pricing and flexible
                                        engagement models to suit diverse
                                        budgets and project scopes.
                                    </span>
                                </li>
                            </ul>
                            {/* <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions.
                        </p> */}
                        </motion.div>
                        <motion.img
                            whileInView={{ x: [200, 0] }}
                            transition={{ duration: 1 }}
                            exit={{ x: [0, 200] }}
                            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex arrow-img"
                            src="/image-1.jpg"
                            alt="dashboard feature image"
                        />
                    </div>
                </div>
            </section>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className=" pb-20 -translate-y-10"
            >
                <path
                    className=" fill-green-100"
                    fill-opacity="1"
                    d="M0,192L30,208C60,224,120,256,180,245.3C240,235,300,181,360,154.7C420,128,480,128,540,154.7C600,181,660,235,720,266.7C780,299,840,309,900,282.7C960,256,1020,192,1080,176C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
                ></path>
            </svg>
        </div>
    );
};

export default Header3;
