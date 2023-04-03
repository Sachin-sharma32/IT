import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import Smooth from "../utils/Smooth";

const SlaveryStatement = () => {
  return (
    <Smooth>
      <div className="cursor-none  bg-secondary h-[40vh] flex items-end">
        <h1 className="cursor-none  text-2xl md:text-5xl text-white mb-10 ml-10 uppercase font-monumentRegular">
          MODERN SLAVERY STATEMENT
        </h1>
      </div>
      <div className="cursor-none  h-fit pt-10 flex justify-center items-center px-4 md:px-10 mt-20">
        <motion.div
          initial={{ scale: 0.7, y: [0, 10] }}
          whileInView={{ y: [0, 0], scale: 1 }}
          transition={{ duration: 1 }}
          className="cursor-none  border-2 border-primary  rounded-tl-none rounded-br-none md:rounded-bl-[100px] md:rounded-tr-[100px] rounded-bl-[50px] rounded-tr-[50px] p-6 md:p-10 flex flex-col gap-4"
        >
          <p className="cursor-none text-lg ">
            IT Xcelerate is committed to preventing and eradicating modern
            slavery in all forms within our operations and supply chain. We
            recognize the responsibility that comes with our role as a business
            and are dedicated to upholding our ethical values and principles.
          </p>
        </motion.div>
      </div>
      <button
        className="cursor-none  bg-gray-500 text-white px-4 py-1 rounded-lg border-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-300 absolute top-[45vh] right-4"
        onClick={() => {
          window.print();
        }}
      >
        PRINT
      </button>
      <div className="cursor-none flex flex-col p-10 gap-8 leading-[1.9] font-[400] text-[#444444] mt-10">
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Our Commitment to Tackling Modern Slavery
          </h2>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Modern slavery is a violation of human rights and is dfined as any
            conduct that involves the recruitment, movement, or exploitation of
            a person for financial or personal gain. We do not tolerate any form
            of modern slavery within our organization and supply chain and have
            put in place measures to prevent and detect it.
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            We have a zero-tolerance policy towards modern slavery and are
            committed to ensuring that all of our employees and suppliers uphold
            this policy. We also ensure that our policies, procedures, and
            training are up-to-date and aligned with the UK Modern Slavery Act
            of 2015.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Supply Chain Risk Assessment
          </h2>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            We acknowledge that modern slavery can occur at any stage of the
            supply chain, and therefore, we conduct regular risk assessments of
            our supply chain to identify and address any potential risks. Our
            risk assessment considers the countries of origin of our suppliers,
            the sectors they operate in, and the nature of the goods and
            services they provide.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Supplier Compliance
          </h2>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            We require all of our suppliers to uphold the same standards as we
            do when it comes to preventing and eradicating modern slavery. We
            work closely with our suppliers to ensure they share our commitment
            to tackling modern slavery, and we conduct regular checks to ensure
            compliance. We also include anti-slavery and human trafficking
            clauses in our contracts with our suppliers.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Due Diligence
          </h2>
          <p className="text-justify">
            We have implemented a due diligence program that involves a
            risk-based approach to assess and manage modern slavery risks within
            our supply chain.
          </p>
          <p className="cursor-none  italic">
            {" "}
            Our due diligence program includes the following steps:
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Identification of potential risks and their severity
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Assessment of existing and new suppliers
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Collaboration with suppliers to address any potential risks
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Monitoring of suppliers’ compliance with our anti-slavery policy
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Training and Awareness
          </h2>
          <p className="cursor-none  italic">
            We provide training to our employees and suppliers to raise
            awareness about modern slavery and its impact. Our training covers
            the identification of modern slavery risks, how to report any
            concerns or suspicions, and the importance of upholding our
            anti-slavery policy.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Reporting Modern Slavery Concerns
          </h2>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            We encourage anyone who has any concerns or suspicions regarding
            modern slavery within our organization or supply chain to report it
            immediately. All reports will be taken seriously, and we will work
            with relevant authorities to investigate and take appropriate
            action.
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Our Modern Slavery Statement is reviewed and updated annually to
            ensure it reflects our ongoing commitment to preventing and
            eradicating modern slavery.
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

export default SlaveryStatement;

SlaveryStatement.getInitialProps = async (context) => {
  return {
    title: "ITXcelerate - Slavery Statement",
    image: "/logo-3.png",
    summery:
      "IT Xcelerate is committed to preventing and eradicating modern slavery in all forms within our operations and supply chain. We recognize the responsibility that comes with our role as a business and are dedicated to upholding our ethical values and principles.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "slaveryStatement",
  };
};
