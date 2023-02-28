import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className=" pb-32 leading-[1.9] font-[400] text-[#444444]">
            <div className=" bg-purple-500 h-[40vh] flex items-end">
                <h1 className=" text-5xl text-white mb-10 ml-10 uppercase">
                    About Us
                </h1>
            </div>
            <div className=" h-fit py-10 flex justify-center items-center px-10">
                <motion.div
                    initial={{ scale: 0.7, y: [0, 10] }}
                    whileInView={{ y: [0, 0], scale: 1 }}
                    transition={{ duration: 1 }}
                    className=" border border-black text-black rounded-tl-none rounded-br-none rounded-bl-[100px] rounded-tr-[100px] p-10 flex flex-col gap-4"
                >
                    <h2 className=" text-5xl font-semibold">OUR PURPOSE</h2>
                    <p className="text-lg ">
                        Delivering exceptional customer service and ensuring
                        that our clients are satisfied with every aspect of our
                        services. From our initial consultation to post-project
                        support, we strive to provide a seamless and stress-free
                        experience for our clients.
                    </p>
                </motion.div>
            </div>
            <div className=" h-fit px-10 min-h-screen flex flex-col gap-10">
                <div className=" relative h-fit w-fit flex items-center">
                    <img
                        src="/sample-5.jpg"
                        className="brightness-50 h-full w-[40%]"
                        alt=""
                    />
                    <div className="bg-gradient-to-r bg-white shadow-lg w-[50vw] p-10 text-black h-fit text-lg">
                        At IT Xcelerate, we take pride in our team of experts,
                        who are some of the most skilled and experienced
                        professionals in their respective fields. Our
                        developers, designers, and project managers are
                        passionate about technology and committed to delivering
                        solutions that make a positive impact on our
                        clients&apos; businesses.
                    </div>
                </div>
                <div className=" relative h-fit w-fit flex items-center">
                    <div className="bg-gradient-to-r bg-white shadow-lg w-[50vw] p-10 text-black h-fit text-lg">
                        Our journey began in 2022 when we identified a need for
                        a technology services company that could deliver
                        top-quality solutions to businesses across different
                        industries. Since then, we have grown to become a
                        trusted partner for our clients, offering a
                        comprehensive suite of services that includes web and
                        app development, UI/UX design, software engineering,
                        cloud computing, artificial intelligence, machine
                        learning, and more.
                    </div>
                    <img
                        src="/sample-5.jpg"
                        className="brightness-50 h-full w-[40%]"
                        alt=""
                    />
                </div>
                <div className=" relative h-fit w-fit flex items-center">
                    <img
                        src="/sample-5.jpg"
                        className="brightness-50 h-full w-[40%]"
                        alt=""
                    />
                    <div className="bg-gradient-to-r bg-white shadow-lg w-[50vw] p-10 text-black h-fit text-lg">
                        We also believe in delivering exceptional customer
                        service and ensuring that our clients are satisfied with
                        every aspect of our services. From our initial
                        consultation to post-project support, we strive to
                        provide a seamless and stress-free experience for our
                        clients.
                    </div>
                </div>
                <div className=" relative h-fit w-fit flex items-center">
                    <div className="bg-gradient-to-r bg-white shadow-lg w-[50vw] p-10 text-black h-fit text-lg">
                        We take a collaborative approach to project management,
                        working closely with our clients to develop solutions
                        that are tailored to their specific needs. Our team of
                        experts takes the time to understand our clients&apos;
                        business goals, challenges, and pain points to provide
                        solutions that meet their requirements and exceed their
                        expectations.
                    </div>
                    <img
                        src="/sample-5.jpg"
                        className="brightness-50 h-full w-[40%]"
                        alt=""
                    />
                </div>
                <div className=" relative h-fit w-fit flex items-center">
                    <img
                        src="/sample-5.jpg"
                        className="brightness-50 h-full w-[40%]"
                        alt=""
                    />
                    <div className="bg-gradient-to-r bg-white shadow-lg w-[50vw] p-10 text-black h-fit text-lg">
                        Our commitment to quality, attention to detail, and use
                        of the latest technologies and tools sets us apart from
                        our competitors. We are always learning and expanding
                        our knowledge base to ensure that we are up-to-date with
                        the latest technological advancements and industry
                        trends.
                    </div>
                </div>
                <div className=" relative h-fit w-fit flex items-center">
                    <div className="bg-gradient-to-r bg-white shadow-lg w-[50vw] p-10 text-black h-fit text-lg">
                        Our vision is to be the leading provider of technology
                        solutions for businesses across the globe. We are
                        passionate about technology and committed to delivering
                        solutions that make a positive impact on our
                        clients&apos; businesses.
                    </div>
                    <img
                        src="/sample-5.jpg"
                        className="brightness-50 h-full w-[40%]"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
