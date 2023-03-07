import React, { useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useOnScreen from "../utils/useOnScreen";

const Header6 = ({ yOffset, prev }) => {
    const containerRef = useRef();
    const isOnScreen = useOnScreen(containerRef);

    const data = [
        {
            title: "What kind of web and app development services do you offer?",
            details:
                "We offer a wide range of web and app development services, including custom website development, mobile app development, e-commerce website development, CMS development, and more. Our team of experienced developers can build custom solutions tailored to your unique business needs.",
        },
        {
            title: "How do you ensure the security of my website or app?",
            details:
                "We take security seriously and follow industry-standard best practices to secure your website or app. This includes using secure coding practices, implementing SSL encryption, and regularly updating software and security patches.",
        },
        {
            title: "How long does it typically take to complete a web or app development project?",
            details:
                "The timeline for each project can vary based on the complexity and scope of the project. We work closely with our clients to establish a realistic timeline and ensure timely delivery of the project.",
        },
        {
            title: "Do you provide ongoing maintenance and support for your web and app solutions?",
            details:
                "Yes, we offer ongoing maintenance and support for all of our web and app solutions. This includes regular updates, bug fixes, and technical support to ensure your website or app runs smoothly.",
        },
        {
            title: "What kind of technologies and tools do you use for web and app development?",
            details:
                "We use the latest technologies and tools to build high-quality web and app solutions. This includes using programming languages such as Java, Python, PHP, and Swift, as well as utilizing popular frameworks such as React, Angular, and Vue.js.",
        },
        // {
        //     title: "Can you provide references or case studies from past clients?",
        //     details:
        //         "Yes, we can provide references and case studies from our past clients upon request. We are proud of our work and happy to showcase our success stories.",
        // },
        // {
        //     title: "What is your pricing model and how do you determine project costs?",
        //     details:
        //         "Our pricing model is based on the scope and complexity of the project, as well as the amount of development time required. We provide transparent pricing and work with our clients to establish a realistic budget for the project.",
        // },
        // {
        //     title: "How do you ensure that the website or app is user-friendly and intuitive?",
        //     details:
        //         "We conduct thorough user testing and design reviews throughout the development process to ensure that the website or app is user-friendly and intuitive. We also follow industry-standard best practices for usability and user experience design.",
        // },
        // {
        //     title: "What is your project management methodology and how will I be updated on the progress of my project?",
        //     details:
        //         "We follow an agile project management methodology, which involves regular communication and updates with our clients. We provide regular progress reports and hold regular meetings to ensure that the project is progressing smoothly.",
        // },
        // {
        //     title: "Do you offer any guarantees or warranties on your web and app development services?",
        //     details:
        //         "Yes, we offer guarantees and warranties on our web and app development services. We stand behind our work and will work with you to resolve any issues that arise after launch.",
        // },
    ];

    return (
        <section
            ref={containerRef}
            className=" z-30 h-fit flex items-center bg-[#d9cdf6]"
            id="faqs"
        >
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 flex justify-center flex-col py-20">
                <h2
                    style={
                        isOnScreen &&
                        containerRef.current?.getBoundingClientRect().top >= 0
                            ? {
                                  transform: `translateY(${
                                      -containerRef.current?.getBoundingClientRect()
                                          .top * 0.4
                                  }px)`,
                              }
                            : {}
                    }
                    className="mb-6 text-3xl px-10 font-extrabold tracking-tight text-center z-0 text-black lg:mb-8 lg:text-3xl"
                >
                    Frequently asked questions
                </h2>
                <div className="max-w-screen-md mx-auto px-14">
                    {data.map((item, i) => (
                        <Accordion
                            key={i}
                            style={
                                isOnScreen &&
                                containerRef.current?.getBoundingClientRect()
                                    .top >= 0
                                    ? {
                                          transform: `${
                                              i % 2 === 0
                                                  ? `translateX(${
                                                        containerRef.current?.getBoundingClientRect()
                                                            .top * 1
                                                    }px)`
                                                  : `translateX(${
                                                        containerRef.current?.getBoundingClientRect()
                                                            .top * -1
                                                    }px)`
                                          }`,
                                      }
                                    : {}
                            }
                            className="bg-inherit  py-4 text-black"
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon className=" text-black" />
                                }
                            >
                                <div>{item.title}</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>{item.details}</p>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Header6;
