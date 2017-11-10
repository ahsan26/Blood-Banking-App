import { database } from "../../firebase";
function getDonors() {
    return dispatch => {
        database.on("value", snap => {
            console.log(snap.val());
        })
        dispatch({
            type: "GET_DONORS",
            payload: ""
        });
    }
}
export { getDonors };