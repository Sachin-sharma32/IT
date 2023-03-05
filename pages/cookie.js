import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Smooth from "../utils/Smooth";

const Cookie = () => {
    return (
        <Smooth>
            <div className=" bg-gray-500 h-[40vh] flex items-end">
                <h1 className=" text-5xl text-white mb-10 ml-10 uppercase">
                    COOKIE POLICY
                </h1>
            </div>
            <button
                className=" bg-gray-500 text-white px-4 py-1 rounded-lg border-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-300 absolute top-[45vh] right-4"
                onClick={() => {
                    window.print();
                }}
            >
                PRINT
            </button>
            <div className="flex flex-col p-10 gap-8 leading-[1.9] font-[400] text-[#444444] mt-10">
                <div>
                    <h2 className=" text-2xl mb-2">What Are Cookies?</h2>
                    <p>
                        We Cookies are small text files that are stored on your
                        device when you visit our website. They allow us to
                        recognize your device and provide a personalized
                        experience for you. Cookies can be session cookies
                        (which expire when you close your browser) or persistent
                        cookies (which remain on your device until they expire
                        or are deleted).
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">How We Use Cookies</h2>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        To improve your browsing experience on our website
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        To remember your preferences and settings
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        To understand how you use our website and to improve our
                        services
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        To provide you with personalized content and advertising
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        We use both first-party and third-party cookies on our
                        website. First-party cookies are set by us, while
                        third-party cookies are set by third-party providers
                        that we work with.{" "}
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Types of Cookies We Use</h2>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        <span className=" font-bold">
                            Essential Cookies:
                        </span>{" "}
                        These cookies are necessary for the website to function
                        properly and cannot be turned off in our systems.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        <span className=" font-bold">
                            Functional Cookies:
                        </span>{" "}
                        These cookies allow us to remember your preferences and
                        settings.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        <span className=" font-bold">
                            Performance Cookies:
                        </span>{" "}
                        These cookies help us understand how you use our website
                        and how we can improve our services.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        <span className=" font-bold">
                            Targeting Cookies:
                        </span>{" "}
                        These cookies are used to deliver personalized content
                        and advertising to you based on your interests and
                        browsing history.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Managing Your Cookies</h2>
                    <p>
                        You can manage your cookies through your browser
                        settings. Most browsers allow you to refuse or accept
                        cookies, or to delete cookies that have already been
                        set. Please note that disabling cookies may limit your
                        ability to use certain features of our website.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Third-Party Cookies</h2>
                    <p className=" italic">
                        We use third-party cookies on our website for the
                        following purposes:
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        To analyze website traffic and usage.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        To provide personalized content and advertising.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">
                        Changes to This Cookie Policy
                    </h2>
                    <p>
                        We reserve the right to modify this Cookie Policy at any
                        time without prior notice. Your continued use of our
                        website after any changes to this Cookie Policy
                        constitutes your acceptance of the modified Cookie
                        Policy.
                    </p>
                </div>
                <div className=" bg-purple-100 border-l-8 rounded-lg border-purple-500 pl-10">
                    If you have any questions or concerns about this Cookie
                    Policy or our use of cookies, please contact us at{" "}
                    <span className="font-extrabold italic">
                        +91 6367212438
                    </span>
                    .
                </div>
                <div>
                    <h4>
                        <span className=" font-bold">Last Updated : </span>
                        March 1, 2023
                    </h4>
                </div>
            </div>
        </Smooth>
    );
};

export default Cookie;

Cookie.getInitialProps = async (context) => {
    return {
        title: "ITXcelerate - Cookie",
        image: "/logo-3.png",
        summery:
            "At IT Xcelerate, we are committed to providing you with the best possible browsing experience on our website. To achieve this, we use cookies and similar technologies. This Cookie Policy explains how we use cookies, what they are used for, and how you can manage them.",
        keywords:
            "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
        type: "website",
        imageAlt: "ITXclererate logo",
        parameter: "cookie",
    };
};
