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
    database.on("value", snap => {
        let users = [];
        Object.keys(snap.val().users.Blood_Seeker).map((uid, i) => { users.push(snap.val().users.Blood_Seeker[uid]) });
        Object.keys(snap.val().users.Donor).map((uid, i) => { users.push(snap.val().users.Donor[uid]) });
        let mainUser = users.filter(item => {
            return item.email == obj.email
        });
        localStorage.setItem("user_type", mainUser[0].type);
    })
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