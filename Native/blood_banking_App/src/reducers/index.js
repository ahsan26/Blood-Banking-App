import { combineReducers } from "redux";
import Donors_Fetcher from "./donors_fetcher";
import Auth_Reducer from "./Auth_Reducer";
const rootReducer = combineReducers({
    donors: Donors_Fetcher,
    auth: Auth_Reducer
});
export default rootReducer;