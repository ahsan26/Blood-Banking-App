import { database, auth } from "../../firebase";
import { AsyncStorage } from "react-native";
export default (state = { logged: "false", userD: "" }, action) => {
    switch (action.type) {
        case "SIGNUP":
            const email = action.payload.email;
            const password = action.payload.password;
            auth.createUserWithEmailAndPassword(email, password).then(function (d) {
                console.log("user added", d.uid);
                database.child("users").child(action.payload.type).child(d.uid).set({ "email": action.payload.email, "password": action.payload.password, "userName": action.payload.userName, "age": action.payload.age, "gender": action.payload.gender, "location": action.payload.location, "blood_group": action.payload.blood_group, "cellNumber": action.payload.cellNumber, "type": "Donor" });
                state = { ...state }
                state.logged = "true";
                state.userD = action.payload;
                return state;
            }).catch(e => {
                console.log(e);
            });
            break;
        case "SIGNIN":
            auth.signInWithEmailAndPassword(action.payload.email, action.payload.password).then(function (d) {
                state = { ...state }
                state.logged = "true";
                state.userD = action.payload;
                console.log("reducer1", state);
                return state;
            }).catch(e => {
                console.log(e);
            });
            break;

        case "LOGOUT":
            auth.signOut();
            state = { ...state };
            state.logged = false;
            return state;
    }
    return state;
}