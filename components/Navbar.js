import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link as Li } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import useOnScreen from "../utils/useOnScreen";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import { client } from "../sanity";
import query from "../queries/getAllPosts";
import { useDispatch } from "react-redux";
import { setHovering, setPosts } from "../redux/slices";
import gsap from "gsap";
import { Power4, Power1 } from "gsap";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const containerRef = useRef();
  const dispatch = useDispatch();
  const navRef = useRef(null);

  useEffect(() => {
    const data = async () => {
      const posts = await client.fetch(query);
      dispatch(setPosts(posts));
    };
    data();
  }, []);

  const router = useRouter();
  console.log(router.pathname);

  const [yOffset, setYOffset] = useState(0);
  const [prev, setPrev] = useState(0);
  const newRef = useRef(null);
  const isOnScreen = useOnScreen(newRef);

  const handleScroll = () => {
    setYOffset(window.pageYOffset);
    yOffset !== undefined && setPrev(yOffset);
  };

  console.log(newRef.current?.getBoundingClientRect().y);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [yOffset]);

  const popupRef = useRef(null);

  const sections = [
    { name: "HOME", id: "home" },
    { name: "FEATURES", id: "features" },
    { name: "TECHNOLOGIES", id: "achievements" },
    { name: "TESTIMONIALS", id: "testimonials" },
    { name: "FAQs", id: "faqs" },
    { name: "PRICING", id: "pricing" },
  ];
  const handleContainer = () => {
    if (containerRef.current.classList.contains("-right-[300px]")) {
      containerRef.current.classList.remove("-right-[300px]");
      containerRef.current.classList.add("right-0");
    } else {
      containerRef.current.classList.remove("right-0");
      containerRef.current.classList.add("-right-[300px]");
    }
  };

  const toggleShow = () => {
    setActive((curr) => !curr);
    if (popupRef.current.classList.contains("-translate-y-[150vh]")) {
      popupRef.current.classList.remove("-translate-y-[150vh]");
    } else {
      popupRef.current.classList.add("-translate-y-[150vh]");
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".show", {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: Power1.easeOut,
        delay: 0.5,
      });
      gsap.to(".showVer", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.25,
        ease: Power1.easeOut,
        delay: 1,
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="cursor-none  relative z-[60] w-[100vw] bg-black "
      ref={navRef}
    >
      <nav
        style={
          yOffset > prev
            ? { transform: `translateY(${-yOffset * 10}px)` }
            : { transform: `translateY(0px)` }
        }
        className={`
                  b h-20 border-gray-200 fixed top-0 left-0 w-full transition-all duration-500  `}
        ref={newRef}
      >
        <div className="cursor-none  h-full ">
          <div
            ref={containerRef}
            className="cursor-none  transition-all duration-500 absolute top-16 -right-[300px] bg-primary flex flex-col gap-4 p-4 rounded-lg"
          >
            {sections.map((section, i) => (
              <li
                key={section.id}
                className="cursor-none list-none link transition-all  duration-500 px-2 py-1 text-white"
              >
                <Li
                  activeClass="active"
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  href={`#${section.id}`}
                  className="cursor-none  "
                  aria-current="page"
                  onClick={() => {
                    handleContainer();
                    setActive(i);
                  }}
                >
                  {section.name}
                </Li>
              </li>
            ))}
          </div>
          <div className="cursor-none flex flex-wrap items-center justify-between mx-auto h-full overflow-hidden bg-secondary px-20 pl-52 w-screen text-white">
            <Link href="/" className="cursor-none h-[20px] overflow-hidden">
              <Image
                width={100}
                height={100}
                src="/logo-1.png"
                className="cursor-none  w-48  absolute -top-[57px] md:-top-[59px] left-20 show "
                alt="ITXcelerate logo"
                style={{ transform: "translateX(-1000px)" }}
              />
            </Link>
            <div></div>
            <div className="cursor-none ss flex items-center lg:order-2 gap-2 ">
              <Link
                href="/contact"
                className="cursor-none hidden sm:flex  rounded-full bg-primary hover:bg-tertiary  text-black transition-all duration-300 font-medium  text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-14 md:mr-0"
                onMouseEnter={() => {
                  dispatch(setHovering(true));
                }}
                onMouseLeave={() => {
                  dispatch(setHovering(false));
                }}
              >
                Let&apos;s Talk
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="cursor-none inline-flex absolute right-4  items-center p-2 ml-1 text-sm text-primary bg-fourth bg-opacity-50 rounded-full lg:hidden hover:bg-primary focus:outline-none focus:ring-2  hover:text-secondary transition-all duration-300"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={toggleShow}
              >
                <MenuIcon />
              </button>
            </div>
            <div
              className="cursor-none items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1  h-full"
              id="mobile-menu-2"
            >
              {router.pathname === "/" && (
                <ul className="cursor-none flex mt-4 font-medium lg:flex-row lg:mt-0 h-full ">
                  {sections.map((section, i) => (
                    <li
                      key={section.id}
                      className="cursor-none  flex items-center h-full linked overflow-hidden   z-[1000] px-4 hover:border-tertiary transition-all duration-1000 border-secondary "
                      onMouseEnter={() => {
                        dispatch(setHovering(true));
                      }}
                      onMouseLeave={() => {
                        dispatch(setHovering(false));
                      }}
                    >
                      <Li
                        activeClass="active"
                        to={section.id}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        href={`#${section.id}`}
                        className={`${
                          active === i ? "text-white" : "text-white"
                        } pl-3 pr-4 show cursor-none hover:text-secondary delay-300  h-full flex items-center  z-[1000] rounded lg:bg-transparent  transition-all duration-300  lg:p-0 dark:`}
                        aria-current="page"
                        onClick={() => {
                          setActive(i);
                        }}
                        style={{ transform: "translateX(-1000px)" }}
                      >
                        {section.name}
                      </Li>
                    </li>
                  ))}
                  <div className="cursor-none  h-full">
                    <li
                      className={`${
                        active ? "border-tertiary" : "border-tertiary"
                      } bg-tertiary px-4 border-b-4 showVer h-full  hover:border-secondary transition-all duration-300`}
                      style={{ transform: "translateY(1000px)" }}
                    >
                      <button
                        className="cursor-none text-secondary pl-3 font-bold h-full  pr-4 rounded lg:bg-transparent transition-all duration-300  lg:p-0"
                        onClick={toggleShow}
                      >
                        <div className="cursor-none ">RESOURCES</div>
                      </button>
                    </li>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div
        ref={popupRef}
        className="cursor-none h-screen -translate-y-[150vh] gap-4 transition-all duration-500 top-0 w-[110vw] md:w-[105vw] fixed bg-tertiary overflow-hidden"
      >
        <Link
          href="/contact"
          className="cursor-none absolute sm:hidden top-[21px] left-4 bg-opacity-50 w-[200px] text-center  rounded-full bg-primary hover:bg-tertiary  text-black transition-all duration-300 font-medium  text-lg px-4 lg:px-5 py-1 lg:py-2.5 mr-14"
          onClick={toggleShow}
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          Let&apos;s Talk
        </Link>
        <div className="cursor-none md:grid gap-2 md:gap-4 md:grid-cols-5 lg:grid-cols-6 px-4 md:px-0 pt-20 md:pt-0 justify-items-center h-full md:flex-none  flex md:justify-start justify-center">
          <Link
            href={"/blog"}
            className="cursor-none  col-span-3 hidden md:flex relative"
          >
            <Image
              width={1000}
              height={1000}
              src="/bs-5.jpg"
              className="cursor-none  h-full w- col-span-3 brightness-50"
              alt=""
            />
            <div className="cursor-none  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h3 className="cursor-none  text-white text-5xl link transition-all duration-500  px-4">
                BLOG
              </h3>
            </div>
          </Link>
          <div
            className="cursor-none  py-6 pr-4  md:text-start flex flex-col justify-center"
            onClick={toggleShow}
          >
            <h3 className="cursor-none mb-6 text-xl font-semibold  uppercase pl-2   md:text-start">
              Company
            </h3>
            <ul
              className="cursor-none  grid md:grid-cols-1 justify-items-start w-full"
              onMouseEnter={() => {
                dispatch(setHovering(true));
              }}
              onMouseLeave={() => {
                dispatch(setHovering(false));
              }}
            >
              <li className="cursor-none mb-4 md:w-[500px]">
                <Link
                  href="/next"
                  className="cursor-none link transition-all duration-500 px-2 py-1 w-[500px]"
                >
                  Navigate Your Next
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/about"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  About
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/carrers"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Carrers
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/esg"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  ESG
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/invest"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Invest
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/blog"
                  className="cursor-none link bg-secondary text-white transition-all duration-500 px-2 py-1"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="cursor-none  py-6 hidden md:flex flex-col  w-full flex flex-col justify-center">
            <h3 className="cursor-none mb-6 text-xl font-semibold  uppercase pl-2 text-cen md:text-start">
              Help center
            </h3>
            <ul
              className="cursor-none  grid md:grid-cols-1 justify-items-start"
              onMouseEnter={() => {
                dispatch(setHovering(true));
              }}
              onMouseLeave={() => {
                dispatch(setHovering(false));
              }}
            >
              <li className="cursor-none mb-4">
                <a
                  href="https://t.me/+RveSAODvj0hjYTZl"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Discord Server
                </a>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="https://twitter.com/itxccelerate/status/1630569929710899201?s=46&t=CkXjIjsjO4tMLkygtRHk_A"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Twitter
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="https://instagram.com/it_xccelerate?igshid=YmMyMTA2M2Y="
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Instagram
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="https://t.me/+RveSAODvj0hjYTZl"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Instagram
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="https://t.me/+RveSAODvj0hjYTZl"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Linkedin
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/connect"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="cursor-none  py-6 pr-4  md:text-start flex flex-col justify-center"
            onClick={toggleShow}
          >
            <h3 className="cursor-none mb-6 text-xl font-semibold  uppercase dark: pl-2">
              Legal
            </h3>
            <ul
              className="cursor-none  grid md:grid-cols-1 justify-items-start"
              onMouseEnter={() => {
                dispatch(setHovering(true));
              }}
              onMouseLeave={() => {
                dispatch(setHovering(false));
              }}
            >
              <li className="cursor-none mb-4">
                <Link
                  href="/privacy"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="cursor-none mb-4 md:w-[400px]">
                <Link
                  href="/trademarks"
                  className="cursor-none link transition-all duration-500 px-2 py-1 md:w-[400px]"
                >
                  Trademarks
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/terms"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Terms
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/cookie"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Cookie Policy
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/slaveryStatement"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Slavery Statement
                </Link>
              </li>
              <li className="cursor-none mb-4">
                <Link
                  href="/paymentGuide"
                  className="cursor-none link transition-all duration-500 px-2 py-1"
                >
                  Payment Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <CloseIcon
          className="cursor-none  absolute top-4 right-14 md:right-20 text-gray-500 border border-gray-500 hover:rotate-180 transition-all duration-500 rounded-full p-2 text-5xl font-thin"
          onClick={toggleShow}
        /> */}
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="cursor-none absolute top-4 sm:right-24 right-14 md:right-20 group   items-center p-2 ml-1 text-sm text-secondary bg-primary bg-opacity-50 rounded-full hover:bg-secondary focus:outline-none focus:ring-2  hover:text-primary transition-all duration-300"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={toggleShow}
          onMouseEnter={() => {
            dispatch(setHovering(true));
          }}
          onMouseLeave={() => {
            dispatch(setHovering(false));
          }}
        >
          <CloseIcon className=" group-hover:rotate-180 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
