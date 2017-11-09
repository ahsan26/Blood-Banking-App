import { combineReducers } from "redux";
import Donors_Fetcher from "./donors_fetcher";
const rootReducer = combineReducers({
    donors: Donors_Fetcher
});
export default rootReducer;