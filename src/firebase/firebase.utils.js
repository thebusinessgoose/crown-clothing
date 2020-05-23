import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCszypq7-2_63x-_LFqKbCDyoLJOtICSCE",
    authDomain: "crown-clothing-db-e82ee.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-e82ee.firebaseio.com",
    projectId: "crown-clothing-db-e82ee",
    storageBucket: "crown-clothing-db-e82ee.appspot.com",
    messagingSenderId: "986968923247",
    appId: "1:986968923247:web:c02d6de021fd66823e419a",
    measurementId: "G-6246EJM7JF"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;