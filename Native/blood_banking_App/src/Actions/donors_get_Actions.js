import { database } from "../../firebase";
function getDonors() {
    return dispatch => {
        database.on("value", snap => {
            dispatch({
                type: "GET_DONORS",
                payload: Object.values(snap.val().users.Donor)
            });
        });
    }
}
export { getDonors };