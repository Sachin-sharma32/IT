import Link from "next/link";
import React from "react";
import { imageBuilder } from "../sanity";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

const RichTextComponent = () => {
  const richText = {
    types: {
      image: ({ value }) => {
        return (
          <div className="cursor-none relative w-[100%] h-fit my-4 sm:m-10 mx-auto overflow-hidden">
            <Image
              width={100}
              height={100}
              className="cursor-none  object-contain w-[100%] h-[300px]"
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
          <ul className="cursor-none  py-2 list-disk space-y-5">
            {children.map((item, i) => (
              <div key={i} className="cursor-none flex gap-4 items-center">
                <ArrowForwardIcon className="cursor-none  text-secondary" />
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
      ),
      number: ({ children }) => (
        <ul className="cursor-none  py-5 list-disk space-y-5">
          {children.map((item, i) => (
            <div key={i} className="cursor-none flex gap-4">
              <p className="cursor-none  text-secondary font-bold">{i + 1}.</p>
              <li>{item}</li>
            </div>
          ))}
        </ul>
      ),
    },
    block: {
      h1: ({ children }) => (
        <h1 className="cursor-none  text-2xl sm:text-5xl py-4 sm:py-10 font-extrabold text-secondary">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="cursor-none  text-xl sm:text-4xl py-4 sm:py-10 font-extrabold text-secondary">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="cursor-none  text-lg sm:text-3xl py-4 sm:py-10 font-extrabold text-secondary">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h3 className="cursor-none  text-base sm:text-2xl py-4 sm:py-10 font-extrabold text-secondary">
          {children}
        </h3>
      ),
      h5: ({ children }) => <h3 className="cursor-none  py-4">{children}</h3>,
      h6: ({ children }) => <h3 className="cursor-none  py-2">{children}</h3>,
      blockquote: ({ children }) => (
        <div className="cursor-none  flex gap-4 bg-orange-100 my-4 rounded-2xl overflow-hidden">
          <div className="cursor-none bg-blue- p-4 flex justify-center items-center">
            Attention
          </div>
          <blockquote className="cursor-none  text-inherit text-black">
            <p className="cursor-none text-secondary p-4 text-xs">{children}</p>
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
            className="cursor-none  underline decoration-white hover:decoration-black"
          />
        );
      },
    },
  };
  return richText;
};

export default RichTextComponent;
