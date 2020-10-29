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
  export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists){
      const {displayName, email} = userAuth
      const createdAt = new Date()
      try{
        await userRef.set({
          displayName,email,createdAt,...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message)
      }
    }
    return userRef
  }
  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;