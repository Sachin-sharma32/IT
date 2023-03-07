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
        <div className="path-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    className=" fill-green-100"
                    fill-opacity="1"
                    d="M0,160L30,170.7C60,181,120,203,180,218.7C240,235,300,245,360,250.7C420,256,480,256,540,245.3C600,235,660,213,720,186.7C780,160,840,128,900,106.7C960,85,1020,75,1080,101.3C1140,128,1200,192,1260,213.3C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                ></path>
            </svg>
            <section
                ref={header5Ref}
                className=" z-40 md:h-[320vh] h-[200vh]  lg:h-[420vh] relative flex justify-center  text-black bg-green-100"
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
                            className="h-12 mx-auto mb-3 text-black"
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
                            <p className="text-base font-medium text-black md:text-2xl w-[90vw]">
                                &quot;Working with IT Xcelerate was a
                                game-changer for my business. They developed a
                                custom software solution that streamlined our
                                operations and increased our efficiency. The
                                team was professional, responsive, and delivered
                                the project on time and on budget. I highly
                                recommend their services!&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-black ">
                                    John D.
                                </div>
                                <div className="pl-3 text-sm font-light text-black">
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
                            className="h-12 mx-auto mb-3 text-black text-black"
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
                            <p className="text-base font-medium text-black md:text-2xl w-[90vw]">
                                &quot;sachin is just awesome. It contains tons
                                of predesigned components and pages starting
                                from login screen to complex dashboard. Perfect
                                choice for your next SaaS sachin.&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-black ">
                                    Micheal Gough
                                </div>
                                <div className="pl-3 text-sm font-light text-black">
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
                            className="h-12 mx-auto mb-3 text-black text-black"
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
                            <p className="text-base font-medium text-black md:text-2xl w-[90vw]">
                                &quot;IT Xcelerate has been an invaluable
                                partner for our business. They have helped us
                                navigate complex IT challenges and provided us
                                with innovative solutions to improve our
                                operations. Their team is professional,
                                knowledgeable, and always goes the extra mile to
                                ensure our satisfaction. I highly recommend IT
                                Xcelerate to any business looking for top-notch
                                IT services.&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-black ">
                                    Tom L.
                                </div>
                                <div className="pl-3 text-sm font-light text-black">
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
                            className="h-12 mx-auto mb-3 text-black text-black"
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
                            <p className="text-base font-medium text-black md:text-2xl w-[90vw]">
                                &quot;I was impressed with IT Xcelerate&apos;s
                                attention to detail and ability to understand
                                our unique business needs. They provided us with
                                a customized mobile app that has been a
                                game-changer for our customer engagement and
                                retention. I would recommend IT Xcelerate to any
                                business looking to leverage technology to
                                improve their operations..&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-black ">
                                    Rachel S.
                                </div>
                                <div className="pl-3 text-sm font-light text-black">
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
                            className="h-12 mx-auto mb-3 text-black text-black"
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
                            <p className="text-base font-medium text-black md:text-2xl w-[90vw]">
                                &quot;I&apos;ve been working with IT Xcelerate
                                for years and they have consistently provided
                                high-quality IT support and solutions. Their
                                team is knowledgeable, responsive, and always
                                goes above and beyond to ensure our technology
                                needs are met. I highly recommend IT Xcelerate
                                to any business looking for reliable IT
                                services.&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-black ">
                                    Mark R.
                                </div>
                                <div className="pl-3 text-sm font-light text-black">
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
                            className="h-12 mx-auto mb-3 text-black text-black"
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
                            <p className="text-base font-medium text-black md:text-2xl w-[90vw]">
                                &quot;IT Xcelerate exceeded my expectations for
                                our web development project. They not only
                                created a beautiful and functional website, but
                                they also provided excellent customer service
                                throughout the entire process. I would
                                definitely use them again for future
                                projects.&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-black ">
                                    Sarah T.
                                </div>
                                <div className="pl-3 text-sm font-light text-black">
                                    Marketing Manager at MulberryStudio
                                </div>
                            </div>
                        </figcaption>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Header5;
