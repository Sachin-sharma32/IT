import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/router";

const Contact = () => {
    const router = useRouter();
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const EMAIL_REGEX =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validationObject = yup.object({
        name: yup
            .string()
            .min(3, "Name should more than 3 characters")
            .required("This field is required"),
        email: yup
            .string()
            .matches(EMAIL_REGEX, "Provide valid email address")
            .required("This field is required"),
        company: yup.string().required("This field is required"),
        phone: yup
            .number("Please provide valid phone number")
            .min(10, "Provide a valid phone number"),
        message: yup.string().required("This field is required"),
    });

    const submitHandler = async (values, { resetForm }) => {
        console.log(values);
        const response = await axios.post("/api/connection", values);
        console.log(response);
        if (response.status === 200) {
            setSuccess(true);
            setMessage(response.data.message);
            resetForm({ values: "" });
            setTimeout(() => {
                router.push("/");
            }, 2000);
        }
    };

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    };
    console.log(success);
    return (
        <div className=" px-2 py-10 min-h-screen w-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-orange-200 effect">
            <Snackbar
                open={success}
                autoHideDuration={3000}
                onClose={() => {
                    setSuccess(false);
                }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                className="mt-10"
            >
                <Alert
                    onClose={() => {
                        setSuccess(false);
                    }}
                    severity="success"
                >
                    {message}
                </Alert>
            </Snackbar>
            <div className=" bg-black p-4 h-10 w-10 rounded-full flex justify-center items-center cursor-pointer overflow-hidden fixed top-4 left-4">
                <Link href="/">
                    <ArrowBackIosIcon className="text-white ml-2 transition-all duration-500 z-0 hover:trans hover:scale-105 hover:-translate-x-1" />
                </Link>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationObject}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={submitHandler}
            >
                {(props) => (
                    <Form className=" w-[400px] sm:w-[500px] flex flex-col bg-white p-10 rounded-lg">
                        <div className="flex flex-wrap  mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="name"
                                >
                                    Name
                                </label>
                                <Field
                                    name="name"
                                    className={`${
                                        props.errors.name && props.touched.name
                                            ? "border-red-500 placeholder:text-red-500 text-red-500"
                                            : "text-gray-700 border-gray-200 focus:border-gray-500"
                                    } appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                />
                                {props.errors.name && props.touched.name && (
                                    <p className="text-gray-600 text-xs italic">
                                        {props.errors.name}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap  mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="email"
                                >
                                    Email
                                </label>
                                <Field
                                    name="email"
                                    className={`${
                                        props.errors.email &&
                                        props.touched.email
                                            ? "border-red-500 placeholder:text-red-500 text-red-500"
                                            : "text-gray-700 border-gray-200 focus:border-gray-500"
                                    } appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    id="email"
                                    type="text"
                                    placeholder="examaple@gmail.com"
                                />
                                {props.errors.email && props.touched.email && (
                                    <p className="text-gray-600 text-xs italic">
                                        {props.errors.email}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap  mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="company"
                                >
                                    Company
                                </label>
                                <Field
                                    name="company"
                                    className={`${
                                        props.errors.company &&
                                        props.touched.company
                                            ? "border-red-500 placeholder:text-red-500 text-red-500"
                                            : "text-gray-700 border-gray-200 focus:border-gray-500"
                                    } appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    id="company"
                                    type="text"
                                    placeholder="Company"
                                />
                                {props.errors.company &&
                                    props.touched.company && (
                                        <p className="text-gray-600 text-xs italic">
                                            {props.errors.company}
                                        </p>
                                    )}
                            </div>
                        </div>
                        <div className="flex flex-wrap  mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="phone"
                                >
                                    Phone
                                </label>
                                <Field
                                    name="phone"
                                    className={`${
                                        props.errors.phone &&
                                        props.touched.phone
                                            ? "border-red-500 placeholder:text-red-500 text-red-500"
                                            : "text-gray-700 border-gray-200 focus:border-gray-500"
                                    } appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    id="phone"
                                    type="text"
                                    placeholder="1234567890"
                                />
                                {props.errors.phone && props.touched.phone && (
                                    <p className="text-gray-600 text-xs italic">
                                        {props.errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap  mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="message"
                                >
                                    Message
                                </label>
                                <Field
                                    as="textarea"
                                    name="message"
                                    className={`${
                                        props.errors.message &&
                                        props.touched.message
                                            ? "border-red-500 placeholder:text-red-500 text-red-500"
                                            : "text-gray-700 border-gray-200 focus:border-gray-500"
                                    } appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                    id="message"
                                    type="text"
                                    placeholder="Type your queries here...."
                                    rows={5}
                                />
                                {props.errors.message &&
                                    props.touched.message && (
                                        <p className="text-gray-600 text-xs italic">
                                            {props.errors.message}
                                        </p>
                                    )}
                            </div>
                        </div>
                        {/* <div className="flex flex-wrap  mb-10">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-state"
                        >
                            Query
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                <option>Inquiry</option>
                                <option>Partnership</option>
                                <option>Deal</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div> */}
                        <button
                            disabled={!props.isValid}
                            className="flex-shrink-0 disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:border-gray-500 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded justify-end"
                            type="submit"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;

Contact.getInitialProps = async (context) => {
    return {
        title: "ITXcelerate",
        image: "/logo-3.png",
        summery:
            "Delivering exceptional customer service and ensuring that our clients are satisfied with every aspect of our services. From our initial consultation to post-project support, we strive to provide a seamless and stress-free experience for our clients.",
        keywords:
            "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
        type: "website",
        imageAlt: "ITXclererate logo",
        parameter: "contact",
    };
};
