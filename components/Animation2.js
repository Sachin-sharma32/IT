import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const Animation2 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.9],
    [0, 1, 1, 0]
  );
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  const width = useTransform(scrollYProgress, [0.3, 0.4, .5], ["60%", "100%", "60%"]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const width2 = useTransform(scrollYProgress, [0.3, 0.4], ["40%", "0%"]);
  const x = useTransform(scrollYProgress, [0.4, 0.5], ["0%", "-80%"]);

  return (
    <div className=" h-[500vh]" ref={targetRef}>
      <motion.div
        style={{ opacity }}
        className="sticky top-1/2 -translate-y-1/2 flex gap-20 items-center"
      >
        <motion.p
          style={{ opacity: opacity2, width: width2 }}
          className="w-[40%] text-3xl"
        >
          Transform your digital presence with IT Xcelerate&apos;s innovative
          solutions.
        </motion.p>
        <motion.div
          style={{
            width,
            x,
          }}
          className=" relative"
        >
          <Image
            width={1000}
            height={1000}
            src={"/rahul-6.jpg"}
            className="w-[100%] h-[400px] rounded-xl"
          />
          <motion.p
            style={{ opacity: opacity3 }}
            className="w-[60%] text-3xl absolute top-1/2 -right-[70%] -translate-y-1/2"
          >
            Transforming businesses with innovative IT services that drive
            growth, efficiency, and success.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Animation2;
