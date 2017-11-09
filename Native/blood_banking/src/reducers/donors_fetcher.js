export default (state = {
    donors: ["t1", "t2"]
}, action) => {
    switch (action.type) {
        case "GET_DONORS":
            state = { ...state }
            state.donors = action.payload;
            return state;
    }
    return state;
}