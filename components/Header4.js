import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import classNames from "classnames";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header4 = ({ yOffset, prev }) => {
  const [counter, setCounter] = useState(1);
  const data = [
    [
      { name: "Python", image: "/python.png" },
      { name: "Docker", image: "/docker.png" },
      { name: "ReactJS", image: "/react.png" },
      { name: "MongoDB", image: "/mongodb.png" },
    ],
    [
      { name: "Kubernetes", image: "/kubernetes.png" },
      { name: "NodeJS", image: "/nodejs.png" },
      { name: "AWS", image: "/aws.png" },
      { name: "PHP", image: "/php.png" },
    ],
    [
      { name: "Java", image: "/java.png" },
      { name: "Ruby", image: "/ruby.png" },
      { name: "React Native", image: "/reactnative.png" },
      { name: "angular", image: "/angular.png" },
    ],
    [
      { name: "swift", image: "/swift.png" },
      { name: "kotlin", image: "/kotlin.png" },
      { name: "Rails", image: "/rails.png" },
      { name: "Firebase", image: "/firebase.png" },
      { name: ".NET", image: "/net.png" },
    ],
  ];
  const [isHovering, setIsHovering] = useState(false);
  const [element, setElement] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: null, y: null });
  const scaleRef = useRef(null);
  console.log(hoverPosition);
  const cardRefs = useRef(data.map((item) => React.createRef()));

  const handleMouseEnter = (e, i) => {
    console.log(scaleRef.current);
    scaleRef.current.style.backgroundColor = "white";
    scaleRef.current.classList.add("left-0");
    console.log(cardRefs?.current[i].current?.getBoundingClientRect());
    console.log(e);
    setElement(i);
    setIsHovering(true);
    setHoverPosition({ x: e.clientX, y: e.clientY });
    box.current.style.visibility = "visible";
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverPosition({ x: null, y: null });
    box.current.style.visibility = "hidden";
  };

  setTimeout(() => {
    if (counter < 5) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  }, 1000);

  const ref = useRef();
  const isOnScreen = useOnScreen(ref);
  const sliderRef = useRef();
  const [count, setCount] = useState(0);
  console.log(count);
  const imageRef = useRef(null);

  const box = useRef(null);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("mousemove", (e) => {
  //       console.log(box);
  //       box.current.style.left = `${e.clientX + 30}px`;
  //       // box.current.style.transition = `all .1s ease-out`;
  //       box.current.style.top = `${e.clientY}px`;
  //     });
  //   }
  // }, []);

  useEffect(() => {
    const t1 = gsap.to(".header4", {
      scrollTrigger: {
        trigger: ".header4",
        scroller: "body",
        start: "top bottom",
      },
      y: 0,
      rotate: 0,
      duration: 0.05,
      stagger: 0.05,
      delay: (el, i) => 6500 + 30 * i,
    });
    return () => {
      t1.kill();
    };
  }, []);

  return (
    <section
      className="cursor-none z-[50] px-2 sm:px-6 md:px-10 py-20 w-screen "
      id="achievements"
      ref={ref}
    >
      <div className="cursor-none flex flex-col gap-10 relative justify-center items-center w-full">
        <div className=" overflow-hidden w-full">
          <h3 className="cursor-none text-xl sm:text-2xl md:text-5xl font-bold heading-7 text-secondary md:text-inherit font-monumentBold  text-center px-0 hover:skew-x-12 hover:scale-110 transition-all duration-500">
            {"Web App Technologies We Use".split("").map((word) => {
              return word === " " ? (
                <span
                  className="header4 inline-block transition-all duration-300"
                  style={{ transform: "translateY(100px)" }}
                >
                  &nbsp;
                </span>
              ) : (
                <span
                  className=" header4 inline-block transition-all duration-300"
                  style={{ transform: "translateY(100px)" }}
                >
                  {word}
                </span>
              );
            })}
          </h3>
        </div>
        <div className="cursor-none overflow-hidden grid grid-rows-4 gap-2  overflow-x-scroll header-4 w-screen sm:px-4 md:px-10 py-4">
          {data.map((groups, j) => (
            <Marquee
              key={j}
              direction={j % 2 === 0 ? "right" : "left"}
              gradient={false}
              speed={50}
              className="flex gap-10 min-w-screen overflow-hidden"
            >
              <div
                className="flex gap-10 py-10 overflow-visible"
                style={{
                  transform: `${
                    j % 2 === 0
                      ? `translateX(${yOffset * 0.1}px)`
                      : `translateX(${-yOffset * 0.1}px)`
                  }`,
                }}
              >
                {groups.map((item, i) => (
                  <div key={i}>
                    <div
                      style={{ visibility: "hidden" }}
                      className="cursor-none  bg-blend-difference fixed -translate-y-1/2 pointer-events-none  z-[1000] h-10 text-black flex flex-col gap-4"
                      ref={box}
                    >
                      <div className="cursor-none  rounded-full px-10 py-1 w-fit bg-primary font-monumentRegular">
                        {" "}
                        {item.name}
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
                    <div
                      ref={cardRefs.current[i]}
                      value={i}
                      key={i}
                      // animate={{ y: [100, 0] }}
                      // transition={{ duration: 1 }}
                      // onMouseEnter={handleMouseEnter}
                      onMouseEnter={(e) => {
                        handleMouseEnter(e, i);
                      }}
                      onMouseLeave={handleMouseLeave}
                      className={classNames(
                        "shadow-lg rounded-lg p-10 justify-center flex overflow-hidden gap-2 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] flex-col items-center hover:text-secondary  grayscale hover:scale-110 transition-all hover:grayscale-0 duration-500 hover:-translate-y-4"
                      )}
                    >
                      <div
                        ref={scaleRef}
                        className="cursor-none absolute rounded-full bg-primary ro top-0 left-0 opacity-20 h-[1px] w-[1px]  transition-all duration-1000"
                        style={
                          isHovering && element === i
                            ? { transform: "scale(60000%)" }
                            : {}
                        }
                      ></div>
                      <div className="cursor-none bg-tertiary p-10 rounded-full">
                        <img
                          ref={imageRef}
                          src={item.image}
                          alt=""
                          className="cursor-none w-12 transition-all duration-300"
                        />
                      </div>
                      <h5 className="cursor-none text-2xl uppercase font-monumentRegular text-center">
                        {item.name}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header4;
