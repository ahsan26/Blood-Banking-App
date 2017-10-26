import { combineReducers } from "redux";
import auth_Reducer from "./Auth_Reducer";
const rootReducer = combineReducers({
    auth: auth_Reducer
});
export default rootReducer;