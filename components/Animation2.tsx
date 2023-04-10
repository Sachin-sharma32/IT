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
  const width = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["100%", "100%", "100%"]
  );
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const width2 = useTransform(scrollYProgress, [0.3, 0.4], ["40%", "0%"]);
  const x = useTransform(scrollYProgress, [0.4, 0.5], ["0%", "-80%"]);

  const data = [
    "Competitive pricing and flexible engagement models to suit diverse budgets and project scopes.",
    "Transparent communication and regular updates throughout the development cycle.",
    "Robust testing and quality assurance processes to ensure high-performance and reliability.",
    "Timely delivery and efficient project management.",
    "Strong focus on user experience and intuitive design.",
    "Customized solutions tailored to meet specific business needs and requirements.",
    "Experienced team of developers with expertise in the latest technologies.",
  ];

  return (
    <div className=" h-[500vh]" ref={targetRef}>
      <motion.div
        style={{ opacity }}
        className="sticky top-1/2 -translate-y-1/2 flex gap-20 items-center"
      >
        <motion.p
          style={{ opacity: opacity2, width: width2 }}
          className="w-[70%] text-4xl uppercase font-bold"
        >
          Why Choose <span className="text-primary">US</span>
        </motion.p>
        <motion.div
          style={{
            width,
            x,
          }}
          className=" relative"
        >
          <Image
            alt="random image"
            width={1000}
            height={1000}
            src={"/rahul-15.jpeg"}
            className="w-[100%] h-[400px] rounded-xl"
          />
          <motion.ul
            style={{ opacity: opacity3 }}
            className="w-[80%] text-3xl absolute top-1/2 right-[-85%] -translate-y-1/2 space-y-5 text-white"
          >
            {data.map((item, i) => (
              <li key={i} className="cursor-none">
                <div className="flex gap-3 items-start header3Points">
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
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Animation2;
