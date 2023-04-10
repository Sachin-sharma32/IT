import Image from "next/image";
import { technologies, technologyCategories } from "../utils/devData";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Technologies = () => {
  const [active, setActive] = useState([]);
  console.log(active);
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    box.current.style.visibility = "visible";
    setActive(technologies[i]);
  };

  const handleMouseLeave = () => {
    box.current.style.visibility = "hidden";
  };

  const box = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        if (box?.current?.style) {
          box.current.style.left = `${e.clientX + 30}px`;
          box.current.style.top = `${e.clientY}px`;
        }
      });
    }
  }, []);
  return (
    <div
      className=" bg-secondary hidden lg:flex z-50 min-h-fit pb-20 p-4 md:p-20 text-white md:flex-row flex-col gap-10 w-screen"
      id="technologies"
    >
      <div
        style={{ visibility: "hidden" }}
        className="cursor-none  bg-blend-difference fixed -translate-y-1/2 pointer-events-none  z-[1000] h-10 text- flex flex-col gap-4 bg-transparent"
        ref={box}
      >
        <div className="cursor-none bg-black rounded-full  px-10 py-1 w-fit">
          {" "}
          ITXCELERATE
        </div>
        <div className="cursor-none  bg-opacity-50 px-1 pb-1 flex py-1 flex-col gap-1 bg-black relative rounded-md">
          <div className="cursor-none flex gap-2 pl-2">
            <div className="cursor-none  w-2 h-2 bg-black rounded-full"></div>
            <div className="cursor-none  w-2 h-2 bg-black rounded-full"></div>
            <div className="cursor-none  w-2 h-2 bg-black rounded-full"></div>
          </div>
          <div
            className={` shadow-lg backdrop:opacity-20 backdrop-blur-3xl rounded-lg p-4 group justify-center grid grid-cols-3 overflow-hidden gap-2 w-fit h-fit items-center hover:text-secondary  hover:scale-110 transition-all bg-[#e7e7e7] duration-500 justify-items-center hover:-translate-y-4`}
          >
            {active.map((item, i) => (
              <div className="w-fit" key={i}>
                <div className="cursor-none bg-white p-4 w-20 h-20 rounded-full">
                  <img
                    src={`${item?.image}`}
                    className="cursor-none w-12 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-[40%] w-[100%]  flex flex-col gap-6 md:sticky h-[300px] top-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [-100, 0] }}
          transition={{ duration: 1 }}
          className="bg-white uppercase font-bold rounded-full text-secondary w-fit px-4 "
        >
          Expertise
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [100, 0] }}
          transition={{ duration: 1 }}
          className="md:text-5xl text-3xl font-semibold"
        >
          HOW CAN <span className="text-primary">WE HELP</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [100, 0] }}
          transition={{ duration: 1 }}
        >
          We specialise in offering bespoke WebApp development services to small
          and big businesses alike. Our aim is to help businesses establish a
          strong online presence and connect with their target audience
          effectively.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: [100, 0] }}
        transition={{ duration: 1 }}
        className=" flex flex-col gap-4 text-black text-base w-full md:w-[60%]"
      >
        {technologyCategories.map((item, i) => (
          <div
            key={i}
            className={`bg-fourth md:p-8 p-4  rounded-lg group flex border border-white text-white flex-col gap-10 h-[250px] md:h-[300px] sticky `}
            style={{ top: `${80 + i * 20}px` }}
            onMouseEnter={(e) => {
              handleMouseEnter(e, i);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-6">
              <div className="bg-[#1d1f21] w-fit h-fit p-3 md:p-3 rounded-lg">
                <Image
                  alt="random image"
                  src={"/cross.png"}
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="md:text-3xl text-xl font-semibold">
                  {item.title}
                </h3>
                <div className="flex gap-2">
                  <p className="bg-primary group-hover:rotate-0 transition-all duration-300 px-4 w-fit rounded-full text-white md:text-base text-xs -rotate-[4deg]">
                    {item.tags[0]}
                  </p>
                  <p className="bg-secondary group-hover:rotate-0 transition-all duration-300 px-4 w-fit rounded-full text-white md:text-base text-xs rotate-[4deg]">
                    {item.tags[1]}
                  </p>
                  <p className="border-2 group-hover:rotate-0 hidden md:flex transition-all duration-300 border-white text-white px-4 w-fit rounded-full md:text-base text-xs -rotate-[4deg]">
                    {item.tags[2]}
                  </p>
                </div>
              </div>
            </div>
            <p className=" text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
