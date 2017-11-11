import React from "react";
import { Provider } from "react-redux";
import Store from "../store";
import Routes from "./routes/routes";

export default _ => (
    <Provider store={Store}>
        <Routes />
    </Provider>
);