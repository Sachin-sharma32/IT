import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import { useDispatch, useSelector } from "react-redux";
import { setCursorVisible, setShow } from "../redux/slices";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";
const Contact2 = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.base.show);
  const [checked, setChecked] = useState(false);

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
  return (
    <div className="">
      <div
        className={`bg-black w-fit h-fit fixed top-1/2 -translate-y-1/2 -left-[40px] text-white text-sm rounded-b-2xl z-[500] flex justify-center items-center px-6 py-4 -rotate-90 `}
        onClick={() => {
          dispatch(setShow(true));
        }}
      >
        CONTACT US
      </div>
      <div
        className={` w-[100vw] h-screen fixed  top-1/2 right-0 -translate-y-1/2 text-white text-sm  z-[500] flex justify-center items-center ${
          show ? " translate-x-0" : " translate-x-full"
        } transition-all duration-300`}
      >
        <div
          onClick={() => {
            dispatch(setShow(false));
          }}
          className={`bg-transparent w-[50%] h-screen relative transition-all delay-300 ease-out ${
            show ? 'opacity-100':'opacity-0'
          }`}
        >
          <div
            className={` absolute bg-black opacity-50 t-0 h-full w-full delay-300 ${
              show ? "flex" : "hidden"
            } `}
          >
          </div>
        </div>
        <div
          className={` w-[50%] h-screen bg-white relative flex border-black`}
        >
          <div className="    h-full w-[20px] bg-gradient-to-b from-secondary  to-primary "></div>
          <div
            onClick={() => {
              dispatch(setShow(false));
            }}
            className="flex flex-col absolute top-8 right-8 bg-white rounded-full w-[30px] h-[30px] p-2 justify-center items-center cursor-pointer shadow-[0_2px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_5px_5px_rgba(0,0,0,0.25)] hover:-translate-y-[1px] hover:scale-105 transition-all duration-200"
          >
            <div className=" bg-black w-[14px] h-[1px] text-black rotate-45 rounded-full"></div>
            <div className=" bg-black w-[14px] h-[1px] text-black -rotate-45 -translate-y-[1px] rounded-full"></div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationObject}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={submitHandler}
            className="  w-full"
          >
            {(props) => (
              <Form
                className="  w-full sm:w-full gap-10 flex flex-col rounded-lg  text-secondary p-10"
                onMouseEnter={() => {
                  dispatch(setCursorVisible(false));
                }}
                onMouseLeave={() => {
                  dispatch(setCursorVisible(true));
                }}
              >
                <div className=" flex flex-col gap-6 text-secondary">
                  <h3>Contact us</h3>
                  <div className=" flex text-3xl font-satoshi font-extrabold items-center gap-4">
                    <UpcomingIcon className="  text-5xl text-primary" />
                    <h1 className="  translate-y-1">Send an enquiry</h1>
                  </div>
                </div>
                <div className=" text-lg">
                  <div className=" flex flex-wrap  mb-6">
                    <div
                      className=" w-full 
                  "
                    >
                      <div className="  relative w-full">
                        <Field
                          name="name"
                          className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                          id="name"
                          type="text"
                          placeholder=" "
                        />
                        <div className=" txt peer peer-placeholder-shown:top-[23px] peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#ffffff]  -translate-y-1/2">
                          Name*
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-wrap  mb-6">
                    <div
                      className=" w-full 
                  "
                    >
                      <div className="  relative w-full">
                        <Field
                          name="email"
                          className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                          id="email"
                          type="text"
                          placeholder=" "
                        />
                        <div className=" txt peer  peer-placeholder-shown:top-[23px] peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#ffffff]  -translate-y-1/2">
                          Email*
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-wrap  mb-6">
                    <div
                      className=" w-full 
                  "
                    >
                      <div className="  relative w-full">
                        <Field
                          name="company"
                          className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                          id="company"
                          type="text"
                          placeholder=" "
                        />
                        <div className=" txt peer  peer-placeholder-shown:top-[23px] peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#ffffff]  -translate-y-1/2">
                          Company*
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-wrap  mb-6">
                    <div
                      className=" w-full 
                  "
                    >
                      <div className="  relative w-full">
                        <Field
                          name="phone"
                          className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                          id="phone"
                          type="text"
                          placeholder=" "
                        />
                        <div className=" txt peer peer-placeholder-shown:top-[23px]  peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#ffffff]  -translate-y-1/2">
                          Phone*
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-wrap  mb-6">
                    <div
                      className=" w-full 
                  "
                    >
                      <div className="  relative w-full">
                        <Field
                          as="textarea"
                          rows={5}
                          name="message"
                          className={` peer border-gray-200 focus:border-gray-500 block w-full bg-inherit pl-[20px] peer rounded-xl border-[1px] outline-none  py-3 px-4 mb-3 leading-tight  transition-all duration-500`}
                          id="message"
                          type="text"
                          placeholder=" "
                        />
                        <div className=" txt peer peer-placeholder-shown:top-[23px]  peer-placeholder-shown:scale-100 scale-75 top-0 absolute left-[11px] peer-placeholder-shown:left-[22px] transition-[top,transform,left] delay-[0s,0s,0s] duration-300 bg-[#ffffff]  -translate-y-1/2">
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
                        <Image width={100} height={100} src="/check.png" />
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
                    className=" mx-auto md:mx-0 mt-14 disabled:opacity-50 rounded-full bg-primary hover:bg-tertiary disabled:hover:bg-primary  text-secondary transition-all duration-300 font-medium  text-3xl flex items-center gap-4 px-4 lg:px-10 py-2 lg:py-4 md:mr-2 lg:mr-0 "
                  >
                    Submit
                    <EmailIcon className=" text-4xl" />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
