import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Animation1 from "./Animation1";
import Animation2 from "./Animation2";
import Animation3 from "./Animation3";

const Header10 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  // pos - between 0 and 1
  const position = useTransform(scrollYProgress, (pos) => {
    return pos > 0.5 ? "relative" : "relative";
  });
  return (
    <div className="min-h-[100vh]  w-screen z-40 bg-secondary text-white p-10 flex items-center gap-20 flex-col ">
      <motion.div
        ref={containerRef}
        className="h-[60vh] top-[100px] z-40 w-screen flex justify-center mt-20 text-center"
        style={{ opacity, scale, position }}
      >
        <h2 className=" uppercase text-8xl font-monumentRegular">
          Development <br /> Reimagined.
        </h2>
      </motion.div>
      <Animation1 />
      <Animation2 />
      <Animation3 />
    </div>
  );
};

export default Header10;
