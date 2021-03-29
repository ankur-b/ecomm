import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAOWjxc1dq8COv6mv2Mmy1We8wwlVlsjBg",
    authDomain: "ecom-edb34.firebaseapp.com",
    databaseURL: "https://ecom-edb34-default-rtdb.firebaseio.com",
    projectId: "ecom-edb34",
    storageBucket: "ecom-edb34.appspot.com",
    messagingSenderId: "449968621116",
    appId: "1:449968621116:web:a2e976a350e01da2f3e539",
    measurementId: "G-XN6Z6W27RG"
};
export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if (!userAuth){
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get()
    if(!snapshot.exists){
        const { displayName, email} = userAuth
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log('error creating user',error.message)
        }
    }
    return userRef
}
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase