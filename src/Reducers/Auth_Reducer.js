import { authRef, database } from "../firebase";
export default (state = {}, action) => {
    switch (action.type) {
        case "SIGNUP":
            authRef.createUserWithEmailAndPassword(action.payload.email, action.payload.password).then(d => {
                database.child("users").child(action.payload.type).child(d.uid).set({ "email": action.payload.email, "password": action.payload.password, "userName": action.payload.username, "age": action.payload.age, "gender": action.payload.gender, "location": action.payload.location, "blood_group": action.payload.bloodGroup, "cellNumber": action.payload.cellNumber, "type": action.payload.type });
                window.location.assign("/dashboard");
                localStorage.setItem("signIN", true);
            }).catch(e => {
                console.log(e);
            });
            break;
        case "SIGNIN":
            authRef.signInWithEmailAndPassword(action.payload.email, action.payload.password).then(d => {
                window.location.assign("/dashboard");
                console.log(d);
                localStorage.setItem("signIN", true);
            }).catch(e => {
                console.log(e);
            });
            break;
        case "LOGOUT":
            authRef.signOut();
            localStorage.setItem("signIN", false);
            window.location.assign("/");
    }
    return state;
}