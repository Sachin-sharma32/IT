import Link from "next/link";
import React from "react";
import { imageBuilder } from "../sanity";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RichTextComponent = () => {
    const richText = {
        types: {
            image: ({ value }) => {
                return (
                    <div className="relative w-[100%] h-fit my-4 sm:m-10 mx-auto overflow-hidden">
                        <img
                            className=" object-contain w-[100%] h-[300px]"
                            src={imageBuilder(value)}
                            alt="Blog image"
                            fill
                        />
                    </div>
                );
            },
        },
        list: {
            bullet: ({ children }) => (
                <div>
                    <ul className=" py-5 list-disk space-y-5">
                        {children.map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <ArrowForwardIcon className=" text-purple-700" />
                                <li>{item}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            ),
            number: ({ children }) => (
                <ul className=" py-5 list-disk space-y-5">
                    {children.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <p className=" text-purple-700 font-bold">{i + 1}.</p>
                            <li>{item}</li>
                        </div>
                    ))}
                </ul>
            ),
        },
        block: {
            h1: ({ children }) => (
                <h1 className=" text-2xl sm:text-5xl py-4 sm:py-10 font-extrabold text-purple-700">
                    {children}
                </h1>
            ),
            h2: ({ children }) => (
                <h2 className=" text-xl sm:text-4xl py-4 sm:py-10 font-extrabold text-purple-700">
                    {children}
                </h2>
            ),
            h3: ({ children }) => (
                <h3 className=" text-lg sm:text-3xl py-4 sm:py-10 font-extrabold text-purple-700">
                    {children}
                </h3>
            ),
            h4: ({ children }) => (
                <h3 className=" text-base sm:text-2xl py-4 sm:py-10 font-extrabold text-purple-700">
                    {children}
                </h3>
            ),
            h5: ({ children }) => <h3 className=" py-4">{children}</h3>,
            h6: ({ children }) => <h3 className=" py-2">{children}</h3>,
            blockquote: ({ children }) => (
                <div className=" flex gap-4 bg-orange-100 my-4 rounded-2xl overflow-hidden">
                    <div className="bg-blue- p-4 flex justify-center items-center">
                        Attention
                    </div>
                    <blockquote className=" text-inherit text-black">
                        <p className="text-black p-4 text-xs">{children}</p>
                    </blockquote>
                </div>
            ),
        },
        marks: {
            link: ({ children, value }) => {
                const rel = !value.href.startsWith("/")
                    ? "noreferrer noopener"
                    : undefined;
                return (
                    <Link
                        href={value.href}
                        rel={rel}
                        className=" underline decoration-white hover:decoration-black"
                    />
                );
            },
        },
    };
    return richText;
};

export default RichTextComponent;
