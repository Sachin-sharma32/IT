import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header7 = () => {
  const data = [
    [
      { name: "Education", image: "/svg-10.svg" },
      { name: "Art & Museum", image: "/svg-11.svg" },
      { name: "Automobile and Logistics", image: "/svg-12.svg" },
      { name: "Food and Beverage", image: "/svg-13.svg" },
    ],
    [
      { name: "Hospitality", image: "/svg-14.svg" },
      { name: "Healthcare", image: "/svg-15.svg" },
      { name: "Entertainment", image: "/svg-16.svg" },
      { name: "Retail", image: "/svg-17.svg" },
    ],
    [
      { name: "Agriculture", image: "/svg-18.svg" },
      { name: "Fintech", image: "/svg-19.svg" },
      { name: "Social Media", image: "/svg-20.svg" },
      { name: "Social Media", image: "/svg-20.svg" },
    ],
  ];
  const [counter, setCounter] = useState(1);
  setTimeout(() => {
    if (counter < 5) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  }, 1000);

  const scaleRef = useRef(null);
  const cardRefs = useRef(data.map((item) => React.createRef()));
  const [isHovering, setIsHovering] = useState(false);
  const [element, setElement] = useState(null);
  console.log(isHovering, element);
  const [hoverPosition, setHoverPosition] = useState({ x: null, y: null });

  const handleMouseEnter = (e, j) => {
    console.log(j);
    console.log(scaleRef.current);
    scaleRef.current.style.backgroundColor = "white";
    scaleRef.current.classList.add("left-0");
    setElement(j);
    setIsHovering(true);
    setHoverPosition({ x: e.clientX, y: e.clientY });
    box.current.style.visibility = "visible";
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverPosition({ x: null, y: null });
    box.current.style.visibility = "hidden";
  };

  const box = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        box.current.style.left = `${e.clientX + 30}px`;
        box.current.style.top = `${e.clientY}px`;
      });
    }
  }, []);

  useEffect(() => {
    const t1 = gsap.to(".parallax-0", {
      scrollTrigger: {
        trigger: ".parallax-0",
        scroller: "body",
        start: "top center",
        scrub: true,
      },
      y: -500,
      duration: 1,
      ease: Power1.easeInOut,
      delay: 0,
    });
    gsap.to(".parallax-2", {
      scrollTrigger: {
        trigger: ".parallax-2",
        scroller: "body",
        start: "top center",
        scrub: true,
      },
      y: -500,
      duration: 1,
      ease: Power1.easeInOut,
      delay: 0,
    });
    gsap.to(".header7", {
      scrollTrigger: {
        trigger: ".header7",
        scroller: "body",
        start: "top bottom",
      },
      y: 0,
      rotate: 0,
      duration: 1,
      stagger: 0.05,
    });
    return () => {
      t1.kill();
    };
  }, []);

  return (
    <div className="cursor-none flex flex-col  relative justify-center items-center p-2 md:px-10 py-20 w-screen bg-secondary">
      <div
        style={{ visibility: "hidden" }}
        className="cursor-none  bg-blend-difference fixed -translate-y-1/2 pointer-events-none  z-[1000] h-10 text- flex flex-col gap-4"
        ref={box}
      >
        <div className="cursor-none bg-primary rounded-full px-10 py-1 w-fit">
          {" "}
          Behance
        </div>
        <div className="cursor-none  bg-opacity-50 px-1 pb-1 flex py-1 flex-col gap-1 bg-tertiary relative rounded-md">
          <div className="cursor-none flex gap-2 pl-2">
            <div className="cursor-none  w-2 h-2 bg-primary rounded-full"></div>
            <div className="cursor-none  w-2 h-2 bg-primary rounded-full"></div>
            <div className="cursor-none  w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <Image
            width={100}
            height={100}
            src={`/bs-${counter}.jpg`}
            className="cursor-none  w-80"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [50, 0] }}
        transition={{ duration: 1.5 }}
        className="cursor-none text- sm:text-lg  flex flex-col gap-0 md:gap-10"
      >
        <h2 className="cursor-none  text-2xl md:text-5xl heading-7 font-bold h-[50px] md:h-[50px] font-monumentBold overflow-hidden text-center px-4 sm:px-0  transition-all duration-500">
          {"Industries We Cater".split("").map((word) => {
            return word === " " ? (
              <span
                className="header7 inline-block transition-all duration-300"
                style={{ transform: "translateY(100px)" }}
              >
                &nbsp;
              </span>
            ) : (
              <span
                className=" header7 inline-block transition-all duration-300 bg-gradient-to-r from-tertiary to- text-transparent bg-clip-text"
                style={{ transform: "translateY(100px)" }}
              >
                {word}
              </span>
            );
          })}
        </h2>
        <div className="cursor-none hidden md:flex py-32 sm:grid md:grid-cols-2 justify-items-center justify-center  lg:grid-cols-3 gap-10 px-4 md:px-10 w-screen  overflow-scroll header-4">
          {data.map((group, i) => (
            <div key={i} className={`parallax-${i} flex flex-col gap-10 `}>
              {group.map((item, j) => (
                <div
                  ref={cardRefs.current[j]}
                  onMouseEnter={(e) => {
                    handleMouseEnter(e, j);
                  }}
                  onMouseLeave={handleMouseLeave}
                  key={j}
                  className={`cursor-none bg-opacity-50 bg-white overflow-hidden hover:grayscale-0 text-secondary shadow-lg rounded-lg p-4 flex flex-col justify-center w-[350px] gap-6 items-center  transition-all duration-500 grayscale `}
                >
                  <div
                    ref={scaleRef}
                    className="cursor-none rounded-full absolute bg-primary top-0 left-0 opacity-20 h-[1px] w-[1px]  transition-all duration-1000"
                    style={
                      isHovering && element === j
                        ? { transform: "scale(70000%)" }
                        : {}
                    }
                  ></div>
                  <div>
                    <div className="cursor-none  bg-tertiary rounded-full p-4 flex justify-center items-center h-32 w-32">
                      <Image
                        width={100}
                        height={100}
                        src={`${item.image}`}
                        alt=""
                        className="cursor-none w-20  transition-all duration-300"
                      />
                    </div>
                  </div>
                  <h5 className="cursor-none text-2xl   uppercase text-center font-monumentRegular">
                    {item.name}
                  </h5>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="cursor-none md:hidden py-32 gap-10 px-4 md:px-10 h-full w-screen flex overflow-x-scroll header-4">
          {data.map((group, i) => (
            <div key={i} className={` flex gap-10 `}>
              {group.map((item, j) => (
                <div
                  key={j}
                  className={`cursor-none bg-opacity-50 bg-white overflow-hidden hover:grayscale-0 text-secondary shadow-lg rounded-lg p-4 flex flex-col justify-center min-w-[250px] gap-6 items-center  transition-all duration-500 grayscale `}
                >
                  <div
                    ref={scaleRef}
                    className="cursor-none rounded-full absolute bg-primary top-0 left-0 opacity-20 h-[1px] w-[1px]  transition-all duration-1000"
                    style={
                      isHovering && element === j
                        ? { transform: "scale(70000%)" }
                        : {}
                    }
                  ></div>
                  <div>
                    <div className="cursor-none  bg-tertiary rounded-full p-4 flex justify-center items-center h-32 w-32">
                      <Image
                        width={100}
                        height={100}
                        src={`${item.image}`}
                        alt=""
                        className="cursor-none w-20  transition-all duration-300"
                      />
                    </div>
                  </div>
                  <h5 className="cursor-none text-2xl   uppercase text-center font-monumentRegular">
                    {item.name}
                  </h5>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Header7;
