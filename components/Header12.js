import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { setHovering } from "../redux/slices";
gsap.registerPlugin(ScrollTrigger);

const Header12 = () => {
  const [active, setActive] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const t1 = gsap.to(".header7", {
      scrollTrigger: {
        trigger: ".header7",
        scroller: "body",
        start: "bottom bottom",
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
  const data = [
    {
      title: "Education",
      image: "/education.png",
      desc: `At ITXcelerate, we understand the importance of education and the role that technology plays in facilitating learning. That's why we offer a wide range of web and app development solutions that cater specifically to the education sector, including e-learning platforms, learning management systems, and educational apps.`,
    },
    {
      title: "art and museum",
      image: "/art.png",
      desc: `As a leading provider of innovative and customized web and app development solutions, ITXcelerate is proud to serve the art and museum industry. Our solutions include websites, mobile apps, and digital exhibits that showcase art and artifacts in a visually stunning and engaging way, helping museums and galleries to connect with audiences in new and exciting ways.`,
    },
    {
      title: "automobile and logistics",
      image: "/automobile.png",
      desc: `In the fast-paced world of automobile and logistics, ITXcelerate is dedicated to helping businesses stay ahead of the curve with cutting-edge web and app development solutions. Our services include website design and development, logistics management systems, and fleet management apps that help businesses to streamline operations and improve efficiency.`,
    },
    {
      title: "food and beverage",
      image: "/food.png",
      desc: `At ITXcelerate, we're passionate about helping businesses in the food and beverage industry to grow and succeed in the digital age. From restaurant websites and online ordering systems to mobile apps and loyalty programs, our solutions are designed to help businesses attract and retain customers in a highly competitive market.`,
    },
    {
      title: "hospitality",
      image: "/hospitality.png",
      desc: `In the hospitality industry, providing exceptional customer experiences is key to success. That's why ITXcelerate offers a range of web and app development solutions that cater specifically to the hospitality sector, including hotel booking systems, restaurant reservation apps, and customer loyalty programs.`,
    },
    {
      title: "healthcare",
      image: "/healthcare.png",
      desc: `ITXcelerate understands the unique challenges facing the healthcare industry, and we're committed to providing innovative and customized web and app development solutions to meet those challenges. Our services include healthcare portals, patient management systems, and telemedicine apps that improve patient outcomes and streamline operations.`,
    },
    {
      title: "entertainment",
      image: "/entertainment.png",
      desc: `At ITXcelerate, we're passionate about creating engaging and immersive experiences for audiences in the entertainment industry. Our solutions include websites, mobile apps, and digital experiences that showcase movies, TV shows, and live events in a visually stunning and interactive way.`,
    },
    {
      title: "retail",
      image: "/retail.png",
      desc: `The retail industry is constantly evolving, and ITXcelerate is here to help businesses stay ahead of the curve with cutting-edge web and app development solutions. Our services include e-commerce platforms, mobile apps, and customer loyalty programs that help businesses to connect with customers and drive sales.`,
    },
    {
      title: "agriculture",
      image: "/agriculture.png",
      desc: `In the agriculture industry, technology plays a vital role in improving efficiency and productivity. That's why ITXcelerate offers a range of web and app development solutions that cater specifically to the agriculture sector, including farm management systems, crop monitoring apps, and e-commerce platforms for agricultural products.`,
    },
    {
      title: "fintech",
      image: "/fintech.png",
      desc: `ITXcelerate is proud to serve the fintech industry with innovative and customized web and app development solutions. Our services include online banking platforms, payment gateways, and mobile apps that help fintech companies to provide their customers with secure, convenient, and seamless financial experiences.`,
    },
    {
      title: "social media",
      image: "/social.png",
      desc: `In the highly competitive world of social media, ITXcelerate is dedicated to helping businesses stand out with engaging and user-friendly web and app development solutions. Our services include social media platforms, user-generated content apps, and influencer marketing platforms that help businesses to connect with audiences in new and exciting ways.`,
    },
  ];

  const box = useRef(null);
  const [counter, setCounter] = useState(1);
  setTimeout(() => {
    if (counter < 5) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  }, 1000);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        box.current.style.left = `${e.clientX + 30}px`;
        box.current.style.top = `${e.clientY}px`;
      });
    }
  }, []);

  return (
    <div className=" w-screen hidden md:flex min-h-screen p-20 z-50 bg-secondary flex flex-col gap-10 justify-center items-center">
      <div
        style={{ visibility: "hidden" }}
        className="cursor-none  bg-blend-difference fixed -translate-y-1/2 pointer-events-none  z-[1000] h-10 text- flex flex-col gap-4"
        ref={box}
      >
        <div className="cursor-none bg-primary rounded-full font-satoshi font-extrabold  px-10 py-1 w-fit">
          {" "}
          ITXCELERATE
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
            src={`/slider-${counter}.jpg`}
            className="cursor-none  w-80 brightness-50"
          />
          <p className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-satoshi font-extrabold font-extrabold text-white">
            {counter === 1 && "WEB"}
            {counter === 2 && "MOBILE"}
            {counter === 3 && "DEPLOYMENT"}
            {counter === 4 && "CLOUD"}
            {counter === 5 && "EXCELLENCE"}
          </p>
        </div>
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: [-100, 0] }}
        transition={{ duration: 1 }}
        className="cursor-none hidden md:flex mx-auto  text-2xl md:text-7xl uppercase font-satoshi font-extrabold overflow-hidden h-[110px] text-center px-4 sm:px-0 "
        onMouseEnter={() => {
          dispatch(setHovering(true));
        }}
        onMouseLeave={() => {
          dispatch(setHovering(false));
        }}
      >
        {"Industries We ".split("").map((word) => {
          return word === " " ? (
            <span
              className="header7 inline-block transition-all duration-300"
              style={{ transform: "translateY(100px)" }}
            >
              &nbsp;
            </span>
          ) : (
            <span
              className=" header7 inline-block transition-all duration-300 text-white"
              style={{ transform: "translateY(100px)" }}
            >
              {word}
            </span>
          );
        })}
        {"CATER".split("").map((word) => {
          return word === " " ? (
            <span
              className="header7 inline-block transition-all duration-300"
              style={{ transform: "translateY(100px)" }}
            >
              &nbsp;
            </span>
          ) : (
            <span
              className=" header7 inline-block transition-all duration-300 text-primary"
              style={{ transform: "translateY(100px)" }}
            >
              {word}
            </span>
          );
        })}
      </motion.h2>
      <h2
        className="cursor-none md:hidden  text-4xl md:text-5xl text-primary uppercase  md:h-[50px] font-satoshi font-extrabold md:overflow-hidden text-center px-4 sm:px-0  transition-all duration-500"
        onMouseEnter={() => {
          dispatch(setHovering(true));
        }}
        onMouseLeave={() => {
          dispatch(setHovering(false));
        }}
      >
        Industries We Cater
      </h2>
      <div className="flex w-full gap-2 h-[250px] justify-center items-center">
        {data.map((item, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [100, 0] }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className={`${
              i !== 10 ? "" : ""
            } h-full w-fit flex items-center justify-center border border-[1.5px] bg-fourth text-white rounded-3xl overflow-hidden`}
            onMouseEnter={() => {
              setActive(i);
              box.current.style.visibility = "visible";
            }}
            onMouseLeave={() => {
              setActive(null);
              box.current.style.visibility = "hidden";
            }}
            key={i}
          >
            <div
              className={`font-extrabold relative h-full flex items-center transition-all duration-1000 justify-center ${
                active === i ? "w-[400px]" : "w-[90px]"
              }`}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={` -rotate-90 uppercase min-w-[250px] z-[500]  text-center pl-4 ${
                  active === i ? "hidden" : "flex"
                }`}
              >
                {item.title}
              </motion.h3>
              <div
                className={`absolute top-0 left-0 h-full w-full transition-all duration-500`}
              >
                <div className=" relative w-full h-full">
                  <motion.div
                    className={` w-full h-full transition-all duration-500 overflow-hidden ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={item.image}
                      width={1000}
                      height={1000}
                      className={`brightness-50 h-full min-w-[300px]`}
                    />
                  </motion.div>
                  <motion.div
                    transition={{ delay: 0.7 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${
                      active === i ? "flex" : "hidden"
                    } transition-all duration-300 absolute font-normal text-xs bottom-0 w-[90%] text-justify text-white -translate-x-1/2 mb-4 left-1/2`}
                  >
                    {item.desc}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Header12;
