import { database } from "../firebase";
function getDonors() {
    return dispatch => {
        database.on("value", snap => {
            dispatch({
                type: "GET_DONORS",
                payload: snap.val().users.Donor
            });
        });
    }
}
function getSeekers() {
    return dispatch => {
        database.on("value", snap => {
            dispatch({
                type: "GET_SEEKERS",
                payload: snap.val().users.bloodseeker
            });
        });
    }
}
export { getDonors, getSeekers };