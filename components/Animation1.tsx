import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const Animation1 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 2.5]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.8],
    ["0%", "-30%", "-30%", "30%"]
  );
  const opacity = useTransform(scrollYProgress, [0.5, 0.7, 0.8], [1, 1, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.9],
    [0, 0, 1, 0]
  );
  return (
    <div className="h-[300vh]" ref={targetRef}>
      <motion.div
        style={{ scale, x, opacity, y: "-50%" }}
        className="sticky top-1/2 w-screen flex justify-center"
      >
        <div className="s relative w-full h-full flex items-center justify-center">
          <Image
            alt="random image"
            width={300}
            height={300}
            src={"/rahul-7.png"}
            className=" rounded-xl"
          />
          <motion.div
            style={{ opacity: opacity2 }}
            className="w-[150px] text-sm text-white absolute top-1/2 -translate-y-1/2 right-[22%]"
          >
            <div className="text-3xl font-bold">BUILD.</div>
            <div className="text-3xl font-bold text-primary">DEPLOY.</div>
            <div className="text-3xl heading-10 font-extrabold">REINOVATE.</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Animation1;
