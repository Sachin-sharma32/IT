import React from "react";
import Smooth from "../utils/Smooth";

const Careers = () => {
  return (
    <Smooth>
      <div className="cursor-none  min-h-screen effect">
        <div className="cursor-none flex h-screen w-full justify-center items-center text-black">
          <h1 className="cursor-none text-5xl text-center uppercase px-10">
            We are not hiring currently
          </h1>
        </div>
      </div>
    </Smooth>
  );
};

export default Careers;

Careers.getInitialProps = async (context) => {
  return {
    title: "ITXcelerate - Careers",
    image: "/logo-3.png",
    summery:
      "IT Xcelerate is a growing IT services company with a focus on web development, mobile app development, and digital transformation solutions. We are a team of dedicated and skilled professionals who are passionate about what we do, and we are always looking for talented individuals to join our team.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "careers",
  };
};
