import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Smooth from "../utils/Smooth";

const Trademarks = () => {
  return (
    <Smooth>
      <div className="cursor-none  bg-secondary h-[40vh] flex items-end text-secondary">
        <h1 className="cursor-none  text-3xl md:text-5xl text-white mb-10 ml-10 uppercase font-satoshi">
          TRADEMARKS
        </h1>
      </div>
      <button
        className="cursor-none  bg-gray-500 text-white px-4 py-1 rounded-lg border-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-300 absolute top-[45vh] right-4"
        onClick={() => {
          window.print();
        }}
      >
        PRINT
      </button>
      <div className="cursor-none flex flex-col p-10 gap-8 leading-[1.9] font-[400]  mt-10">
        <div>
          <p className="text-justify">
            IT Xcelerate is a registered trademark of our company. The IT
            Xcelerate logo, as well as other logos and graphics used on our
            website, are also trademarks of IT Xcelerate. These trademarks are
            protected by national and international trademark laws.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-satoshi">
            Prohibited Uses
          </h2>
          <p className="text-justify">
            You may not use any of the IT Xcelerate trademarks without our
            express written consent. This includes using our trademarks in any
            way that is likely to cause confusion or suggest endorsement or
            affiliation with IT Xcelerate. Prohibited uses of our trademarks
            include, but are not limited to:
            <br />
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />{" "}
            Registering domain names that include our trademarks without our
            permission.
            <br />
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />{" "}
            Using our trademarks in any way that is likely to cause confusion or
            dilute their distinctiveness.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-satoshi">
            Reporting Trademark Infringement
          </h2>
          <p className="text-justify">
            If you believe that your intellectual property rights have been
            infringed by IT Xcelerate or by a third party using our trademarks
            without permission, please contact us at [contact information]. We
            take all reports of trademark infringement seriously and will
            investigate any such reports promptly.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-satoshi">
            Third-Party Trademarks
          </h2>
          <p className="text-justify">
            We respect the trademarks of others and expect our customers and
            users to do the same. Any third-party trademarks used on our website
            or in our materials are the property of their respective owners. We
            make no claim to any rights in those trademarks.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-satoshi">
            Changes to This Policy
          </h2>
          <p className="text-justify">
            We reserve the right to modify this Trademarks page at any time
            without prior notice. Your continued use of our website after any
            changes to this page constitutes your acceptance of the modified
            policy.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-satoshi">
            Links to Third-Party Websites
          </h2>
          <p className="text-justify">
            Our website may contain links to third-party websites that are not
            under our control. We are not responsible for the content or privacy
            practices of any linked websites. We encourage you to review the
            privacy policies of any linked websites.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-satoshi">
            Changes to This Privacy Statement
          </h2>
          <p className="text-justify">
            We reserve the right to modify this privacy statement at any time
            without prior notice. Your continued use of our website or our
            services after any changes to this privacy statement constitutes
            your acceptance of the modified privacy statement.
          </p>
        </div>
        <div>
          <h4>
            <span className="cursor-none  font-bold">Last Updated : </span>
            March 1, 2023
          </h4>
        </div>
      </div>
    </Smooth>
  );
};

export default Trademarks;

Trademarks.getInitialProps = async (context) => {
  return {
    title: "ITXcelerate - Trademarks",
    image: "/logo-3.png",
    summery:
      "IT Xcelerate is a registered trademark of our company. The IT Xcelerate logo, as well as other logos and graphics used on our website, are also trademarks of IT Xcelerate. These trademarks are protected by national and international trademark laws.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "trademarks",
  };
};
