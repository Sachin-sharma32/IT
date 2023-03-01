import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Invest = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        headerRef.current.classList.remove("translate-y-52");
        headerRef.current.classList.add("translate-y-0");
    }, []);
    return (
        <div>
            <div className="h-screen invest flex items-center justify-center">
                <div className=" overflow-hidden">
                    <motion.h1
                        ref={headerRef}
                        className=" text-5xl font-extrabold text-white translate-y-52 transition-all duration-1000"
                    >
                        INVEST <br /> IN <br />{" "}
                        <span className="text-purple-500">ITXcelerate</span>
                    </motion.h1>
                </div>
            </div>
            <div className=" pt-10">
                <div className=" h-fit py-10 flex justify-center items-center px-10">
                    <motion.div
                        initial={{ scale: 0.7, y: [0, 10] }}
                        whileInView={{ y: [0, 0], scale: 1 }}
                        transition={{ duration: 1 }}
                        className=" border-2 border-purple-500 text-black rounded-tl-none rounded-br-none rounded-bl-[100px] rounded-tr-[100px] p-10 flex flex-col gap-4"
                    >
                        <h2 className=" text-5xl font-semibold">
                            THANK YOU FOR SHOWING YOU INTEREST
                        </h2>
                        <p className="text-lg ">
                            As a leading IT services company, we are committed
                            to delivering innovative and reliable solutions to
                            businesses across various industries. Our mission is
                            to help our clients accelerate their growth and
                            achieve their business objectives through
                            technology, and we believe that our strong business
                            model, experienced leadership team, and commitment
                            to environmental, social, and governance practices
                            make us a compelling investment opportunity.
                        </p>
                    </motion.div>
                </div>
            </div>
            <div>
                <div className="flex flex-col p-10 gap-8 leading-[1.9] font-[400] text-[#444444] mt-10">
                    <div>
                        <h2 className=" text-2xl mb-4 font-extrabold">
                            Why Invest in IT Xcelerate?
                        </h2>
                        <p>
                            <KeyboardArrowRightIcon className=" text-blue-500" />{" "}
                            <span className=" font-bold">
                                Innovative Solutions:{" "}
                            </span>{" "}
                            Our team of experienced developers and designers are
                            constantly pushing the boundaries of technology to
                            deliver innovative and efficient solutions for our
                            clients. We leverage cutting-edge tools and
                            technologies to build custom software, mobile
                            applications, web development, and cloud-based
                            solutions that help our clients streamline their
                            operations, improve their customer experience, and
                            increase their revenue.
                        </p>
                        <p>
                            <KeyboardArrowRightIcon className=" text-blue-500" />{" "}
                            <span className=" font-bold">
                                Experienced Leadership Team:{" "}
                            </span>{" "}
                            Our leadership team has a wealth of experience in
                            the IT industry and has successfully built and
                            scaled several technology companies. They have a
                            deep understanding of the industry landscape and are
                            committed to driving growth and profitability for
                            our business. Our executive team has a proven track
                            record of managing complex projects, nurturing
                            long-term client relationships, and creating a
                            culture of innovation and excellence.
                        </p>
                        <p>
                            <KeyboardArrowRightIcon className=" text-blue-500" />{" "}
                            <span className=" font-bold">
                                Diversified Client Base:{" "}
                            </span>{" "}
                            We serve clients across various industries,
                            including healthcare, finance, retail, education,
                            and manufacturing. This diversified client base
                            provides us with a steady and diversified revenue
                            stream, reducing our dependence on any one client or
                            industry. Our client relationships are built on
                            trust, transparency, and accountability, and we
                            strive to deliver exceptional value to our clients
                            with every engagement.
                        </p>
                        <p>
                            <KeyboardArrowRightIcon className=" text-blue-500" />{" "}
                            <span className=" font-bold">
                                Commitment to ESG:{" "}
                            </span>{" "}
                            We believe that environmental, social, and
                            governance practices are critical to creating
                            long-term value for our stakeholders. We are
                            committed to operating our business in a sustainable
                            and responsible manner and continuously seek to
                            improve our ESG performance. We strive to minimize
                            our environmental footprint, promote diversity and
                            inclusion, and maintain the highest standards of
                            corporate governance.
                        </p>
                    </div>
                    <div>
                        <h2 className=" text-2xl mb-4 font-extrabold">
                            How We Use Your Information
                        </h2>
                        <p>
                            <KeyboardArrowRightIcon className=" text-blue-500" />{" "}
                            <span className=" font-bold">Seed Funding: </span>{" "}
                            We welcome investments from angel investors and
                            venture capitalists who share our vision and
                            mission. We offer several investment options,
                            including equity and convertible debt, and work
                            closely with our investors to ensure a smooth and
                            transparent investment process.
                        </p>
                        <p>
                            <KeyboardArrowRightIcon className=" text-blue-500" />{" "}
                            <span className=" font-bold">Croudfunding: </span>{" "}
                            You can also invest in IT Xcelerate through
                            crowdfunding platforms that allow you to buy shares
                            in a startup. This option provides a convenient and
                            accessible way for retail investors to participate
                            in our growth story.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" z-0">
                <div className=" h-fit py-10 flex justify-center items-center px-10">
                    <motion.div
                        whileInView={{ x: [100, 0], scale: 1 }}
                        transition={{ duration: 1 }}
                        className=" border-2 border-purple-500 text-black rounded-tl-[100px] rounded-br-[100px] rounded-bl-none rounded-tr-none p-10 flex flex-col gap-4"
                    >
                        <p className="text-lg ">
                            We believe that investing in IT Xcelerate is an
                            opportunity to be part of a dynamic and growing IT
                            services company that is dedicated to creating
                            long-term value for its stakeholders. We are
                            committed to maintaining open and transparent
                            communication with our investors and providing
                            regular updates on our financial performance,
                            strategic initiatives, and other material
                            developments that may impact our business. We
                            welcome feedback and input from our investors and
                            are committed to addressing any questions or
                            concerns in a timely and effective manner.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Invest;
