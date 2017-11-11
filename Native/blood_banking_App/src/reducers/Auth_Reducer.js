import { database, auth } from "../../firebase";
import { AsyncStorage } from "react-native";
export default (state = {}, action) => {
    switch (action.type) {
        case "SIGNUP":
            console.log("reducer", action.payload.email, action.payload.password);
            const email = action.payload.email;
            const password = action.payload.password;
            auth.createUserWithEmailAndPassword(email, password).then(function (d) {
                console.log("user added", d.uid);
                database.child("users").child(action.payload.type).child(d.uid).set({ "email": action.payload.email, "password": action.payload.password, "userName": action.payload.userName, "age": action.payload.age, "gender": action.payload.gender, "location": action.payload.location, "blood_group": action.payload.blood_group, "cellNumber": action.payload.cellNumber, "type": "Donor" });
                AsyncStorage.setItem("logged", true);
            }).catch(e => {
                console.log(e);
            });
            break;
        case "SIGNIN":
            auth.signInWithEmailAndPassword(action.payload.email, action.payload.password).then(d => {
                AsyncStorage.setItem("logged", true);
                AsyncStorage.setItem("loggedUser", { "email": action.payload.email, "blood_group": action.payload.blood_group });
            }).catch(e => {
                console.log(e);
            });
            break;

        case "LOGOUT":
            auth.signOut();
            AsyncStorage.setItem("logged", false);
    }
    return state;
}
