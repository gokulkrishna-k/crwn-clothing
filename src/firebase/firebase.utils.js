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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
