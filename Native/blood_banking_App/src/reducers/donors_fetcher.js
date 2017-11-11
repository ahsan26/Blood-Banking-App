export default (state = {
    donors: []
}, action) => {
    switch (action.type) {
        case "GET_DONORS":
            state = { ...state }
            state.donors = action.payload;
            return state;
    }
    return state;
}