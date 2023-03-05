import React, { useEffect, useRef, useState } from "react";
import { Link as Li } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import useOnScreen from "../utils/useOnScreen";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);
    const containerRef = useRef();

    const router = useRouter();
    console.log(router.pathname);

    const [yOffset, setYOffset] = useState(0);
    const [prev, setPrev] = useState(0);
    const newRef = useRef(null);
    const isOnScreen = useOnScreen(newRef);

    const handleScroll = () => {
        setYOffset(window.pageYOffset);
        yOffset !== undefined && setPrev(yOffset);
    };

    console.log(newRef.current?.getBoundingClientRect().y);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [yOffset]);

    const popupRef = useRef(null);

    const sections = [
        { name: "HOME", id: "home" },
        { name: "FEATURES", id: "features" },
        { name: "TECHNOLOGIES", id: "achievements" },
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

    const toggleShow = () => {
        setActive((curr) => !curr);
        if (popupRef.current.classList.contains("-translate-y-[100vh]")) {
            popupRef.current.classList.remove("-translate-y-[100vh]");
        } else {
            popupRef.current.classList.add("-translate-y-[100vh]");
        }
    };

    return (
        <div className=" relative z-50">
            <nav
                style={
                    yOffset > prev
                        ? { transform: `translateY(${-yOffset * 10}px)` }
                        : { transform: `translateY(0px)` }
                }
                className={`
                  bg-white h-16 border-gray-200 fixed top-0 left-0 w-full transition-all duration-500 border-b `}
                ref={newRef}
            >
                <div className=" h-full relative">
                    <div
                        ref={containerRef}
                        className=" transition-all duration-500 absolute top-16 -right-[300px] bg-white flex flex-col gap-4 p-4 rounded-lg"
                    >
                        {sections.map((section, i) => (
                            <li
                                key={section.id}
                                className="list-none link transition-all duration-500 px-2 py-1"
                            >
                                <Li
                                    activeClass="active"
                                    to={section.id}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    href={`#${section.id}`}
                                    className=""
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
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto h-full overflow-hidden bg-white">
                        <Link href="/" className="h-[20px] bg-white z-50">
                            <img
                                src="/logo-2.png"
                                className=" w-48  absolute -top-[67px] left-4 z-50"
                                alt="ITXcelerate logo"
                            />
                        </Link>
                        <div></div>
                        <div className="flex items-center lg:order-2 gap-2 bg-white">
                            <Link
                                href="/contact"
                                className=" z-50 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                            >
                                Let&apos;s Talk
                            </Link>
                            {router.pathname === "/" && (
                                <button
                                    data-collapse-toggle="mobile-menu-2"
                                    type="button"
                                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="mobile-menu-2"
                                    aria-expanded="false"
                                    onClick={handleContainer}
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
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
                            )}
                        </div>
                        <div
                            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 z-50 h-full bg-white"
                            id="mobile-menu-2"
                        >
                            {router.pathname === "/" && (
                                <ul className="flex mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 h-full">
                                    {sections.map((section, i) => (
                                        <li
                                            key={section.id}
                                            className=" h-[100%]  flex items-center"
                                        >
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
                                                } block py-2 pl-3 pr-4  bg-purple-700 rounded lg:bg-transparent hover:text-purple-700 transition-all duration-300  lg:p-0 dark:`}
                                                aria-current="page"
                                                onClick={() => {
                                                    setActive(i);
                                                }}
                                            >
                                                {section.name}
                                            </Li>
                                        </li>
                                    ))}
                                    <li
                                        className={`${
                                            active
                                                ? "border-purple-500"
                                                : "border-purple-100"
                                        } bg-purple-100 px-4 border-b-4 hover:border-purple-500 transition-all duration-300`}
                                    >
                                        <button
                                            className="lg:text-purple-700 pl-3  font-bold h-full  pr-4 rounded lg:bg-transparent hover:text-purple-700 transition-all duration-300  lg:p-0"
                                            onClick={toggleShow}
                                        >
                                            <div className="">RESOURCES</div>
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div
                        ref={popupRef}
                        className=" h-[50vh] z-40 -translate-y-[100vh] gap-4 transition-all duration-500 absolute top-16 w-[100%] bg-white overflow-hidden"
                    >
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 justify-items-center z-50 h-full">
                            <div className=" col-span-2">
                                <img
                                    src="/bs-5.jpg"
                                    className=" h-full w- col-span-3"
                                    alt=""
                                />
                            </div>
                            <div className=" py-6 w-full">
                                <h3 className="mb-6 text-sm font-semibold  uppercase pl-2">
                                    Company
                                </h3>
                                <ul className="text-gray-500 dark:text-gray-400">
                                    <li className="mb-4 w-[500px]">
                                        <Link
                                            href="/next"
                                            className="link transition-all duration-500 px-2 py-1 w-[500px]"
                                        >
                                            Navigate Your Next
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/about"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/careers"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/esg"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            ESG
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/invest"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Invest
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/blog"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className=" py-6 w-full">
                                <h3 className="mb-6 text-sm font-semibold  uppercase dark: pl-2">
                                    Help center
                                </h3>
                                <ul className="text-gray-500 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a
                                            href="https://t.me/+RveSAODvj0hjYTZl"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Discord Server
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="https://twitter.com/itxccelerate/status/1630569929710899201?s=46&t=CkXjIjsjO4tMLkygtRHk_A"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Twitter
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="https://instagram.com/it_xccelerate?igshid=YmMyMTA2M2Y="
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Instagram
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="https://t.me/+RveSAODvj0hjYTZl"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Instagram
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="https://t.me/+RveSAODvj0hjYTZl"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Linkedin
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/connect"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className=" py-6 w-full pr-4">
                                <h3 className="mb-6 text-sm font-semibold  uppercase dark: pl-2">
                                    Legal
                                </h3>
                                <ul className="text-gray-500 dark:text-gray-400">
                                    <li className="mb-4">
                                        <Link
                                            href="/privacy"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mb-4 w-[400px]">
                                        <Link
                                            href="/trademarks"
                                            className="link transition-all duration-500 px-2 py-1 w-[400px]"
                                        >
                                            Trademarks
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/terms"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Terms
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/cookie"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Cookie Policy
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/slaveryStatement"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Slavery Statement
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href="/paymentGuide"
                                            className="link transition-all duration-500 px-2 py-1"
                                        >
                                            Payment Guide
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <CloseIcon
                            className=" absolute top-4 right-10 text-purple-500 cursor-pointer"
                            onClick={toggleShow}
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
