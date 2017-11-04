import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers/index";
const Store = (applyMiddleware(thunk)(createStore))(reducers);
export default Store;