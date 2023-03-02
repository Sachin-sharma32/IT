import React, { useRef, useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Header4 = ({ yOffset, prev }) => {
    const ref = useRef();
    const isOnScreen = useOnScreen(ref);
    const sliderRef = useRef();
    const [count, setCount] = useState(0);
    console.log(count);
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
    return (
        <section
            className="z-30 px-10 bg-[#f8f8f8] py-20"
            id="achievements"
            ref={ref}
        >
            <div className="flex flex-col gap-10 relative justify-center items-center w-full">
                <h3 className=" text-3xl font-bold text-center px-4 sm:px-0">
                    Web App Technologies We Use
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {data.map((item, i) => (
                        <motion.div
                            animate={{ y: [100, 0] }}
                            transition={{ duration: 1 }}
                            key={i}
                            className="bg-white shadow-lg rounded-lg p-10 flex gap-2 flex-col items-center cursor-default hover:scale-110 transition-all duration-500 hover:-translate-y-4"
                        >
                            <div className=" bg-purple-100 p-10 rounded-full">
                                <img src={item.image} alt="" className="w-12" />
                            </div>
                            <h5 className="text-2xl uppercase">{item.name}</h5>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Header4;
