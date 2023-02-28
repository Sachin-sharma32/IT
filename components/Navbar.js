import React, { useEffect, useRef, useState } from "react";
import { Link as Li } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import useOnScreen from "../utils/useOnScreen";

const Navbar = () => {
    const [active, setActive] = useState(0);
    const containerRef = useRef();

    const [yOffset, setYOffset] = useState(0);
    const [prev, setPrev] = useState(0);
    const newRef = useRef(null);
    const isOnScreen = useOnScreen(newRef);

    const handleScroll = () => {
        setYOffset(window.pageYOffset);
        yOffset !== undefined && setPrev(yOffset);
    };

    console.log(newRef.current?.getBoundingClientRect());

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [yOffset]);

    const sections = [
        { name: "HOME", id: "home" },
        { name: "FEATURES", id: "features" },
        { name: "ACHIEVEMENTS", id: "achievements" },
        { name: "TESTIMONIALS", id: "testimonials" },
        { name: "FAQs", id: "faqs" },
        { name: "PRICING", id: "pricing" },
    ];
    const handleContainer = () => {
        if (containerRef.current.classList.contains("-right-[300px]")) {
            containerRef.current.classList.remove("-right-[300px]");
            containerRef.current.classList.add("right-0");
        } else {
            containerRef.current.classList.remove("right-0");
            containerRef.current.classList.add("-right-[300px]");
        }
    };
    return (
        <nav
            style={
                yOffset > prev
                    ? { transform: `translateY(${-yOffset}px)` }
                    : { transform: `translateY(0px)` }
            }
            className={`border-gray-200 py-2.5 bg-black bg-opacity-30 backdrop-blur-lg z-50 fixed top-0 left-0 w-full transition-all duration-500`}
            ref={newRef}
        >
            <div
                ref={containerRef}
                className=" bg-gradient-to-r from-blue-100 to-green-100 transition-all duration-500 absolute top-14 -right-[300px] bg-white flex flex-col gap-4 p-4 rounded-lg"
            >
                {sections.map((section, i) => (
                    <li key={section.id} className="list-none">
                        <Li
                            activeClass="active"
                            to={section.id}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                            href={`#${section.id}`}
                            className={`${
                                active === i
                                    ? "lg:text-purple-700"
                                    : "text-black"
                            } block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent hover:text-black transition-all duration-300  lg:p-0 dark:text-white`}
                            aria-current="page"
                            onClick={() => {
                                handleContainer();
                                setActive(i);
                            }}
                        >
                            {section.name}
                        </Li>
                    </li>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <Link href="/" className=" absolute -top-18 left-4">
                    <img
                        src="/crop-logo-1.png"
                        className=" w-48"
                        alt="Landwind Logo"
                    />
                </Link>
                <div></div>
                <div className="flex items-center lg:order-2 gap-2">
                    <Link
                        href="/contact"
                        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                    >
                        CONNECT
                    </Link>
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                        onClick={handleContainer}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        {sections.map((section, i) => (
                            <li key={section.id}>
                                <Li
                                    activeClass="active"
                                    to={section.id}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    href={`#${section.id}`}
                                    className={`${
                                        active === i
                                            ? "lg:text-purple-700"
                                            : "text-black"
                                    } block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent hover:text-purple-700 transition-all duration-300  lg:p-0 dark:text-white`}
                                    aria-current="page"
                                    onClick={() => {
                                        setActive(i);
                                    }}
                                >
                                    {section.name}
                                </Li>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
