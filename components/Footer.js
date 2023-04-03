import Link from "next/link";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setHovering } from "../redux/slices";

const Footer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const legal = [
    {
      name: "Privacy Policy",
      link: "/privacy",
    },
    {
      name: "Trademarks",
      link: "/trademarks",
    },
    {
      name: "Terms",
      link: "/terms",
    },
    {
      name: "Cookie Policy",
      link: "/cookie",
    },
    {
      name: "Slavery Statement",
      link: "/slaveryStatement",
    },
    {
      name: "Payment Guide for Suppliers",
      link: "/paymentGuide",
    },
  ];
  const company = [
    {
      name: "Navigate Your Next",
      link: "/next",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Carrers",
      link: "/carrers",
    },
    {
      name: "ESG",
      link: "/esg",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  const help = [
    {
      name: "Telegram",
      link: "https://t.me/+RveSAODvj0hjYTZl",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/itxccelerate/status/1630569929710899201?s=46&t=CkXjIjsjO4tMLkygtRHk_A",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/it_xccelerate?igshid=YmMyMTA2M2Y=",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/itxcelerate/",
    },
    {
      name: "Contact Us",
      link: "/connect",
    },
  ];
  return (
    <footer
      className={`cursor-none  z-[0] bg-secondary text-white px-10 w-screen bottom-0 ${
        router.pathname === "/" ? "fixed" : ""
      }`}
    >
      <div className="cursor-none max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 z-50">
        <div className="cursor-none grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 justify-items-center z-50 pb-10">
          <div className="cursor-none  w-full sm:w-fit">
            <h3 className="cursor-none mb-6 text-sm font-semibold  uppercase font-satoshi">
              Company
            </h3>
            <ul
              className="cursor-none text-primary"
              onMouseEnter={() => {
                dispatch(setHovering(true));
              }}
              onMouseLeave={() => {
                dispatch(setHovering(false));
              }}
            >
              {company.map((item, i) => (
                <li
                  key={i}
                  className="cursor-none mb-4 peer overflow-hidden group w-fit h-[20px] flex flex-col"
                >
                  <Link
                    href="/privacy"
                    className="cursor-none inline-block group-hover:translate-y-[-30px] text-tertiary transition-all duration-500"
                  >
                    {item.name}
                  </Link>
                  <Link
                    href={item.link}
                    className="cursor-none inline-block translate-y-[10px] group-hover:translate-y-[-27px] text-primary transition-all duration-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="cursor-none mb-6 text-sm font-semibold  uppercase dark: font-satoshi">
              Help center
            </h3>
            <ul
              className="cursor-none "
              onMouseEnter={() => {
                dispatch(setHovering(true));
              }}
              onMouseLeave={() => {
                dispatch(setHovering(false));
              }}
            >
              {help.map((item, i) => (
                <li
                  key={i}
                  className="cursor-none mb-4 peer overflow-hidden group w-fit h-[20px] flex flex-col"
                >
                  <Link
                    href="/privacy"
                    className="cursor-none inline-block group-hover:translate-y-[-30px] text-tertiary transition-all duration-500"
                  >
                    {item.name}
                  </Link>
                  <Link
                    href={item.link}
                    className="cursor-none inline-block translate-y-[10px] group-hover:translate-y-[-27px] text-primary transition-all duration-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="cursor-none ">
            <h3 className="cursor-none mb-6 text-sm font-semibold  uppercase dark: font-satoshi">
              Legal
            </h3>
            <ul
              className="cursor-none "
              onMouseEnter={() => {
                dispatch(setHovering(true));
              }}
              onMouseLeave={() => {
                dispatch(setHovering(false));
              }}
            >
              {legal.map((item, i) => (
                <li
                  key={i}
                  className="cursor-none mb-4 peer overflow-hidden group w-fit h-[20px] flex flex-col"
                >
                  <Link
                    href="/privacy"
                    className="cursor-none inline-block group-hover:translate-y-[-30px] text-tertiary transition-all duration-500"
                  >
                    {item.name}
                  </Link>
                  <Link
                    href={item.link}
                    className="cursor-none inline-block translate-y-[10px] group-hover:translate-y-[-27px] text-primary transition-all duration-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cursor-none text-center flex flex-col justify-center border-t pt-10 border-primary">
          <Link
            href="#"
            className="cursor-none  overflow-hidden h-10 flex items-center justify-center mb-10 text-2xl font-semibold dark: relative"
          >
            <Image
              width={100}
              height={100}
              src="/crop-logo-1.png"
              className="cursor-none w-64 absolute"
              alt="Landwind Logo"
            />
          </Link>
          <span className="cursor-none block text-center text-tertiary text-xl">
            © 2023 ITXcelerate™. All Rights Reserved.
          </span>
          <ul
            className="cursor-none flex justify-center mt-5 space-x-5"
            onMouseEnter={() => {
              dispatch(setHovering(true));
            }}
            onMouseLeave={() => {
              dispatch(setHovering(false));
            }}
          >
            <li>
              <a
                href="https://t.me/+RveSAODvj0hjYTZl"
                className="cursor-none  dark:hover: text-primary"
              >
                <TelegramIcon className="cursor-none  hover:text-inherit hover:text-tertiary transition-all duration-500 text-3xl hover:rotate-[360deg]" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/it_xccelerate?igshid=YmMyMTA2M2Y="
                className="cursor-none text-primary"
              >
                <InstagramIcon className="cursor-none  hover:text-inherit hover:text-tertiary transition-all duration-500 text-3xl hover:rotate-[360deg]" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/itxccelerate/status/1630569929710899201?s=46&t=CkXjIjsjO4tMLkygtRHk_A"
                className="cursor-none text-primary"
              >
                <LinkedInIcon className="cursor-none  hover:text-inherit hover:text-tertiary transition-all duration-500 text-3xl hover:rotate-[360deg]" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/itxccelerate/status/1630569929710899201?s=46&t=CkXjIjsjO4tMLkygtRHk_A"
                className="cursor-none text-primary"
              >
                <TwitterIcon className="cursor-none  hover:text-inherit hover:text-tertiary transition-all duration-500 text-3xl hover:rotate-[360deg]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
