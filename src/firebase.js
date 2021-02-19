import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHPFprBL5XKt7afxXCWYuHXonKbpCrIgM",
    authDomain: "linkedin-clone-5ebs.firebaseapp.com",
    projectId: "linkedin-clone-5ebs",
    storageBucket: "linkedin-clone-5ebs.appspot.com",
    messagingSenderId: "58804335815",
    appId: "1:58804335815:web:27cf4df2ed24315d24fae2",
    measurementId: "G-9SMJNSLL1M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}