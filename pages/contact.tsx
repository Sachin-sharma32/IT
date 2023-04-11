import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Alert, Avatar, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import Smooth from "../utils/Smooth";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FolderIcon from "@mui/icons-material/Folder";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import { useDispatch } from "react-redux";
import { setCursorVisible } from "../redux/slices";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
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
      .number()
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
    <Smooth>
      <div className="cursor-none  gap-32 px-4 md:px-10 py-32 min-h-screen w-screen  flex flex-col md:flex-row justify-center  bg-[#f8f8f8]">
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={() => {
            setSuccess(false);
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          className="cursor-none mt-10"
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
        {/* <div className="cursor-none  bg-black p-4 h-10 w-10 rounded-full flex justify-center items-center  overflow-hidden fixed top-4 left-4">
                    <Link href="/">
                        <ArrowBackIosIcon className="cursor-none text-white ml-2 transition-all duration-500 z-0 hover:trans hover:scale-105 hover:-translate-x-1" />
                    </Link>
                </div> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationObject}
          validateOnBlur={true}
          validateOnChange={true}
          onSubmit={submitHandler}
          className="cursor-none  w-full"
        >
          {(props) => (
            <Form
              className="cursor-none  w-full sm:w-full gap-10 flex flex-col rounded-lg  text-secondary"
              onMouseEnter={() => {
                dispatch(setCursorVisible(false));
              }}
              onMouseLeave={() => {
                dispatch(setCursorVisible(true));
              }}
            >
              <div className="cursor-none flex flex-col gap-6 text-secondary">
                <h3>Contact us</h3>
                <div className="cursor-none flex text-3xl font-satoshi font-extrabold items-center gap-4">
                  <UpcomingIcon className="cursor-none  text-5xl text-primary" />
                  <h1 className="cursor-none  translate-y-1">
                    Send an enquiry
                  </h1>
                </div>
              </div>
              <div className="cursor-none text-lg">
                <div className="cursor-none flex flex-wrap  mb-6">
                  <div
                    className="cursor-none w-full 
                  "
                  >
                    <div className="cursor-none  relative w-full">
                      <Field
                        name="name"
                        className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                        id="name"
                        type="text"
                        placeholder="s"
                      />
                      <div className="cursor-none txt peer peer-placeholder-shown:top-[25px] peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#f8f8f8]  -translate-y-1/2">
                        Name*
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cursor-none flex flex-wrap  mb-6">
                  <div
                    className="cursor-none w-full 
                  "
                  >
                    <div className="cursor-none  relative w-full">
                      <Field
                        name="email"
                        className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                        id="email"
                        type="text"
                        placeholder="s"
                      />
                      <div className="cursor-none txt peer peer-placeholder-shown:top-[25px] peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#f8f8f8]  -translate-y-1/2">
                        Email*
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cursor-none flex flex-wrap  mb-6">
                  <div
                    className="cursor-none w-full 
                  "
                  >
                    <div className="cursor-none  relative w-full">
                      <Field
                        name="company"
                        className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                        id="company"
                        type="text"
                        placeholder="s"
                      />
                      <div className="cursor-none txt peer peer-placeholder-shown:top-[25px] peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#f8f8f8]  -translate-y-1/2">
                        Company*
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cursor-none flex flex-wrap  mb-6">
                  <div
                    className="cursor-none w-full 
                  "
                  >
                    <div className="cursor-none  relative w-full">
                      <Field
                        name="phone"
                        className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                        id="phone"
                        type="text"
                        placeholder="s"
                      />
                      <div className="cursor-none txt peer peer-placeholder-shown:top-[25px] peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#f8f8f8]  -translate-y-1/2">
                        Phone*
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cursor-none flex flex-wrap  mb-6">
                  <div
                    className="cursor-none w-full 
                  "
                  >
                    <div className="cursor-none  relative w-full">
                      <Field
                        as="textarea"
                        rows={5}
                        name="message"
                        className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                        id="message"
                        type="text"
                        placeholder="s"
                      />
                      <div className="cursor-none txt peer peer-placeholder-shown:top-[25px] peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#f8f8f8]  -translate-y-1/2">
                        Message
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex gap-10 w-full items-center"
                  onClick={() => {
                    setChecked((curr) => !curr);
                  }}
                >
                  <div className=" w-fit relative">
                    <div className="border w-10 h-10 rounded-lg border-primary"></div>
                    <div
                      className={` absolute top-0 bg-primary rounded-lg transition-all duration-300 ${
                        checked ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        alt="random image"
                        width={100}
                        height={100}
                        src="/check.png"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-secondary">
                    I give permission for my data to be used for processing my
                    query. You can find more information and instructions for
                    revoking your permission in our{" "}
                    <Link href="/privacy" className=" underline">
                      privacy policy.
                    </Link>
                  </p>
                </div>
                <button
                  disabled={!props.isValid || !checked}
                  type="submit"
                  className="cursor-none mx-auto md:mx-0 mt-14 disabled:opacity-50 rounded-full bg-primary hover:bg-tertiary disabled:hover:bg-primary  text-secondary transition-all duration-300 font-medium  text-3xl flex items-center gap-4 px-4 lg:px-10 py-2 lg:py-4 md:mr-2 lg:mr-0 "
                >
                  Submit
                  <EmailIcon className=" text-4xl" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="cursor-none flex w-full flex-col text-xl px-4 gap-20 text-secondary justify-center">
          <div className="cursor-none  border-b flex gap-10 pb-4 w-full font-satoshi font-extrabold items-center">
            <PhoneEnabledIcon className="cursor-none  text-5xl text-primary" />
            <h3>Or call us directly</h3>
          </div>
          <div className="cursor-none flex flex-col gap-6">
            <Avatar
              src="bs-1.jpg"
              className="cursor-none  h-52 w-52 self-center"
            />
            <p className="cursor-none  ">
              Rahul Sharma from the sales team is happy to help you with all
              your questions.
            </p>
            <div>
              <div className="cursor-none flex gap-4">
                <h3 className="cursor-none  w-20">Phone</h3>
                <p className="cursor-none  ">+91 9876543210</p>
              </div>
              <div className="cursor-none flex gap-4">
                <h3 className="cursor-none  w-20">Fax</h3>
                <p className="cursor-none  ">+91 9876543210</p>
              </div>
              <div className="cursor-none flex gap-4">
                <h3 className="cursor-none  w-20">E-mal</h3>
                <p className="cursor-none  ">info@itxcelerate.com</p>
              </div>
            </div>
          </div>
          <div className="cursor-none flex flex-col gap-6 ">
            <div className="cursor-none  border-b flex gap-10 pb-4 items-center">
              <FolderIcon className="cursor-none  text-5xl text-primary" />
              <h3>Hardware Purchase template</h3>
            </div>
            <div className="cursor-none   ">
              If you wish, you can use our hardware purchase Excel template for
              your upload:
            </div>
            <ol className="cursor-none   list-decimal list-inside">
              <li>Download template</li>
              <li>Enter product details</li>
              <li>Upload completed list</li>
            </ol>
            <button className="cursor-none  bg-secondary transition-all duration-300 text-white py-2 px-10 w-fit border rounded-full hover:bg-inherit hover:text-secondary hover:border border-secondary">
              Download template
            </button>
          </div>
        </div>
      </div>
    </Smooth>
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
