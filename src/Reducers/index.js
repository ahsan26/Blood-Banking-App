import { combineReducers } from "redux";
import auth_Reducer from "./Auth_Reducer";
import data_Fetcher from "./Data_Fetcher";
const rootReducer = combineReducers({
    auth: auth_Reducer,
    data_Fetcher: data_Fetcher
});
export default rootReducer;