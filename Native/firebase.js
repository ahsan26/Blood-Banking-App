import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyAGZ56rX6xM5BtOTMk57qOG27RfjAuYQgI",
    authDomain: "message-bot-practi.firebaseapp.com",
    databaseURL: "https://message-bot-practi.firebaseio.com",
    projectId: "message-bot-practi",
    storageBucket: "message-bot-practi.appspot.com",
    messagingSenderId: "1034943234205"
};
firebase.initializeApp(config);

let database = firebase.database().ref();
let auth = firebase.auth();
export { database, auth };