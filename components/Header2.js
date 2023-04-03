import React from "react";
import Marquee from "react-fast-marquee";

const Header2 = ({ yOffset, prev }) => {
  return (
    <div className="cursor-none  z-40 bg-black">
      <section className="cursor-none  ">
        <div className="cursor-none  p-4 z-40 w-screen">
          <Marquee
            className="cursor-none  w-screen"
            gradient={false}
            speed={50}
          >
            <div
              style={{
                transform: `translateX(${-yOffset - 10}px)`,
              }}
              className="cursor-none flex gap-20 px-10 dark:text-tertiary font-monumentRegular text-5xl overflow-hidden"
            >
              DESIGNING THE FUTURE OF TECHNOLOGY
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Header2;
