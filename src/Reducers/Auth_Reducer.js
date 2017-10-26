import { authRef, database } from "../firebase";
export default (state = {}, action) => {
    switch (action.type) {
        case "SIGNUP":
            authRef.createUserWithEmailAndPassword(action.payload.email, action.payload.password).then(d => {
                database.child("users").child(d.uid).set({ "email": action.payload.email, "password": action.payload.password });
                window.location.assign("/dashboard");
            }).catch(e => {
                console.log(e);
            });
            break;
        case "SIGNIN":
            authRef.signInWithEmailAndPassword(action.payload.email, action.payload.password).then(d => {
                window.location.assign("/dashboard");
                console.log(d);
            }).catch(e => {
                console.log(e);
            });
            break;
        case "LOGOUT":
            authRef.signOut();
            break;
    }
    return state;
}