import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FeatureProps } from "../utils/types";


const Feature = ({ item, i }:FeatureProps) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: [-100, 0] }}
      transition={{
        duration: 1,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }}
      key={i}
      className="cursor-none overflow-hidden"
    >
      <div
        className="flex gap-3 items-start header3Points"
        style={{ transform: "translateY(200px)" }}
      >
        <Image
          alt="random image"
          width={100}
          height={100}
          src="https://www.greenit-solution.de/wp-content/themes/greenit/dist/images/icon-bullet-18-muted.3b1a73.svg"
          className="cursor-none  w-4"
        />
        <span className="cursor-none text-base font-medium leading-tight  ">
          {item}
        </span>
      </div>
    </motion.li>
  );
};

export default Feature;
