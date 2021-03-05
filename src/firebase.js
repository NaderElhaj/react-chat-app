import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAI4Iiu9QEgef5LFPVUYagke8TaJYnwxP8",
    authDomain: "slack-97e9e.firebaseapp.com",
    projectId: "slack-97e9e",
    storageBucket: "slack-97e9e.appspot.com",
    messagingSenderId: "252021962234",
    appId: "1:252021962234:web:d868f9e63808b259ca6043",
    measurementId: "G-ED3TRP9LZC"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};