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
            console.log(snap.val());
            dispatch({
                type: "GET_SEEKERS",
                payload: snap.val().users.Blood_Seeker
            });
        });
    }
}
export { getDonors, getSeekers };
