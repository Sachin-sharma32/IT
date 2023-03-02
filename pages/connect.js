import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Connect = () => {
    return (
        <div>
            <div className=" bg-blue-500 h-[40vh] flex items-end">
                <h1 className=" text-5xl text-white mb-10 ml-10 uppercase">
                    CONTACT US
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
                    <p className=" text-xl font-semibold bg-purple-200 pl-10 p-2 border-l-8 border-purple-500 rounded-lg">
                        Thank you for your interest in IT Xcelerate. We are
                        always here to help you with your web development and
                        app development needs. If you have any questions,
                        comments, or concerns, please don&apos;t hesitate to
                        reach out to us using the contact information provided
                        below.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        You can contact us by phone, email, or through the
                        contact form on our website. Our friendly and
                        knowledgeable team is available to assist you with any
                        inquiries you may have.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        If you&apos;re interested in learning more about our web
                        development and app development services, we would love
                        to hear from you. We offer a wide range of services to
                        businesses of all sizes, and we&apos;re confident that
                        we can provide you with the solutions you need to
                        succeed.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        Additionally, if you&apos;re interested in joining our
                        team, we welcome you to reach out to us through our
                        careers page or by contacting us directly. We&apos;re
                        always looking for talented individuals who share our
                        passion for innovation and excellence.
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        Thank you again for considering IT Xcelerate as your web
                        and app development partner. We look forward to hearing
                        from you soon.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Connect;

Connect.getInitialProps = async (context) => {
    return {
        title: "ITXcelerate - Connect",
        image: "/logo-3.png",
        summery:
            "We are always here to help you with your web development and app development needs. If you have any questions, comments, or concerns, please don't hesitate to reach out to us using the contact information provided below.",
        keywords:
            "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
        type: "website",
        imageAlt: "ITXclererate logo",
        parameter: "connect",
    };
};
