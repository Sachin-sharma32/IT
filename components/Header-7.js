import React, { useRef, useState } from "react";
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

    const scaleRef = useRef(null);
    const cardRefs = useRef(data.map((item) => React.createRef()));
    const [isHovering, setIsHovering] = useState(false);
    const [element, setElement] = useState(null);
    console.log(isHovering, element);
    const [hoverPosition, setHoverPosition] = useState({ x: null, y: null });

    const handleMouseEnter = (e, i) => {
        console.log(i);
        console.log(scaleRef.current);
        scaleRef.current.style.backgroundColor = "white";
        scaleRef.current.classList.add("left-0");
        setElement(i);
        setIsHovering(true);
        setHoverPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setHoverPosition({ x: null, y: null });
    };

    return (
        <div className=" flex flex-col  justify-center items-center p-10 pb-0 pt-0 z-40 bg-gradient-to-tr from-blue-50 to-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    className=" fill-green-100"
                    fill-opacity="1"
                    d="M0,192L30,208C60,224,120,256,180,245.3C240,235,300,181,360,154.7C420,128,480,128,540,154.7C600,181,660,235,720,266.7C780,299,840,309,900,282.7C960,256,1020,192,1080,176C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
                ></path>
            </svg>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [50, 0] }}
                transition={{ duration: 1.5 }}
                className="text-black sm:text-lg  flex flex-col gap-10"
            >
                <h3 className=" text-3xl font-bold text-center px-4 sm:px-0 hover:skew-x-12 hover:scale-125 hover:bg-gradient-to-r from-green-300 to-blue-300 cursor-pointer hover:text-transparent bg-clip-text transition-all duration-500">
                    INDUSTRIES WE CATER
                </h3>
                <div className="sm:grid md:grid-cols-2  lg:grid-cols-3 gap-10 px-10 w-screen flex overflow-scroll py-10 header-4">
                    {data.map((item, i) => (
                        <div
                            ref={cardRefs.current[i]}
                            onMouseEnter={(e) => {
                                handleMouseEnter(e, i);
                            }}
                            onMouseLeave={handleMouseLeave}
                            key={i}
                            className=" bg-white overflow-hidden shadow-lg rounded-lg p-4 flex flex-col justify-center min-w-[250px] gap-6 items-center hover:text-purple-500 cursor-default hover:scale-110 transition-all duration-500 hover:-translate-y-4 grayscale hover:grayscale-0"
                        >
                            <div
                                ref={scaleRef}
                                className=" rounded-full absolute bg-pink-200 top-0 left-0 opacity-20 h-[1px] w-[1px]  transition-all duration-1000"
                                style={
                                    isHovering && element === i
                                        ? { transform: "scale(50000%)" }
                                        : {}
                                }
                            ></div>
                            <div>
                                <div className=" bg-purple-100 rounded-full p-4 flex justify-center items-center h-32 w-32">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-20 grayscale hover:grayscale-0 transition-all duration-300"
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#d9cdf6"
                    fill-opacity="1"
                    d="M0,160L48,176C96,192,192,224,288,202.7C384,181,480,107,576,101.3C672,96,768,160,864,186.7C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
};

export default Header7;
