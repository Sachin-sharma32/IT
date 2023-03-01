import React from "react";
import { motion } from "framer-motion";

const Header3 = ({ yOffset, prev }) => {
    return (
        <section className="  z-40 px-10 bg-[#ffffff] path pb-32" id="features">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: [50, 0] }}
                        transition={{ duration: 1.5 }}
                        className="text-gray-500 sm:text-lg dark:text-gray-400"
                    >
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-black">
                            Work with tools you already use
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions. Accelerate
                            critical development work, eliminate toil, and
                            deploy changes with ease.
                        </p>
                        <ul
                            role="list"
                            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
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
                                    Continuous integration and deployment
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
                                    Development workflow
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
                                    Knowledge management
                                </span>
                            </li>
                        </ul>
                        <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions.
                        </p>
                    </motion.div>
                    <motion.img
                        whileInView={{ x: [200, 0] }}
                        transition={{ duration: 1 }}
                        exit={{ x: [0, 200] }}
                        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                        src="/image-1.jpg"
                        alt="dashboard feature image"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [50, 0] }}
                    transition={{ duration: 1.5 }}
                    className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
                >
                    <motion.img
                        whileInView={{ x: [-200, 0] }}
                        transition={{ duration: 1 }}
                        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                        src="/image-2.jpg"
                        alt="feature image 2"
                    />
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-black">
                            We invest in the world’s potential
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions. Accelerate
                            critical development work, eliminate toil, and
                            deploy changes with ease.
                        </p>
                        <ul
                            role="list"
                            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
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
                                    Dynamic reports and dashboards
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
                                    Templates for everyone
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
                                    Development workflow
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
                                    Limitless business automation
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
                                    Knowledge management
                                </span>
                            </li>
                        </ul>
                        <p className="font-light lg:text-xl">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Header3;
