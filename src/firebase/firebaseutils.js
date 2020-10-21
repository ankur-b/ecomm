import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBS2PAlXt3NNwJUNBGskOpcIMlk9Rz1H0Y",
    authDomain: "ecom-db-d581a.firebaseapp.com",
    databaseURL: "https://ecom-db-d581a.firebaseio.com",
    projectId: "ecom-db-d581a",
    storageBucket: "ecom-db-d581a.appspot.com",
    messagingSenderId: "254376700126",
    appId: "1:254376700126:web:24c185f75c8a9c7cb73a4f",
    measurementId: "G-XB365QQVTY"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;