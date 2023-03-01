import Link from "next/link";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    return (
        <footer className=" z-50 bg-[#282828] text-white">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 z-50">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 justify-items-center z-50">
                    <div>
                        <h3 className="mb-6 text-sm font-semibold  uppercase">
                            Company
                        </h3>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <Link
                                    href="/about"
                                    className=" hover:underline"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    href="/careers"
                                    className="hover:underline"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/esg" className="hover:underline">
                                    ESG
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/blog" className="hover:underline">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold  uppercase dark:">
                            Help center
                        </h3>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Discord Server
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Twitter
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Facebook
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold  uppercase dark:">
                            Legal
                        </h3>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <Link
                                    href="/privacy"
                                    className="hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    href="/trademarks"
                                    className="hover:underline"
                                >
                                    Trademarks
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/terms" className="hover:underline">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="text-center flex flex-col justify-center">
                    <Link
                        href="#"
                        className=" overflow-hidden h-10 flex items-center justify-center mb-10 text-2xl font-semibold text-gray-900 dark: relative"
                    >
                        <img
                            src="./crop-logo-1.png"
                            className="w-64 absolute"
                            alt="Landwind Logo"
                        />
                    </Link>
                    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2023 ITXcelerate™. All Rights Reserved.
                    </span>
                    <ul className="flex justify-center mt-5 space-x-5">
                        <li>
                            <a
                                href="https://t.me/+RveSAODvj0hjYTZl"
                                className="text-gray-500 hover:text-gray-500 dark:hover: dark:text-gray-400"
                            >
                                <TelegramIcon className=" hover:text-inherit" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/it_xccelerate?igshid=YmMyMTA2M2Y="
                                className="text-gray-500 hover:text-gray-500 dark:hover: dark:text-gray-400"
                            >
                                <InstagramIcon className=" hover:text-inherit" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/itxccelerate/status/1630569929710899201?s=46&t=CkXjIjsjO4tMLkygtRHk_A"
                                className="text-gray-500 hover:text-gray-500 dark:hover: dark:text-gray-400"
                            >
                                <LinkedInIcon className=" hover:text-inherit" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/itxccelerate/status/1630569929710899201?s=46&t=CkXjIjsjO4tMLkygtRHk_A"
                                className="text-gray-500 hover:text-gray-500 dark:hover: dark:text-gray-400"
                            >
                                <TwitterIcon className=" hover:text-inherit" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
