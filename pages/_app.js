import "../styles/globals.css";
import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";

import "setimmediate";
import store from "../redux/store";

if (!global.setImmediate) {
    global.setImmediate = setTimeout;
}

function MyApp({ Component, pageProps }) {
    return (
        <div className=" overflow-x-hidden">
            <Provider store={store}>
                <StyledEngineProvider injectFirst>
                    <Component {...pageProps} />
                </StyledEngineProvider>
            </Provider>
        </div>
    );
}

export default MyApp;
