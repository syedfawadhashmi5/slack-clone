import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjUtAl4oGSxIRxZ31BXiocw0VVCkHUQuw",
    authDomain: "chat-web-app-cc7b7.firebaseapp.com",
    projectId: "chat-web-app-cc7b7",
    storageBucket: "chat-web-app-cc7b7.appspot.com",
    messagingSenderId: "779803369994",
    appId: "1:779803369994:web:449d740a443b6b025075f3",
    measurementId: "G-EHT124QQTB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 
  
  export { auth, provider };
  export default db;