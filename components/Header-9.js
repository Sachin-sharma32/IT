import React from "react";

const Header9 = () => {
  return (
    <div className=" bg-[#1d1f21] z-40 min-h-fit pb-20 p-4 md:p-20 text-white flex md:flex-row flex-col gap-10 w-screen">
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
        {[0, 1, 2, 3].map((item, i) => (
          <div
            key={i}
            className={`bg-[#e7e7e7] md:p-8 p-4  rounded-lg group flex border border-black flex-col gap-10 h-[250px] md:h-[300px] sticky `}
            style={{ top: `${80 + i * 20}px` }}
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
                  WEB DESIGN
                </h3>
                <div className="flex gap-2">
                  <p className="bg-red-500 group-hover:rotate-0 transition-all duration-300 px-4 w-fit rounded-full text-white md:text-base text-xs -rotate-[4deg]">
                    UI/UXD Design
                  </p>
                  <p className="bg-black group-hover:rotate-0 transition-all duration-300 px-4 w-fit rounded-full text-white md:text-base text-xs rotate-[4deg]">
                    Re-designs
                  </p>
                  <p className="border-2 group-hover:rotate-0 hidden md:flex transition-all duration-300 border-black text-black px-4 w-fit rounded-full md:text-base text-xs -rotate-[4deg]">
                    Landing pages
                  </p>
                </div>
              </div>
            </div>
            <p className=" text-sm md:text-base">
              Your website is the face of your business, which is why you need
              to invest as much energy into it as you do into the look and feel.
              That is why I focus on creating websites that are adaptable and
              customer-focused so they perfectly suit the needs of your
              business.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header9;
