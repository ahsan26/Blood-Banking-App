import { database } from "../../firebase";
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
function signOut() {
    return dispatch => {
        dispatch({
            type: "LOGOUT",
            payload: ""
        });
    }
}
export { signUp, signIn, signOut };