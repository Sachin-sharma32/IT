import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { plans } from "../utils/devData";
import Plan from './Plan'
import { setHovering } from "../redux/slices";
import {CardStateProps} from "../utils/types";

const Plans = () => {
  const dispatch = useDispatch()
  const newRef = useRef(null);
  const cardFunction = (i: number) => {
    let cardState:  CardStateProps;
    if (i === 0) {
      cardState = { opacity: 1, x: [-100, 0] };
    } else if (i === 1) {
      cardState = { opacity: 1, y: [100, 0] };
    } else {
      cardState = { opacity: 1, x: [100, 0] };
    }
    return cardState;
  };
  useEffect(() => {
    const t1 = gsap.to(".revealI1", {
      scrollTrigger: {
        trigger: ".revealI1",
        scroller: "body",
        start: "center center",
      },
      y: 0,
      duration: 1,
    });
    return () => {
      t1.kill();
    };

  }, [])

  return (
    <section
      ref={newRef}
      className="cursor-none  min-h-[100vh] w-screen  z-40 bg-secondary text-white"
      id="pricing"
    >
      <div className="cursor-none ss max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="cursor-none mx-auto mb-8 text-center lg:mb-12 w-full overflow-hidden">
          <h2
            className="cursor-none mb-4 font-extrabold tracking-tight uppercase  font-satoshi text-2xl md:text-5xl w-full revealI1"
            style={{ transform: "translateY(100px)" }}
            onMouseEnter={() => {
              dispatch(setHovering(true));
            }}
            onMouseLeave={() => {
              dispatch(setHovering(false));
            }}
          >
            Designed for business teams{" "}
            <span className="text-primary">like yours</span>
          </h2>
        </div>
        <div className="cursor-none px-10 justify-center text-secondary space-y-8 justify-items-center grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 z-40">
          {plans.map((item, i) => (
            <Plan key={i} item={item} cardFunction={cardFunction} i={i} />
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#184e51"
          fillOpacity="1"
          d="M0,64L21.8,80C43.6,96,87,128,131,154.7C174.5,181,218,203,262,197.3C305.5,192,349,160,393,165.3C436.4,171,480,213,524,208C567.3,203,611,149,655,122.7C698.2,96,742,96,785,117.3C829.1,139,873,181,916,218.7C960,256,1004,288,1047,272C1090.9,256,1135,192,1178,170.7C1221.8,149,1265,171,1309,160C1352.7,149,1396,107,1418,85.3L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Plans;
