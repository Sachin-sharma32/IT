import React from "react";
import { motion } from "framer-motion";

const Header7 = () => {
    const data = [
        { name: "Education", image: "/svg-10.svg" },
        { name: "Art & Museum", image: "/svg-11.svg" },
        { name: "Automobile and Logistics", image: "/svg-12.svg" },
        { name: "Food and Beverage", image: "/svg-13.svg" },
        { name: "Hospitality", image: "/svg-14.svg" },
        { name: "Healthcare", image: "/svg-15.svg" },
        { name: "Entertainment", image: "/svg-16.svg" },
        { name: "Retail", image: "/svg-17.svg" },
        { name: "Agriculture", image: "/svg-18.svg" },
        { name: "Fintech", image: "/svg-19.svg" },
        { name: "Social Media", image: "/svg-20.svg" },
    ];
    return (
        <div className=" flex flex-col  justify-center items-center p-10 z-40 pb-20 bg-gradient-to-tr from-blue-400 to-blue-700">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [50, 0] }}
                transition={{ duration: 1.5 }}
                className="text-gray-500 sm:text-lg dark:text-gray-400 flex flex-col gap-10"
            >
                <h2 className=" text-center mb-4 text-3xl font-extrabold tracking-tight text-white">
                    INDUSTRIES WE CATER
                </h2>
                <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10 px-10">
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center gap-6 items-center cursor-default hover:scale-110 transition-all duration-500 hover:-translate-y-4"
                        >
                            <div>
                                <div className=" bg-purple-100 rounded-full p-4 flex justify-center items-center h-32 w-32">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-20"
                                    />
                                </div>
                            </div>
                            <h5 className="text-2xl uppercase text-center">
                                {item.name}
                            </h5>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Header7;
