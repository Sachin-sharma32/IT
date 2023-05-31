import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IndustryMobileProps } from "../utils/types";

const IndustryMobile = ({
  item,
  i,
  cardRefs,
  scaleRef,
  isHovering,
  element,
  handleMouseEnter,
  handleMouseLeave,
}: IndustryMobileProps) => {
  return (
    <motion.div
      ref={cardRefs.current[i]}
      onMouseEnter={(e) => {
        handleMouseEnter(e, i);
      }}
      onMouseLeave={handleMouseLeave}
      key={i}
      className={`cursor-none bg-opacity-50 bg-white overflow-hidden hover:grayscale-0 text-secondary shadow-lg rounded-lg p-4 flex flex-col justify-center w-[350px] gap-6 items-center  transition-all duration-500 grayscale `}
    >
      <div
        ref={scaleRef}
        className="cursor-none rounded-full absolute bg-primary top-0 left-0 opacity-20 h-[1px] w-[1px]  transition-all duration-1000"
        style={
          isHovering && element === i ? { transform: "scale(70000%)" } : {}
        }
      ></div>
      <div>
        <div className="cursor-none  bg-tertiary rounded-full p-4 flex justify-center items-center h-32 w-32">
          <Image
            alt="random image"
            width={100}
            height={100}
            src={`${item.image}`}
            className="cursor-none w-20  transition-all duration-300"
          />
        </div>
      </div>
      <motion.h5
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: [200, 0] }}
        transition={{ duration: 1, delay: 0.1 }}
        className="cursor-none text-2xl   uppercase text-center font-satoshi  font-extrabold"
      >
        {item.name}
      </motion.h5>
    </motion.div>
  );
};

export default IndustryMobile;