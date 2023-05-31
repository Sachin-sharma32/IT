import React from "react";
import Smooth from "../utils/Smooth";
import Print from "../components/Print";

const Terms = () => {
  return (
    <Smooth>
      <div className="cursor-none  bg-secondary h-[40vh] flex items-end text-secondary">
        <h1 className="cursor-none  text-2xl md:text-5xl text-white mb-10 ml-10 uppercase font-satoshi font-extrabold">
          TERMS TO USE
        </h1>
      </div>
    <Print/>
      <div className="cursor-none flex flex-col p-10 gap-8 leading-[1.9] font-[400]  mt-10">
        <div>
          <h2 className="cursor-none  text-lg font-satoshi font-extrabold">
            Intellectual Property Rights
          </h2>
          <p className="text-justify">
            All content on our website, including text, graphics, logos, images,
            and software, is protected by copyright and other intellectual
            property laws. You may not reproduce, distribute, or display any
            content from our website without our prior written consent.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg font-satoshi font-extrabold">
            Accuracy Of Information
          </h2>
          <p className="text-justify">
            We make every effort to ensure that the information on our website
            is accurate and up-to-date. However, we do not guarantee the
            accuracy, completeness, or reliability of any information on our
            website. We reserve the right to modify, update, or remove any
            content on our website without prior notice.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg font-satoshi font-extrabold">
            Links to Third-Party Websites
          </h2>
          <p className="text-justify">
            Our website may contain links to third-party websites that are not
            under our control. We are not responsible for the content or
            availability of any linked websites. We do not endorse any
            third-party websites or their content and cannot guarantee their
            accuracy, completeness, or reliability.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg font-satoshi font-extrabold">
            Disclaimer of Warranties
          </h2>
          <p className="text-justify">
            Our website and its contents are provided &quot;as is&quot; without
            warranty of any kind, either express or implied, including, but not
            limited to, the implied warranties of merchantability, fitness for a
            particular purpose, or non-infringement. We do not warrant that our
            website will be uninterrupted or error-free, or that our website or
            its server is free of viruses or other harmful components.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg font-satoshi font-extrabold">
            Limitation Of Liability
          </h2>
          <p className="text-justify">
            Under no circumstances shall IT Xcelerate be liable for any direct,
            indirect, incidental, special, or consequential damages arising out
            of or in connection with the use of our website or the information
            contained on our website.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg font-satoshi font-extrabold">
            Governing Law
          </h2>
          <p className="text-justify">
            These terms and conditions shall be governed by and construed in
            accordance with the laws of [jurisdiction]. Any dispute arising out
            of or in connection with these terms and conditions shall be subject
            to the exclusive jurisdiction of the courts of [jurisdiction].
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg font-satoshi font-extrabold">
            Changes To These Terms
          </h2>
          <p className="text-justify">
            We reserve the right to modify these terms and conditions at any
            time without prior notice. Your continued use of our website after
            any changes to these terms and conditions constitutes your
            acceptance of the modified terms and conditions.
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

export default Terms;

Terms.getInitialProps = async (context) => {
  return {
    title: "ITXcelerate - Terms Of Use",
    image: "/logo-3.png",
    summery:
      "We make every effort to ensure that the information on our website is accurate and up-to-date. However, we do not guarantee the accuracy, completeness, or reliability of any information on our website. We reserve the right to modify, update, or remove any content on our website without prior notice.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "terms",
  };
};
