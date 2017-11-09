import { Provider } from "react-redux";
import Store from "../store";
import Routes from "./routes";

export default _ => (
    <Provider store={Store}>
        <Routes />
    </Provider>
);