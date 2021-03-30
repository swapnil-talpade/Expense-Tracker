// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAKBPc_rmL2LtFD9S5o6eEj0A1Nk3pisKY",
    authDomain: "expense-tracker-d8f52.firebaseapp.com",
    databaseURL: "https://expense-tracker-d8f52-default-rtdb.firebaseio.com",
    projectId: "expense-tracker-d8f52",
    storageBucket: "expense-tracker-d8f52.appspot.com",
    messagingSenderId: "68133471675",
    appId: "1:68133471675:web:7932c3bdd725048641b09e",
    measurementId: "G-GPY0W6V6QG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default firebase;