import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpylC__kmwmJ9CjnjTjDFp_YewhHR7OAo",
    authDomain: "crwn-db-project.firebaseapp.com",
    databaseURL: "https://crwn-db-project.firebaseio.com",
    projectId: "crwn-db-project",
    storageBucket: "crwn-db-project.appspot.com",
    messagingSenderId: "873564336173",
    appId: "1:873564336173:web:e5ca0bd7e219ae4ac508a4",
    measurementId: "G-V6EC5T3WT9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;