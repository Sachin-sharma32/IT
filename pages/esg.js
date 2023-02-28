import React from "react";
import { motion } from "framer-motion";

const Esg = () => {
    return (
        <div className="min-h-screen flex flex-col gap-20 pb-20">
            <div className=" h-screen flex relative">
                <img
                    src="/esg-1.jpg"
                    alt=""
                    className=" brightness-75 w-[33%]"
                />
                <img
                    src="/esg-2.jpg"
                    alt=""
                    className=" brightness-75 w-[33%]"
                />
                <img src="/esg-3.jpg" alt="" className=" brightness-75" />
                <h1 className="absolute top-1/2  left-10 text-5xl w-[50%] text-white -translate-y-1/2 leading-[1.4]">
                    Building a equitable and sustainable digital future.
                </h1>
            </div>
            <div className=" h-fit py-10 flex justify-center items-center px-10">
                <motion.div
                    initial={{ scale: 0.7, y: [0, 10] }}
                    whileInView={{ y: [0, 0], scale: 1 }}
                    transition={{ duration: 1 }}
                    className=" border-2 border-purple-200 text-black rounded-tl-none rounded-br-none rounded-bl-[100px] rounded-tr-[100px] p-10 flex flex-col gap-4"
                >
                    <h2 className=" text-5xl font-semibold">OUR PURPOSE</h2>
                    <p className="text-lg ">
                        We&apos;re committed to making a positive impact on the
                        environment, society, and governance through our
                        business practices and operations.
                    </p>
                </motion.div>
            </div>
            <div className="flex flex-col gap-10">
                <h2 className="  text-3xl font-semibold text-center">
                    ENVIRONMENTAL COMMITMENT
                </h2>
                <div className="flex gap-10 justify-center">
                    <div className=" w-[300px] px-10 py-4 flex flex-col gap-4  shadow-2xl rounded-lg cursor-default hover:-translate-y-4 transition-all duration-500">
                        <img
                            src="/svg-1.svg"
                            alt=""
                            className="w-[200px] h-[200px] self-center"
                        />
                        At IT Xcelerate, we recognize that climate change is one
                        of the most pressing issues facing the world today. As a
                        technology company, we&apos;re committed to using our
                        expertise and resources to develop innovative solutions
                        that address climate change and promote sustainable
                        practices.
                    </div>
                    <div className=" w-[300px] px-10 py-4 flex flex-col gap-4  shadow-2xl rounded-lg cursor-default hover:-translate-y-4 transition-all duration-500">
                        <img
                            src="/svg-2.svg"
                            alt=""
                            className="w-[200px] h-[200px] self-center"
                        />
                        To minimize our environmental impact, we use
                        energy-efficient technologies and implement waste
                        reduction and recycling programs. We also ensure that
                        our supply chain partners and vendors share our
                        commitment to environmental sustainability. Social
                        Responsibility
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <h2 className="  text-3xl font-semibold text-center">
                    SOCIAL RESPONSIBILITIES
                </h2>
                <div className="flex gap-10 justify-center">
                    <div className=" w-[300px] px-10 py-4 flex flex-col gap-4  shadow-2xl rounded-lg cursor-default hover:-translate-y-4 transition-all duration-500">
                        <img
                            src="/svg-3.svg"
                            alt=""
                            className="w-[200px] h-[200px] self-center"
                        />
                        We believe that every business has a responsibility to
                        contribute to the well-being of society. At IT
                        Xcelerate, we&apos;re committed to promoting diversity,
                        equity, and inclusion in our workplace and our
                        communities.
                    </div>
                    <div className=" w-[300px] px-10 py-4 flex flex-col gap-4  shadow-2xl rounded-lg cursor-default hover:-translate-y-4 transition-all duration-500">
                        <img
                            src="/svg-4.svg"
                            alt=""
                            className="w-[200px] h-[200px] self-center"
                        />
                        We support various community organizations and
                        initiatives, including those that promote education,
                        health and wellness, and environmental sustainability.
                        We also encourage our employees to volunteer their time
                        and skills to support community initiatives that align
                        with our values and mission.
                    </div>
                    <div className=" w-[300px] px-10 py-4 flex flex-col gap-4  shadow-2xl rounded-lg cursor-default hover:-translate-y-4 transition-all duration-500">
                        <img
                            src="/svg-5.svg"
                            alt=""
                            className="w-[200px] h-[200px] self-center"
                        />
                        We ensure that our employees are treated with respect,
                        fairness, and dignity, and we do not tolerate any form
                        of discrimination, harassment, or abuse. Our goal is to
                        create a workplace where every employee feels valued,
                        supported, and empowered to reach their full potential.
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <h2 className="  text-3xl font-semibold text-center">
                    GOVERNANCE POLICIES
                </h2>
                <div className="flex gap-10 justify-center">
                    <div className=" w-[300px] px-10 py-4 flex flex-col gap-4  shadow-2xl rounded-lg cursor-default hover:-translate-y-4 transition-all duration-500">
                        <img
                            src="/svg-6.svg"
                            alt=""
                            className="w-[200px] h-[200px] self-center"
                        />
                        We&apos;re committed to maintaining the highest
                        standards of ethical conduct, transparency, and
                        accountability in our business practices. We have a
                        robust governance framework in place to ensure that we
                        operate in compliance with all relevant laws and
                        regulations.
                    </div>
                    <div className=" w-[300px] px-10 py-4 flex flex-col gap-4  shadow-2xl rounded-lg cursor-default hover:-translate-y-4 transition-all duration-500">
                        <img
                            src="/svg-7.svg"
                            alt=""
                            className="w-[200px] h-[200px] self-center"
                        />
                        We value the input and feedback of our stakeholders and
                        are committed to maintaining open and transparent
                        communication with them. We regularly assess our
                        governance practices and make improvements as necessary
                        to ensure that we meet the highest standards of
                        corporate responsibility.
                    </div>
                    <div className=" w-[300px] px-10 py-4 flex flex-col gap-4  shadow-2xl rounded-lg cursor-default hover:-translate-y-4 transition-all duration-500">
                        <img
                            src="/svg-8.svg"
                            alt=""
                            className="w-[200px] h-[200px] self-center"
                        />
                        Our commitment to ESG is an ongoing journey, and we&apos;re
                        continuously looking for ways to improve our
                        environmental, social, and governance practices. We
                        believe that ESG is not just the right thing to do, but
                        it also makes good business sense.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Esg;
