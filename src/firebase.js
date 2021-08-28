import firebase from "firebase/app";
import "firebase/auth";

//authenication configuration
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyARt6btYWYFS4cOq3Px3FXOc3OH3Z-2P3s",
    authDomain: "rentdeck-8ced3.firebaseapp.com",
    projectId: "rentdeck-8ced3",
    storageBucket: "rentdeck-8ced3.appspot.com",
    messagingSenderId: "277704302029",
    appId: "1:277704302029:web:67a79d5cb2b39f6e16f884",
  })
  .auth();

