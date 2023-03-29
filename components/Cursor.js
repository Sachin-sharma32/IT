import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Cursor = () => {
  const cursorVisible = useSelector((state) => state.base.cursorVisible);
  const hovering = useSelector((state) => state.base.hovering);
  const hoveringLeft = useSelector((state) => state.base.hoveringLeft);
  const hoveringRight = useSelector((state) => state.base.hoveringRight);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        dot.current.style.left = `${e.clientX}px`;
        dot.current.style.transition = `all .2s ease-out`;
        dot.current.style.top = `${e.clientY}px`;
        dotOutline.current.style.left = `${e.clientX}px`;
        dotOutline.current.style.top = `${e.clientY}px`;
      });
    }
  }, []);
  const dot = useRef(null);
  const dotOutline = useRef(null);
  return (
    <div>
      {cursorVisible && (
        <div
          className={`${
            (hoveringLeft || hoveringRight)
              ? "scale-[6] bg-[#ebfc6e]"
              : "bg-black"
          } cursor-none  bg-blend-difference fixed  transition-transform duration-1000  -translate-x-1/2 flex justify-center items-center -translate-y-1/2 pointer-events-none  z-[1000] ${
            hovering ? "bg-primary scale-50" : "bg-black"
          } w-4 h-4  rounded-full `}
          ref={dotOutline}
        >
          <div className=" relative">
            <Image
              src="/right-arrow.png"
              width={1000}
              height={1000}
              className={`w-[10px] h-[9px] ${hoveringRight ? "" : "hidden"}`}
            />
            <Image
              src="/right-arrow.png"
              width={1000}
              height={1000}
              className={`w-[10px] h-[9px] ${
                hoveringLeft ? "" : "hidden"
              } rotate-180`}
            />
          </div>
        </div>
      )}
      <div
        className={`cursor-none  bg-blend-difference fixed  -translate-x-1/2   -translate-y-1/2 pointer-events-none  z-[1000] opacity-25  w-10 h-10  rounded-full ${
          hovering ? "bg-[#ebfc6e] scale-[5.5]" : "bg-black"
        } ${hoveringLeft || hoveringRight ? "hidden" : "flex"}`}
        ref={dot}
      ></div>
    </div>
  );
};

export default Cursor;
