import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBoskVvAiozd4oJOx5436HHs2vB7gYIBQI",
    authDomain: "travelgram-42aac.firebaseapp.com",
    projectId: "travelgram-42aac",
    storageBucket: "travelgram-42aac.appspot.com",
    messagingSenderId: "33301693325",
    appId: "1:33301693325:web:ec8972efd4a7325fe333c4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //google auth
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

