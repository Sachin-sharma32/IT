import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const Animation3 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  const width = useTransform(scrollYProgress, [0, 0.3], ["60px", "40%"]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const width2 = useTransform(scrollYProgress, [0.3, 0.4], ["40%", "0%"]);
  const left = useTransform(scrollYProgress, [0.3, 0.4], ["50%", "73%"]);
  const left2 = useTransform(scrollYProgress, [0.3, 0.4], ["50%", "27%"]);
  return (
    <motion.div style={{ opacity }} className="h-[300vh]" ref={targetRef}>
      <div className=" relative h-full w-screen top-0 ">
        <div className=" sticky top-1/2 -translate-y-1/2 w-screen h-[500px]">
          <motion.div
            style={{ width, left: left2 }}
            className=" flex flex-col gap-4 absolute top-1/2 -translate-y-1/2  -translate-x-1/2 h-[400px]"
          >
            <Image
              alt="random image"
              src={"/rahul-9.jpg"}
              className=" w-full h-full rounded-3xl"
              width={1000}
              height={1000}
            />
            <motion.p
              style={{ opacity: opacity3 }}
              className=" text-3xl w-full text-center"
            >
              At an affordable price, we strive to deliver unparalleled service
              excellence
            </motion.p>
          </motion.div>
          <motion.div
            style={{ left, width }}
            className=" flex flex-col gap-4 absolute top-1/2 h-[400px] -translate-y-1/2 -translate-x-1/2"
          >
            <Image
              alt="random image"
              src={"/rahul-2.jpg"}
              className="h-full w-full rounded-3xl"
              width={1000}
              height={1000}
            />
            <motion.p
              style={{ opacity: opacity3 }}
              className="w-full text-3xl text-center"
            >
              Transform your digital presence with IT Xcelerate&apos;s
              innovative solutions
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Animation3;
