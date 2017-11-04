export default (state = {
    donors: ["gg"]
}, action) => {
    switch (action.type) {
        case "fetch_Donors":
            state = { ...state }
            state.donors = action.payload
            break;
    }
    return state;
}