import React, { useRef, useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import classNames from "classnames";

const Header4 = ({ yOffset, prev }) => {
    const data = [
        { name: "Python", image: "/python.png" },
        { name: "Docker", image: "/docker.png" },
        { name: "ReactJS", image: "/react.png" },
        { name: "MongoDB", image: "/mongodb.png" },
        { name: "Kubernetes", image: "/kubernetes.png" },
        { name: "NodeJS", image: "/nodejs.png" },
        { name: "AWS", image: "/aws.png" },
        { name: "PHP", image: "/php.png" },
        { name: "Java", image: "/java.png" },
        { name: "Ruby", image: "/ruby.png" },
        { name: "React Native", image: "/reactnative.png" },
        { name: "angular", image: "/angular.png" },
        { name: "swift", image: "/swift.png" },
        { name: "kotlin", image: "/kotlin.png" },
        { name: "Rails", image: "/rails.png" },
        { name: "Firebase", image: "/firebase.png" },
        { name: ".NET", image: "/net.png" },
    ];
    const [isHovering, setIsHovering] = useState(false);
    const [element, setElement] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ x: null, y: null });
    const scaleRef = useRef(null);
    console.log(hoverPosition);
    const cardRefs = useRef(data.map((item) => React.createRef()));

    const handleMouseEnter = (e, i) => {
        console.log(scaleRef.current);
        scaleRef.current.style.backgroundColor = "white";
        scaleRef.current.classList.add("left-0");
        console.log(cardRefs?.current[i].current?.getBoundingClientRect());
        console.log(e);
        setElement(i);
        setIsHovering(true);
        setHoverPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setHoverPosition({ x: null, y: null });
    };

    const ref = useRef();
    const isOnScreen = useOnScreen(ref);
    const sliderRef = useRef();
    const [count, setCount] = useState(0);
    console.log(count);
    const imageRef = useRef(null);

    return (
        <section
            className="z-30 px-10 py-20 w-[100%]"
            id="achievements"
            ref={ref}
        >
            <div className="flex flex-col gap-10 relative justify-center items-center w-full">
                <h3 className=" text-3xl font-bold text-center px-4 sm:px-0 hover:skew-x-12 hover:scale-125 hover:bg-gradient-to-r from-green-300 to-blue-300 cursor-pointer hover:text-transparent bg-clip-text transition-all duration-500">
                    Web App Technologies We Use
                </h3>
                <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 flex overflow-x-scroll header-4 w-screen px-10 py-4">
                    {data.map((item, i) => (
                        <div
                            ref={cardRefs.current[i]}
                            value={i}
                            key={i}
                            // animate={{ y: [100, 0] }}
                            // transition={{ duration: 1 }}
                            // onMouseEnter={handleMouseEnter}
                            onMouseEnter={(e) => {
                                handleMouseEnter(e, i);
                            }}
                            onMouseLeave={handleMouseLeave}
                            className={classNames(
                                "shadow-lg rounded-lg p-10 flex overflow-hidden gap-2 min-w-[250px] flex-col items-center hover:text-purple-500 cursor-default grayscale hover:scale-110 transition-all hover:grayscale-0 duration-500 hover:-translate-y-4"
                            )}
                        >
                            <div
                                ref={scaleRef}
                                className=" absolute rounded-full bg-purple-200 ro top-0 left-0 opacity-20 h-[1px] w-[1px]  transition-all duration-1000"
                                style={
                                    isHovering && element === i
                                        ? { transform: "scale(50000%)" }
                                        : {}
                                }
                            ></div>
                            <div className=" bg-purple-100 p-10 rounded-full">
                                <img
                                    ref={imageRef}
                                    src={item.image}
                                    alt=""
                                    className="w-12 transition-all duration-300"
                                />
                            </div>
                            <h5 className="text-2xl uppercase">{item.name}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Header4;
