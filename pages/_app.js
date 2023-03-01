import "../styles/globals.css";
import { StyledEngineProvider } from "@mui/material";
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

if (!global.setImmediate) {
    global.setImmediate = setTimeout;
}

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <div className=" overflow-x-hidden font-poppins scroll-smooth bg-[#f8f8f8]">
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
