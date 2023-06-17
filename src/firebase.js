import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP1mOpBhzxw6yyjs5_TdBvrneAeS51VsY",
  authDomain: "ec-login-7d09b.firebaseapp.com",
  projectId: "ec-login-7d09b",
  storageBucket: "ec-login-7d09b.appspot.com",
  messagingSenderId: "179045631163",
  appId: "1:179045631163:web:b9d9cf79d55d2b0d9c559e",
  measurementId: "G-4XSSPXKW25",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;
