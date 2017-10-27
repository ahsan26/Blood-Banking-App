import { database } from "../firebase";
export default (state = { donors: [], seekers: [] }, action) => {
    switch (action.type) {
        case "GET_DONORS":
            state = {
                ...state
            }
            state.donors.push(action.payload);
            break;
        case "GET_SEEKERS":
            state = {
                ...state
            }
            state.seekers.push(action.payload);
    }
    return state;
}