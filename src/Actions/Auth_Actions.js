function signUp(obj) {
    return dispatch => {
        dispatch({
            type: "SIGNUP",
            payload: obj
        })
    }
}
function signIn(obj) {
    return dispatch => {
        dispatch({
            type: "SIGNIN",
            payload: obj
        });
    }
}
export { signUp, signIn };