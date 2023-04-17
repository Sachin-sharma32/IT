import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Smooth from "../utils/Smooth";
import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { Power1 } from "gsap";
// gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // useEffect(() => {
  //   let t1 = gsap.to(".image-right-0", {
  //     scrollTrigger: {
  //       trigger: ".image-right-0",
  //       scroller: "body",
  //       // markers: true,
  //       start: "top top",
  //       // scrub: true,
  //       // pin: true,
  //     },
  //     x: 0,
  //     duration: 1,
  //     ease: Power1.easeInOut,
  //     delay: 0,
  //   });
  //   gsap.to(".image-right-1", {
  //     scrollTrigger: {
  //       trigger: ".image-right-1",
  //       scroller: "body",
  //       // markers: true,
  //       start: "top top",
  //       // scrub: true,
  //       // pin: true,
  //     },
  //     x: 0,
  //     duration: 1,
  //     ease: Power1.easeInOut,
  //     delay: 0,
  //   });
  //   gsap.to(".image-right-2", {
  //     scrollTrigger: {
  //       trigger: ".image-right-2",
  //       scroller: "body",
  //       // markers: true,
  //       start: "top top",
  //       // scrub: true,
  //       // pin: true,
  //     },
  //     x: 0,
  //     duration: 1,
  //     ease: Power1.easeInOut,
  //     delay: 0,
  //   });
  //   gsap.to(".image-right-3", {
  //     scrollTrigger: {
  //       trigger: ".image-right-3",
  //       scroller: "body",
  //       // markers: true,
  //       start: "top top",
  //       // scrub: true,
  //       // pin: true,
  //     },
  //     x: 0,
  //     duration: 1,
  //     ease: Power1.easeInOut,
  //     delay: 0,
  //   });
  //   gsap.to(".image-right-4", {
  //     scrollTrigger: {
  //       trigger: ".image-right-4",
  //       scroller: "body",
  //       // markers: true,
  //       start: "top top",
  //       // scrub: true,
  //       // pin: true,
  //     },
  //     x: 0,
  //     duration: 1,
  //     ease: Power1.easeInOut,
  //     delay: 0,
  //   });
  //   gsap.to(".image-right-5", {
  //     scrollTrigger: {
  //       trigger: ".image-right-5",
  //       scroller: "body",
  //       // markers: true,
  //       start: "top top",
  //       // scrub: true,
  //       // pin: true,
  //     },
  //     x: 0,
  //     duration: 1,
  //     ease: Power1.easeInOut,
  //     delay: 0,
  //   });
  //   return () => {
  //     t1.kill();
  //   };
  // }, []);
  const data = [
    {
      title:
        "  Our vision is to be the leading provider of technology solutions for businesses across the globe. We are passionate about technology and committed to delivering solutions that make a positive impact on our clients&apos; businesses.",
      image: "/bs-1.jpg",
    },
    {
      title:
        "At IT Xcelerate, we take pride in our team of experts, who are some of the most skilled and experienced professionals in their respective fields. Our developers, designers, and project managers are passionate about technology and committed to delivering solutions that make a positive impact on our clients&apos; businesses.",
      image: "/bs-2.jpg",
    },
    {
      title:
        " Our journey began in 2022 when we identified a need for a technology services company that could deliver top-quality solutions to businesses across different industries. Since then, we have grown to become a trusted partner for our clients, offering a comprehensive suite of services that includes web and app development, UI/UX design, software engineering, cloud computing, artificial intelligence, machine learning, and more.",
      image: "/bs-3.jpg",
    },
    {
      title:
        " We also believe in delivering exceptional customer service and ensuring that our clients are satisfied with every aspect of our services. From our initial consultation to post-project support, we strive to provide a seamless and stress-free experience for our clients.",
      image: "/bs-4.jpg",
    },
    {
      title:
        " We take a collaborative approach to project management, working closely with our clients to develop solutions that are tailored to their specific needs. Our team of experts takes the time to understand our clients&apos; business goals, challenges, and pain points to provide solutions that meet their requirements and exceed their expectations.",
      image: "/bs-5.jpg",
    },
    {
      title:
        " Our commitment to quality, attention to detail, and use of the latest technologies and tools sets us apart from our competitors. We are always learning and expanding our knowledge base to ensure that we are up-to-date with the latest technological advancements and industry trends.",
      image: "/bs-6.jpg",
    },
  ];
  return (
    <Smooth>
      <div className="cursor-none  pb-32 leading-[1.9] font-[400] text-secondary">
        <div className="cursor-none  min-h-screen flex gap-10 flex-col">
          <div className="cursor-none  bg-secondary min-h-[40vh] flex items-end">
            <h1 className="cursor-none  text-4xl sm:text-5xl text-white mb-10 ml-10 uppercase font-satoshi font-extrabold font-extrabold">
              About Us
            </h1>
          </div>
          <div className="cursor-none h-fit py-10 flex justify-center items-center px-10">
            <motion.div
              initial={{ scale: 0.7}}
              whileInView={{ y: [10, 0], scale: 1 }}
              transition={{ duration: 1 }}
              className="cursor-none  border-2 border-primary  rounded-tl-none rounded-br-none md:rounded-bl-[100px] md:rounded-tr-[100px] rounded-bl-[50px] rounded-tr-[50px] p-6 md:p-10 flex flex-col gap-4"
            >
              <h2 className="cursor-none  text-5xl font-satoshi font-extrabold font-extrabold">
                OUR PURPOSE
              </h2>
              <p className="cursor-none text-lg ">
                Delivering exceptional customer service and ensuring that our
                clients are satisfied with every aspect of our services. From
                our initial consultation to post-project support, we strive to
                provide a seamless and stress-free experience for our clients.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="cursor-none  h-fit px-4 md:px-10 min-h-screen flex flex-col gap-10">
          {data.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row w-[]"
              } relative h-fit w-fit flex items-center flex-col `}
            >
              {i % 2 === 0 ? (
                <motion.img
                  initial={{ x: 500 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  width={500}
                  height={500}
                  src={item.image}
                  className={`brightness-50 h-full hidden md:flex rounded-2xl image-right-${i}`}
                  alt=""
                />
              ) : (
                <motion.img
                  initial={{ x: -500 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  width={500}
                  height={500}
                  src={item.image}
                  className={`brightness-50 h-full hidden md:flex rounded-2xl image-right-${i}`}
                  alt=""
                />
              )}
              <Image
                alt="random image"
                width={100}
                height={100}
                src={item.image}
                className="cursor-none brightness-50 h-full rounded-b-none w-[100%] rounded-2xl md:hidden"
              />
              <div className="cursor-none bg-gradient-to-r rounded-t-none sm:rounded-t-2xl rounded-2xl bg-white shadow-lg w-full md:w-[50vw] p-4 md:p-10  h-fit text-lg">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Smooth>
  );
};

export default About;

About.getInitialProps = async (context) => {
  return {
    title: "ITXcelerate - About",
    image: "/logo-3.png",
    summery:
      "Delivering exceptional customer service and ensuring that our clients are satisfied with every aspect of our services. From our initial consultation to post-project support, we strive to provide a seamless and stress-free experience for our clients.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "about",
  };
};
