import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import { motion } from "framer-motion";
import classNames from "classnames";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";

const Header4 = ({ yOffset, prev }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const circle = useRef(null);
  const data = [
    [
      { name: "Python", image: "/python.png" },
      { name: "Docker", image: "/docker.png" },
      { name: "ReactJS", image: "/react.png" },
      { name: "MongoDB", image: "/mongodb.png" },
      { name: "Kubernetes", image: "/kubernetes.png" },
      { name: "Firebase", image: "/firebase.png" },
    ],
    [
      { name: "NodeJS", image: "/nodejs.png" },
      { name: "AWS", image: "/aws.png" },
      { name: "PHP", image: "/php.png" },
      { name: "Java", image: "/java.png" },
      { name: "Ruby", image: "/ruby.png" },
      { name: ".NET", image: "/net.png" },
    ],
    [
      { name: "React Native", image: "/reactnative.png" },
      { name: "angular", image: "/angular.png" },
      { name: "swift", image: "/swift.png" },
      { name: "kotlin", image: "/kotlin.png" },
      { name: "Rails", image: "/rails.png" },
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
    console.log(e);
    setElement(i);
    setIsHovering(true);
    setHoverPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverPosition({ x: null, y: null });
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
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        const decX = e.clientX / window.innerWidth;
        const decY = e.clientY / window.innerHeight;
        circle.current.style.transform = `translate(${-decX * 10}%, ${
          -decY * 10
        }%)`;
      });
    }
  }, []);

  return (
    <section
      className="cursor-none z-30 bg-[#f8f8f8] pb-20 h-[120vh] md:h-[200vh] px-2 sm:px-6 md:px-10 py-10 md:py-20 w-screen relative "
      id="achievements"
      ref={ref}
    >
      <Image
        src="/circle.png"
        width={1000}
        height={1000}
        className="w-[500px] h-[500px] z-[-10] absolute top-[-90px] right-[-80px]"
        ref={circle}
      />
      <div className="cursor-none flex flex-col gap-10 relative justify-center items-center w-full">
        <div
          className=" overflow-hidden w-full"
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          <h3 className="cursor-none hidden mx-auto flex justify-center text-center md:flex text-xl sm:text-2xl md:text-5xl font-bold heading-7 text-secondary md:text-inherit   text-center px-0 hover:skew-x-12 hover:scale-110 transition-all duration-500">
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
          <h3 className="cursor-none md:hidden text-2xl  font-bold heading-7 text-secondary md:text-inherit   text-center px-0 hover:skew-x-12 hover:scale-110 transition-all duration-500">
            Web App Technologies We Use
          </h3>
        </div>
        <div className="cursor-none overflow-hidden grid grid-rows-4  overflow-x-scroll header-4 w-screen sm:px-4 md:px-10 py-4">
          {data.map((groups, j) => (
            <Marquee
              key={j}
              direction={j % 2 === 0 ? "right" : "left"}
              gradient={false}
              speed={50}
              className={`flex gap-10 min-w-screen z-40 overflow-y-visible`}
            >
              <div
                className="flex gap-10 py-10 overflow-y-visible"
                // style={{
                //   transform: `${
                //     j % 2 === 0
                //       ? `translateX(${yOffset * 0.1}px)`
                //       : `translateX(${-yOffset * 0.1}px)`
                //   }`,
                // }}
              >
                {groups.map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: "100px" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    ref={cardRefs.current[i]}
                    value={i}
                    key={i}
                    onMouseEnter={(e) => {
                      handleMouseEnter(e, i);
                    }}
                    onMouseLeave={handleMouseLeave}
                    className={classNames(
                      ` shadow-lg backdrop:opacity-20 backdrop-blur-3xl rounded-lg p-10 group justify-center flex overflow-hidden gap-2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px] flex-col items-center hover:text-secondary  grayscale hover:scale-110 transition-all bg-white hover:grayscale-0 duration-500 hover:-translate-y-4`
                    )}
                  >
                    <div
                      ref={scaleRef}
                      className="cursor-none absolute group-hover:translate-y-0 group-hover:translate-x-0 rounded-full bg-primary ro top-0 left-0 opacity-20 h-full w-full scale-150 -translate-y-[300px] -translate-x-[300px]  transition-all duration-1000"
                    ></div>
                    <div className="cursor-none bg-tertiary p-10 rounded-full">
                      <img
                        ref={imageRef}
                        src={item.image}
                        alt=""
                        className="cursor-none w-12 transition-all duration-300"
                      />
                    </div>
                    <h5 className="cursor-none text-2xl uppercase font-satoshi font-extrabold text-center">
                      {item.name}
                    </h5>
                  </motion.div>
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
