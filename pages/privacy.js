import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Smooth from "../utils/Smooth";

const Privacy = () => {
    return (
        <Smooth className="">
            <div className=" bg-blue-500 h-[40vh] flex items-end">
                <h1 className=" text-5xl text-white mb-10 ml-10 uppercase">
                    PRIVACY STATEMENT
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
                    <h2 className=" text-2xl mb-2">Information We Collect</h2>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" /> We
                        may collect personal information from you when you use
                        our website or our services. This information may
                        include your name, email address, phone number, and
                        other contact information. We may also collect
                        information about your use of our website, such as your
                        IP address, browser type, and browsing history.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        We collect your personal information to provide you with
                        our services, to communicate with you about our
                        services, and to improve our website and services. We do
                        not sell, rent, or lease your personal information to
                        third parties.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">
                        How We Use Your Information
                    </h2>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        We use your personal information to provide you with our
                        services and to communicate with you about our services.
                        We may also use your information to send you marketing
                        and promotional materials that we believe may be of
                        interest to you.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">
                        Links to Third-Party Websites
                    </h2>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        We use your personal information to provide you with our
                        services and to communicate with you about our services.
                        We may also use your information to send you marketing
                        and promotional materials that we believe may be of
                        interest to you.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        We may share your information with third-party service
                        providers who assist us in providing our services. These
                        providers are contractually obligated to maintain the
                        confidentiality and security of your information. We may
                        also disclose your information if required by law or if
                        we believe in good faith that such disclosure is
                        necessary to protect our rights or the safety of others.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Data Security</h2>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        We take appropriate measures to protect your personal
                        information from unauthorized access, use, or
                        disclosure. We use industry-standard security measures,
                        such as encryption and firewalls, to protect your
                        information. We also limit access to your personal
                        information to employees who have a need to know.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        No method of transmission over the internet or method of
                        electronic storage is 100% secure. Therefore, we cannot
                        guarantee the absolute security of your information.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">
                        Cookies and Other Tracking Technologies
                    </h2>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        We may use cookies and other tracking technologies to
                        collect information about your use of our website.
                        Cookies are small files that are stored on your device
                        when you visit our website. They allow us to recognize
                        your device and provide a personalized experience for
                        you.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        You can control the use of cookies through your browser
                        settings. However, please note that disabling cookies
                        may limit your ability to use certain features of our
                        website.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">
                        Links to Third-Party Websites
                    </h2>
                    <p>
                        Our website may contain links to third-party websites
                        that are not under our control. We are not responsible
                        for the content or privacy practices of any linked
                        websites. We encourage you to review the privacy
                        policies of any linked websites.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">
                        Changes to This Privacy Statement
                    </h2>
                    <p>
                        We reserve the right to modify this privacy statement at
                        any time without prior notice. Your continued use of our
                        website or our services after any changes to this
                        privacy statement constitutes your acceptance of the
                        modified privacy statement.
                    </p>
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

export default Privacy;


Privacy.getInitialProps = async (context) => {
    return {
        title: "ITXcelerate - Privacy",
        image: "/logo-3.png",
        summery:
        "At IT Xcelerate, we are committed to protecting your privacy and maintaining the confidentiality of your personal information. This privacy statement outlines how we collect, use, and protect your personal information when you visit our website or use our services.",
        keywords:
            "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
        type: "website",
        imageAlt: "ITXclererate logo",
        parameter: "privacy",
    };
};