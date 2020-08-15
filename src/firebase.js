import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA0J5uL1PeZEbZg48mA6B-81aUVJW7aGx4",
    authDomain: "tinder-clone-a9d1a.firebaseapp.com",
    databaseURL: "https://tinder-clone-a9d1a.firebaseio.com",
    projectId: "tinder-clone-a9d1a",
    storageBucket: "tinder-clone-a9d1a.appspot.com",
    messagingSenderId: "249751812481",
    appId: "1:249751812481:web:34628b9bfd110cc3729080",
    measurementId: "G-5EBDM8L2VZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database =firebaseApp.firestore();

  export default database;