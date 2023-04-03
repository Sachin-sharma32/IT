import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import Smooth from "../utils/Smooth";

const PaymentGuide = () => {
  return (
    <Smooth>
      <div className="cursor-none  bg-secondary h-[40vh] flex items-end">
        <h1 className="cursor-none  text-xl md:text-5xl text-white mb-10 ml-10 uppercase font-monumentRegular">
          PAYMENT GUIDE FOR SUPPLIERS
        </h1>
      </div>
      <div className="cursor-none  h-fit pt-10 flex justify-center items-center px-4 md:px-20 mt-10">
        <motion.div
          initial={{ scale: 0.7, y: [0, 10] }}
          whileInView={{ y: [0, 0], scale: 1 }}
          transition={{ duration: 1 }}
          className="cursor-none  border-2 border-primary  rounded-tl-none rounded-br-none md:rounded-bl-[100px] md:rounded-tr-[100px] rounded-bl-[50px] rounded-tr-[50px] p-6 md:p-10 flex flex-col gap-4"
        >
          <p className="cursor-none text-lg ">
            At IT Xcelerate, we are dedicated to building and maintaining strong
            relationships with our suppliers. We understand that timely payment
            is essential to maintaining these relationships, and we have
            developed this Payment Guide for Suppliers to ensure that our
            payment processes are transparent, consistent, and efficient.
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
            Payment Terms
          </h2>
          <p className="text-justify">
            Our standard payment terms are [insert payment terms], which begin
            from the date of invoice receipt. We strive to process payments as
            quickly as possible, but please note that the actual payment
            processing time may vary depending on a number of factors, such as
            the complexity of the invoice, accuracy of information, and payment
            method.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Invoicing
          </h2>
          <p className="text-justify">
            All suppliers must submit invoices electronically to
            sachin2sharma001@gmail.com.
          </p>
          <p className="cursor-none  italic">
            Invoices should include the following information:
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            IT Xcelerate purchase order number (if applicable)
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Description of goods or services provided
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Quantity and unit price of goods or services provided
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Total invoice amount
          </p>
          <p className="text-justify">
            <KeyboardArrowRightIcon className="cursor-none  text-primary" />
            Payment due date
          </p>
          <p className="text-justify">
            To ensure timely processing, please ensure that all invoices are
            accurate, complete, and conform to our invoice requirements.
            Invoices that do not meet our standards may be returned to the
            supplier for correction, which may result in a delay in payment
            processing.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Payment Methods
          </h2>
          <p className="text-justify">
            We offer several payment methods to our suppliers, including
            electronic funds transfer (EFT) and check payments. Please indicate
            your preferred payment method on your invoice. If you have any
            questions about payment methods, please contact [insert contact
            information].
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Late Payments
          </h2>
          <p className="text-justify">
            We understand the importance of timely payments to our suppliers and
            strive to make all payments on or before the due date. In the event
            that a payment is delayed, we will promptly communicate with the
            supplier to resolve the issue. We do not charge any interest or late
            fees for delayed payments.
          </p>
        </div>
        <div>
          <h2 className="cursor-none  text-lg mb-2 font-monumentRegular">
            Changes to This Policy
          </h2>
          <p className="cursor-none  italic">
            We reserve the right to modify this Payment Guide for Suppliers at
            any time without prior notice. Your continued work with IT Xcelerate
            after any changes to this page constitutes your acceptance of the
            modified policy.
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

export default PaymentGuide;

PaymentGuide.getInitialProps = async (context) => {
  return {
    title: "ITXcelerate - Payment Guide",
    image: "/logo-3.png",
    summery:
      "At IT Xcelerate, we are dedicated to building and maintaining strong relationships with our suppliers. We understand that timely payment is essential to maintaining these relationships, and we have developed this Payment Guide for Suppliers to ensure that our payment processes are transparent, consistent, and efficient.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "paymentGuide",
  };
};
