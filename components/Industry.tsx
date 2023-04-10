import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IndustryProps } from "../utils/types";

const Industry = ({ i, active, setActive, item, box }: IndustryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: [100, 0] }}
      transition={{ duration: 1, delay: i * 0.1 }}
      className={`${i !== 10 ? "" : ""
        } h-full w-fit flex items-center justify-center  border-[1.5px] bg-fourth text-white rounded-3xl overflow-hidden`}
      onMouseEnter={() => {
        setActive(i);
        box.current.style.visibility = "visible";
      }}
      onMouseLeave={() => {
        setActive(null);
        box.current.style.visibility = "hidden";
      }}
      key={i}
    >
      <div
        className={`font-extrabold relative h-full flex items-center transition-all duration-1000 justify-center ${active === i ? "w-[400px]" : "w-[90px]"
          }`}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={` -rotate-90 uppercase min-w-[250px] z-[500]  text-center pl-4 ${active === i ? "hidden" : "flex"
            }`}
        >
          {item.title}
        </motion.h3>
        <div
          className={`absolute top-0 left-0 h-full w-full transition-all duration-500`}
        >
          <div className=" relative w-full h-full">
            <motion.div
              className={` w-full h-full transition-all duration-500 overflow-hidden ${active === i ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                alt="random image"
                src={item.image}
                width={1000}
                height={1000}
                className={`brightness-50 h-full min-w-[300px]`}
              />
            </motion.div>
            <motion.div
              transition={{ delay: 0.7 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={`${active === i ? "flex" : "hidden"
                } transition-all duration-300 absolute font-normal text-xs bottom-0 w-[90%] text-justify text-white -translate-x-1/2 mb-4 left-1/2`}
            >
              {item.desc}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Industry;
