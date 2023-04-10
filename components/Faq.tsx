import React from "react";
import { motion } from "framer-motion";
import { FaqProps } from "../utils/types";



const Faq = ({ i, selected, setSelected, item }: FaqProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 1, x: [-100, 0], scale: 1 }}
      transition={{ duration: 0.5, yOffset: 100 }}
      whileHover={{ scale: 1.1 }}
      key={i}
      className={`text-lg md:text-xl  ${i == 0 && ""
        }  p-6 rounded-3xl grid grid-cols-5 group justify-items-end hover:bg-white transition-colors duration-500 hover:text-black  bg-secondary text-white`}
      onClick={() => {
        selected === i ? setSelected(null) : setSelected(i);
      }}
    >
      <div className="cursor-none overflow-hidden flex gap-10 justify-between w-full col-span-4 items-center">
        <div className="flex gap-6">
          <p className="w-[50px]">0{i + 1}</p>
          <p
            className=" header6Text"
            style={{ transform: "translateY(100px)" }}
          >
            {item.title}
          </p>
        </div>
      </div>
      <div className="cursor-none  w-10 h-10 md:w-10 md:h-10 group-hover:bg-primary group-hover:border-primary rounded-full relative border-white border-[1.5px] hover:border-none ">
        <div
          className={`h-6 md:h-5 w-[1.5px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${selected === i ? "max-h-0" : "max-h-[300px]"
            }`}
        ></div>
        <div className="cursor-none  h-[1.5px] w-6 md:w-5 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div
        className={` col-span-5 text-lg  h-auto ${selected === i ? "max-h-[300px] pt-4" : "max-h-0"
          } transition-all duration-500 overflow-hidden  `}
      >
        {item.details}
      </div>
    </motion.div>
  );
};

export default Faq;
