import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Cursor = () => {
  const cursorVisible = useSelector((state) => state.base.cursorVisible);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        dot.current.style.left = `${e.clientX}px`;
        dot.current.style.transition = `all .1s ease-out`;
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
          className="cursor-none  bg-blend-difference fixed  -translate-x-1/2 -translate-y-1/2 pointer-events-none  z-[1000] bg-black w-4 h-4  rounded-full"
          ref={dotOutline}
        ></div>
      )}
      <div
        className="cursor-none  bg-blend-difference fixed  -translate-x-1/2 -translate-y-1/2 pointer-events-none  z-[1000] opacity-25 bg-black w-10 h-10  rounded-full"
        ref={dot}
      ></div>
    </div>
  );
};

export default Cursor;
