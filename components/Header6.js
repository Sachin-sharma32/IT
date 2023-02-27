import React, { useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useOnScreen from "../utils/useOnScreen";

const Header6 = ({ yOffset, prev }) => {
    const containerRef = useRef();
    const isOnScreen = useOnScreen(containerRef);
    return (
        <section
            ref={containerRef}
            className="bg-gray-900 z-30 h-fit flex items-center"
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
                                          .top * 1
                                  }px)`,
                              }
                            : {}
                    }
                    className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white"
                >
                    Frequently asked questions
                </h2>
                <div className="max-w-screen-md mx-auto">
                    <Accordion
                        style={
                            isOnScreen &&
                            containerRef.current?.getBoundingClientRect().top >=
                                0
                                ? {
                                      transform: `translateX(${
                                          -containerRef.current?.getBoundingClientRect()
                                              .top * 1
                                      }px)`,
                                  }
                                : {}
                        }
                        className="bg-inherit text-white py-4"
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon className="text-white" />
                            }
                        >
                            <div>
                                Can I use Landwind in open-source projects?
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Landwind is an open-source library of
                                interactive components built on top of Tailwind
                                CSS including buttons, dropdowns, modals,
                                navbars, and more.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        style={
                            isOnScreen &&
                            containerRef.current?.getBoundingClientRect().top >=
                                0
                                ? {
                                      transform: `translateX(${
                                          containerRef.current?.getBoundingClientRect()
                                              .top * 1
                                      }px)`,
                                  }
                                : {}
                        }
                        className="bg-inherit text-white py-4"
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon className="text-white" />
                            }
                        >
                            <div>
                                Can I use Landwind in open-source projects?
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Landwind is an open-source library of
                                interactive components built on top of Tailwind
                                CSS including buttons, dropdowns, modals,
                                navbars, and more.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        style={
                            isOnScreen &&
                            containerRef.current?.getBoundingClientRect().top >=
                                0
                                ? {
                                      transform: `translateX(${
                                          -containerRef.current?.getBoundingClientRect()
                                              .top * 1
                                      }px)`,
                                  }
                                : {}
                        }
                        className="bg-inherit text-white py-4"
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon className="text-white" />
                            }
                        >
                            <div>
                                Can I use Landwind in open-source projects?
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Landwind is an open-source library of
                                interactive components built on top of Tailwind
                                CSS including buttons, dropdowns, modals,
                                navbars, and more.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        style={
                            isOnScreen &&
                            containerRef.current?.getBoundingClientRect().top >=
                                0
                                ? {
                                      transform: `translateX(${
                                          containerRef.current?.getBoundingClientRect()
                                              .top * 1
                                      }px)`,
                                  }
                                : {}
                        }
                        className="bg-inherit text-white py-4"
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon className="text-white" />
                            }
                        >
                            <div>
                                Can I use Landwind in open-source projects?
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Landwind is an open-source library of
                                interactive components built on top of Tailwind
                                CSS including buttons, dropdowns, modals,
                                navbars, and more.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Header6;
