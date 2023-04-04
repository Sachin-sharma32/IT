import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Header9 = () => {
  const [active, setActive] = useState([]);
  console.log(active);
  const handleMouseEnter = (e, i) => {
    box.current.style.visibility = "visible";
    setActive(data2[i]);
  };

  const handleMouseLeave = () => {
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
  const data = [
    {
      title: "FRONT END",
      desc: "In front-end development we offer a wide range of services to help businesses build visually appealing and interactive websites and applications. Front-end development involves the creation of the user interface of a website or application, including the layout, design, and functionality.",
      tags: ["NEXTJS", "FRAMER MOTION", "GSAP"],
    },
    {
      title: "MOBILE APPS",
      desc: "In mobile app development we can help businesses create mobile applications (android and IOS) that are user-friendly, visually appealing, and highly functional. By leveraging the latest technologies and industry best practices, IT services can ensure that businesses have a mobile app that meets the needs of their customers and users.",
      tags: ["REACT NATIVE", "FLUTTER", "NATIVE WIND"],
    },
    {
      title: "BACKEND AND DATABASES",
      desc: "In backend end and database development we typically offer the expertise of skilled developers who can build custom solutions tailored to the specific needs of a business. These services may include website and application development, testing, and maintenance.",
      tags: ["EXPRESS", "MONGOOSE", "AWS LAMBDA"],
    },
    {
      title: "UI/UX",
      desc: "These services may include UI/UX design, prototyping, testing, and refinement. The goal of UI/UX design is to create an application that is not only visually appealing but also easy to use, intuitive, and engaging for the end-users.",
      tags: ["FIGMA", "BLENDER", "PHOTOSHOP"],
    },
  ];
  const data2 = [
    [
      { name: "ReactJS", image: "/react.png" },
      { name: "angular", image: "/angular.png" },
      { name: "Kubernetes", image: "/kubernetes.png" },
      { name: "Docker", image: "/docker.png" },
    ],
    [
      { name: "MongoDB", image: "/mongodb.png" },
      { name: "Firebase", image: "/firebase.png" },
      { name: "Python", image: "/python.png" },
      { name: "NodeJS", image: "/nodejs.png" },
      { name: "AWS", image: "/aws.png" },
      { name: "PHP", image: "/php.png" },
    ],
    [
      { name: "Java", image: "/java.png" },
      { name: "React Native", image: "/reactnative.png" },
      { name: "Flutter", image: "/reactnative.png" },
      { name: "swift", image: "/swift.png" },
      { name: "kotlin", image: "/kotlin.png" },
    ],
    [
      { name: "Blender", image: "/blender.png" },
      { name: "Photoshop", image: "/photoshop.png" },
      { name: "Figma", image: "/figma.png" },
    ],
  ];
  return (
    <div className=" bg-secondary z-50 min-h-fit pb-20 p-4 md:p-20 text-white flex md:flex-row flex-col gap-10 w-screen">
      <div
        style={{ visibility: "hidden" }}
        className="cursor-none  bg-blend-difference fixed -translate-y-1/2 pointer-events-none  z-[1000] h-10 text- flex flex-col gap-4 bg-transparent"
        ref={box}
      >
        <div className="cursor-none bg-black rounded-full font-monumentRegular px-10 py-1 w-fit">
          {" "}
          ITXCELERATE
        </div>
        <div className="cursor-none  bg-opacity-50 px-1 pb-1 flex py-1 flex-col gap-1 bg-black relative rounded-md">
          <div className="cursor-none flex gap-2 pl-2">
            <div className="cursor-none  w-2 h-2 bg-black rounded-full"></div>
            <div className="cursor-none  w-2 h-2 bg-black rounded-full"></div>
            <div className="cursor-none  w-2 h-2 bg-black rounded-full"></div>
          </div>
          <div
            className={` shadow-lg backdrop:opacity-20 backdrop-blur-3xl rounded-lg p-4 group justify-center grid grid-cols-3 overflow-hidden gap-2 w-fit h-fit items-center hover:text-secondary  hover:scale-110 transition-all bg-[#e7e7e7] duration-500 justify-items-center hover:-translate-y-4`}
          >
            {active.map((item, i) => (
              <div className="w-fit">
                <div className="cursor-none bg-white p-4 w-20 h-20 rounded-full">
                  <img
                    src={`${item?.image}`}
                    className="cursor-none w-12 transition-all duration-300"
                  />
                </div>
                {/* <h5 className="cursor-none text-2xl uppercase font-monumentRegular text-center text-black">
                  {item?.name}
                </h5> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-[40%] w-[100%]  flex flex-col gap-6 md:sticky h-[300px] top-32">
        <div className="bg-white rounded-full text-black w-fit px-4 font-thin">
          Expertise
        </div>
        <h2 className="md:text-5xl text-3xl font-semibold">
          HOW CAN <span className="text-[#819090]">I HELP</span>
        </h2>
        <p>
          I specialise in offering bespoke web design and Webflow development
          services to small and big businesses alike. My aim is to help
          businesses establish a strong online presence and connect with their
          target audience effectively.
        </p>
        <div className="flex gap-4">
          <div className="bg-white rounded-full text-black w-fit px-4 font-thin">
            Expertise
          </div>
          <div className="bg-white rounded-full text-black w-fit px-4 font-thin">
            Expertise
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 text-black text-base w-full md:w-[60%]">
        {data.map((item, i) => (
          <div
            key={i}
            className={`bg-[#e7e7e7] md:p-8 p-4  rounded-lg group flex border border-black flex-col gap-10 h-[250px] md:h-[300px] sticky `}
            style={{ top: `${80 + i * 20}px` }}
            onMouseEnter={(e) => {
              handleMouseEnter(e, i);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-6">
              <div className="bg-[#1d1f21] w-fit h-fit p-4 md:p-6 rounded-lg">
                <svg
                  className="iconify iconify--simple-icons w-4 md:w-10 fill-white text-white"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.802 8.56s-1.946 6.103-2.105 6.607a4778.8 4778.8 0 0 0-1.484-11.473c-3.316 0-5.089 2.36-6.026 4.851l-2.565 6.637c-.015-.476-.36-6.565-.36-6.565c-.204-3.052-3-4.91-5.262-4.91l2.739 16.6c3.474-.015 5.347-2.361 6.328-4.852c0 0 2.09-5.398 2.176-5.643c.015.23 1.5 10.494 1.5 10.494c3.488 0 5.362-2.202 6.37-4.606L24 3.708c-3.445 0-5.261 2.346-6.198 4.851Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="md:text-3xl text-xl font-semibold">
                  {item.title}
                </h3>
                <div className="flex gap-2">
                  <p className="bg-red-500 group-hover:rotate-0 transition-all duration-300 px-4 w-fit rounded-full text-white md:text-base text-xs -rotate-[4deg]">
                    {item.tags[0]}
                  </p>
                  <p className="bg-black group-hover:rotate-0 transition-all duration-300 px-4 w-fit rounded-full text-white md:text-base text-xs rotate-[4deg]">
                    {item.tags[1]}
                  </p>
                  <p className="border-2 group-hover:rotate-0 hidden md:flex transition-all duration-300 border-black text-black px-4 w-fit rounded-full md:text-base text-xs -rotate-[4deg]">
                    {item.tags[2]}
                  </p>
                </div>
              </div>
            </div>
            <p className=" text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header9;
