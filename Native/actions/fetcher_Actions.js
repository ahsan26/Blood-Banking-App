import { databaseRef } from "../firbase";
import { objConverter } from "../utils/helper";
function getDonors() {
    return dispatch => {
        databaseRef.on("value", snap => {
            dispatch({
                type: "fetch_Donors",
                payload: objConverter(snap.val().users.Donor)
            });
        });
    }
}
export { getDonors };