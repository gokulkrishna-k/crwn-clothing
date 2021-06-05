import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAe5vVLRVgup3IxlxlIxeNuycnlv6APYds',
  authDomain: 'crwn-clothing-gk.firebaseapp.com',
  projectId: 'crwn-clothing-gk',
  storageBucket: 'crwn-clothing-gk.appspot.com',
  messagingSenderId: '1079905504106',
  appId: '1:1079905504106:web:45df245b38d4f0b44b7313',
};

export const createUserProfileDocumnet = async (userAuth, aditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData,
      });
    } catch (error) {
      console.log('error creating user: ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
