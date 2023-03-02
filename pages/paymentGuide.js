import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";

const PaymentGuide = () => {
    return (
        <div>
            <div className=" bg-cyan-500 h-[40vh] flex items-end">
                <h1 className=" text-5xl text-white mb-10 ml-10 uppercase">
                    PAYMENT GUIDE FOR SUPPLIERS
                </h1>
            </div>
            <div className=" h-fit pt-10 flex justify-center items-center px-20">
                <motion.div
                    whileInView={{ x: [100, 0], scale: 1 }}
                    transition={{ duration: 1 }}
                    className=" border-2 border-purple-500 text-black rounded-tl-none rounded-br-none rounded-bl-[100px] rounded-tr-[100px] p-10 flex flex-col gap-4"
                >
                    <p className="text-lg ">
                        At IT Xcelerate, we are dedicated to building and
                        maintaining strong relationships with our suppliers. We
                        understand that timely payment is essential to
                        maintaining these relationships, and we have developed
                        this Payment Guide for Suppliers to ensure that our
                        payment processes are transparent, consistent, and
                        efficient.
                    </p>
                </motion.div>
            </div>
            <button
                className=" bg-gray-500 text-white px-4 py-1 rounded-lg border-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-300 absolute top-[45vh] right-4"
                onClick={() => {
                    window.print();
                }}
            >
                PRINT
            </button>
            <div className="flex flex-col p-10 gap-8 leading-[1.9] font-[400] text-[#444444] mt-10">
                <div>
                    <h2 className=" text-2xl mb-2">Payment Terms</h2>
                    <p>
                        Our standard payment terms are [insert payment terms],
                        which begin from the date of invoice receipt. We strive
                        to process payments as quickly as possible, but please
                        note that the actual payment processing time may vary
                        depending on a number of factors, such as the complexity
                        of the invoice, accuracy of information, and payment
                        method.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Invoicing</h2>
                    <p>
                        All suppliers must submit invoices electronically to
                        sachin2sharma001@gmail.com.
                    </p>
                    <p className=" italic">
                        Invoices should include the following information:
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        IT Xcelerate purchase order number (if applicable)
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        Description of goods or services provided
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        Quantity and unit price of goods or services provided
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        Total invoice amount
                    </p>
                    <p>
                        <KeyboardArrowRightIcon className=" text-blue-500" />
                        Payment due date
                    </p>
                    <p>
                        To ensure timely processing, please ensure that all
                        invoices are accurate, complete, and conform to our
                        invoice requirements. Invoices that do not meet our
                        standards may be returned to the supplier for
                        correction, which may result in a delay in payment
                        processing.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Payment Methods</h2>
                    <p>
                        We offer several payment methods to our suppliers,
                        including electronic funds transfer (EFT) and check
                        payments. Please indicate your preferred payment method
                        on your invoice. If you have any questions about payment
                        methods, please contact [insert contact information].
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Late Payments</h2>
                    <p>
                        We understand the importance of timely payments to our
                        suppliers and strive to make all payments on or before
                        the due date. In the event that a payment is delayed, we
                        will promptly communicate with the supplier to resolve
                        the issue. We do not charge any interest or late fees
                        for delayed payments.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Changes to This Policy</h2>
                    <p className=" italic">
                        We reserve the right to modify this Payment Guide for
                        Suppliers at any time without prior notice. Your
                        continued work with IT Xcelerate after any changes to
                        this page constitutes your acceptance of the modified
                        policy.
                    </p>
                </div>
                <div>
                    <h4>
                        <span className=" font-bold">Last Updated : </span>
                        March 1, 2023
                    </h4>
                </div>
            </div>
        </div>
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