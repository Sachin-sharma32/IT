import "../styles/globals.css";
import { StyledEngineProvider } from "@mui/material";
import Head from "next/head";
import { Provider } from "react-redux";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "setimmediate";
import store from "../redux/store";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Social from "../utils/Socials";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/router";
import { motion, useScroll } from "framer-motion";

if (!global.setImmediate) {
    global.setImmediate = setTimeout;
}

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const { scrollYProgress } = useScroll();

    return (
        <div className=" overflow-x-hidden font-poppins scroll-smooth bg-[#f8f8f8]">
            <Head>
                <title>ITXcelerate - {pageProps.title}</title>
                <link rel="icon" type="image/png" href={`/logo-3.png`} />
                <meta name="description" content={`${pageProps.summery}`} />
                <meta name="keywords" content={pageProps.keywords} />
                <meta
                    property="og:title"
                    content={`ITXcelerate - ${pageProps.title}`}
                />
                <meta
                    property="og:description"
                    content={`${pageProps.summery}`}
                />
                <meta property="og:type" content={`${pageProps.type}`} />
                <meta property="og:site_name" content="ITXcelerate" />
                <meta property="og:image" content={`${pageProps.image}`} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:image:alt" content={`${pageProps.title}`} />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="400" />
                <meta
                    property="og:url"
                    content={`https://it-five.vercel.app/${pageProps.parameter}`}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ITXccelerate" />
                <meta name="twitter:title" content={`${pageProps.title}`} />
                <meta
                    name="twitter:description"
                    content={`${pageProps.summery}`}
                />
                <meta name="twitter:image" content={`${pageProps.image}`} />
            </Head>
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="progress-bar z-50 rounded-full"
            />
            <Provider store={store}>
                <StyledEngineProvider injectFirst>
                    {router.pathname === "/contact" ? "" : <Navbar />}
                    <Component {...pageProps} />
                    {router.pathname === "/" ||
                    router.pathname === "/contact" ? (
                        ""
                    ) : (
                        <Footer />
                    )}
                    <Social />
                </StyledEngineProvider>
                <div
                    className=" fixed bottom-4 right-6 text-white z-50 bg-black overflow-hidden rounded-full cursor-pointer scroll-smooth"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <KeyboardArrowUpIcon className="w-10 h-10 hover:-translate-y-1 transition-all duration-300" />
                </div>
            </Provider>
        </div>
    );
}

export default MyApp;
