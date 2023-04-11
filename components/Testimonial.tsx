import React from "react";
import { Rating } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setHoveringLeft, setHoveringRight } from "../redux/slices";
import { TestimonialProps } from "../utils/types";

const Testimonial = ({ index, item, num, setNum }: TestimonialProps) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: [50, 0] }}
      transition={{ duration: 1 }}
      key={index}
      className="w-[100vw] md:w-[50vw] h-full px-4 md:px-0"
    >
      <div
        className={` flex flex-col justify-center h-[400px] gap-10 items-center bg-secondary text-tertiary p-4 md:p-10 rounded-3xl`}
        onMouseEnter={() => {
          if (index % 2 === 0) {
            dispatch(setHoveringLeft(true));
          } else {
            dispatch(setHoveringRight(true));
          }
        }}
        onMouseLeave={() => {
          if (index % 2 === 0) {
            dispatch(setHoveringLeft(false));
          } else {
            dispatch(setHoveringRight(false));
          }
        }}
        onClick={() => {
          if (index % 2 === 0) {
            if (num > 0) {
              setNum(num - 1);
            } else {
              setNum(2);
            }
          } else {
            if (num < 2) {
              setNum(num + 1);
            } else {
              setNum(0);
            }
          }
        }}
      >
        <blockquote className="flex flex-col gap-2">
          <Rating name="size-medium" defaultValue={5} readOnly />
          <q className="cursor-none text-base font-medium  md:text-2xl">
            {item.title}
          </q>
        </blockquote>
        <figcaption className="cursor-none flex self-start">
          <div className="cursor-none flex  flex-col">
            <div className="cursor-none  font-satoshi font-extrabold text-primary">
              {item.author}
            </div>
            <div className="cursor-none font-light text-lg">
              {item.position}
            </div>
          </div>
        </figcaption>
      </div>
    </motion.div>
  );
};

export default Testimonial;
