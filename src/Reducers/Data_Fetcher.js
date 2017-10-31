import { database } from "../firebase";
export default (state = { donors: [], seekers: [] }, action) => {
    switch (action.type) {
        case "GET_DONORS":
            state = {
                ...state
            }
            var donors = Object.keys(action.payload).map(a=>({...action.payload[a] , key: a}))
            state.donors=donors;
            break;
        case "GET_SEEKERS":
            state = {
                ...state
            }
            var seekers = Object.keys(action.payload).map(a => ({...action.payload[a], key: a}))
            state.seekers = seekers;
    }
    return state;
}
