import React, { useEffect, useRef } from "react";
import useOnScreen from "../utils/useOnScreen";
import { motion } from "framer-motion";

const Header5 = ({ yOffset, header5Ref }) => {
    const childRef = useRef(null);
    const isOnScreen = useOnScreen(header5Ref);
    console.log(header5Ref.current?.getBoundingClientRect().top);
    useEffect(() => {
        if (
            header5Ref.current.getBoundingClientRect().bottom -
                window.innerHeight <
            0
        ) {
            childRef.current.classList.remove("fixed");
            childRef.current.classList.add("absolute");
            childRef.current.classList.remove("top-0");
            childRef.current.classList.add("bottom-0");
        } else if (header5Ref.current.getBoundingClientRect().top < 0) {
            childRef.current.classList.add("fixed");
            childRef.current.classList.remove("absolute");
            childRef.current.classList.add("bottom-0");
            childRef.current.classList.add("top-0");
        } else {
            childRef.current.classList.remove("fixed");
            childRef.current.classList.remove("bottom-0");
        }
    }, [yOffset]);
    const data = [
        {
            title: "&quot;Working with IT Xcelerate was a game-changer for my business. They developed a custom software solution that streamlined our operations and increased our efficiency. The team was professional, responsive, and delivered the project on time and on budget. I highly recommend their services!&quot;",
            author: "John D.",
            position: "CEO of Reddhr",
        },
        {
            title: "&quot;sachin is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS sachin.&quot;",
            author: "Micheal Gough",
            position: "CEO of Google",
        },
        {
            title: "&quot;IT Xcelerate has been an invaluable partner for our business. They have helped us navigate complex IT challenges and provided us with innovative solutions to improve our operations. Their team is professional, knowledgeable, and always goes the extra mile to ensure our satisfaction. I highly recommend IT Xcelerate to any business looking for top-notch IT services.&quot;",
            author: "Tom L.",
            position: "COO of JKL Logistics",
        },
        {
            title: "&quot;I was impressed with IT Xcelerate&apos;s attention to detail and ability to understand our unique business needs. They provided us with a customized mobile app that has been a game-changer for our customer engagement and retention. I would recommend IT Xcelerate to any business looking to leverage technology to improve their operations..&quot;",
            author: "Rachel S.",
            position: "Owner of GHI Restaurant",
        },
        {
            title: "&quot;I&apos;ve been working with IT Xcelerate for years and they have consistently provided high-quality IT support and solutions. Their team is knowledgeable, responsive, and always goes above and beyond to ensure our technology needs are met. I highly recommend IT Xcelerate to any business looking for reliable IT services.&quot;",
            author: "Mark R.",
            position: "CFO of TBFE",
        },
        {
            title: "  &quot;IT Xcelerate exceeded my expectations for our web development project. They not only created a beautiful and functional website, but they also provided excellent customer service throughout the entire process. I would definitely use them again for future projects.&quot;",
            author: "Sarah T.",
            position: "Marketing Manager at MulberryStudio",
        },
    ];
    return (
        <section
            ref={header5Ref}
            className=" z-40 md:h-[320vh] h-[200vh]  lg:h-[420vh] relative flex justify-center  text-white bg-gradient-to-tr from-[#c10000] to-[#9e0101] path-top"
            id="testimonials"
        >
            <div
                ref={childRef}
                style={
                    header5Ref.current?.getBoundingClientRect().top <= 0
                        ? {
                              transform: `${`translateX(${
                                  header5Ref.current?.getBoundingClientRect()
                                      .top * 3
                              }px)`}`,
                          }
                        : {
                              transform: `${`translateX(0px)`}`,
                          }
                }
                className=" flex top-0 h-screen gap-10"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    exit={{ opacity: 0 }}
                    className={` flex flex-col justify-center  w-[100vw] items-center absolute top-1/2 -translate-y-1/2 -translate-x-1/2 `}
                >
                    <svg
                        className="h-12 mx-auto mb-3 text-white"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    <blockquote>
                        <p className="text-base font-medium text-white md:text-2xl w-[90vw]">
                            &quot;Working with IT Xcelerate was a game-changer
                            for my business. They developed a custom software
                            solution that streamlined our operations and
                            increased our efficiency. The team was professional,
                            responsive, and delivered the project on time and on
                            budget. I highly recommend their services!&quot;
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="pr-3 font-medium text-white ">
                                John D.
                            </div>
                            <div className="pl-3 text-sm font-light text-white">
                                CEO of Reddhr
                            </div>
                        </div>
                    </figcaption>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    exit={{ opacity: 0 }}
                    className={` flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2 translate-x-[60vw]`}
                >
                    <svg
                        className="h-12 mx-auto mb-3 text-white text-white"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    <blockquote>
                        <p className="text-base font-medium text-white md:text-2xl w-[90vw]">
                            &quot;sachin is just awesome. It contains tons of
                            predesigned components and pages starting from login
                            screen to complex dashboard. Perfect choice for your
                            next SaaS sachin.&quot;
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="pr-3 font-medium text-white ">
                                Micheal Gough
                            </div>
                            <div className="pl-3 text-sm font-light text-white">
                                CEO at Google
                            </div>
                        </div>
                    </figcaption>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    exit={{ opacity: 0 }}
                    className={` flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2 translate-x-[160vw]`}
                >
                    <svg
                        className="h-12 mx-auto mb-3 text-white text-white"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    <blockquote>
                        <p className="text-base font-medium text-white md:text-2xl w-[90vw]">
                            &quot;IT Xcelerate has been an invaluable partner
                            for our business. They have helped us navigate
                            complex IT challenges and provided us with
                            innovative solutions to improve our operations.
                            Their team is professional, knowledgeable, and
                            always goes the extra mile to ensure our
                            satisfaction. I highly recommend IT Xcelerate to any
                            business looking for top-notch IT services.&quot;
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="pr-3 font-medium text-white ">
                                Tom L.
                            </div>
                            <div className="pl-3 text-sm font-light text-white">
                                COO of JKL Logistics
                            </div>
                        </div>
                    </figcaption>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    exit={{ opacity: 0 }}
                    className={` flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2 translate-x-[260vw]`}
                >
                    <svg
                        className="h-12 mx-auto mb-3 text-white text-white"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    <blockquote>
                        <p className="text-base font-medium text-white md:text-2xl w-[90vw]">
                            &quot;I was impressed with IT Xcelerate&apos;s
                            attention to detail and ability to understand our
                            unique business needs. They provided us with a
                            customized mobile app that has been a game-changer
                            for our customer engagement and retention. I would
                            recommend IT Xcelerate to any business looking to
                            leverage technology to improve their
                            operations..&quot;
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="pr-3 font-medium text-white ">
                                Rachel S.
                            </div>
                            <div className="pl-3 text-sm font-light text-white">
                                Owner of GHI Restaurant
                            </div>
                        </div>
                    </figcaption>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    exit={{ opacity: 0 }}
                    className={` flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2 translate-x-[360vw]`}
                >
                    <svg
                        className="h-12 mx-auto mb-3 text-white text-white"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    <blockquote>
                        <p className="text-base font-medium text-white md:text-2xl w-[90vw]">
                            &quot;I&apos;ve been working with IT Xcelerate for
                            years and they have consistently provided
                            high-quality IT support and solutions. Their team is
                            knowledgeable, responsive, and always goes above and
                            beyond to ensure our technology needs are met. I
                            highly recommend IT Xcelerate to any business
                            looking for reliable IT services.&quot;
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="pr-3 font-medium text-white ">
                                Mark R.
                            </div>
                            <div className="pl-3 text-sm font-light text-white">
                                CFO of TBFE
                            </div>
                        </div>
                    </figcaption>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    exit={{ opacity: 0 }}
                    className={` flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2 translate-x-[460vw]`}
                >
                    <svg
                        className="h-12 mx-auto mb-3 text-white text-white"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    <blockquote>
                        <p className="text-base font-medium text-white md:text-2xl w-[90vw]">
                            &quot;IT Xcelerate exceeded my expectations for our
                            web development project. They not only created a
                            beautiful and functional website, but they also
                            provided excellent customer service throughout the
                            entire process. I would definitely use them again
                            for future projects.&quot;
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="pr-3 font-medium text-white ">
                                Sarah T.
                            </div>
                            <div className="pl-3 text-sm font-light text-white">
                                Marketing Manager at MulberryStudio
                            </div>
                        </div>
                    </figcaption>
                </motion.div>
            </div>
        </section>
    );
};

export default Header5;
