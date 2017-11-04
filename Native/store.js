import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers/index";
import thunk from "redux-thunk";
const Store = (applyMiddleware(thunk)(createStore))(reducers);
export default Store;