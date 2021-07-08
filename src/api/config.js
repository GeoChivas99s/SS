import "firebase/auth";
import "firebase/firestore";

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBc-6oRbb4Nei-Fh8VI_YykCpLex4TNC4U",
  authDomain: "super-soft.firebaseapp.com",
  projectId: "super-soft",
  storageBucket: "super-soft.appspot.com",
  messagingSenderId: "114741286593",
  appId: "1:114741286593:web:9aadee07f3caa817e8a640"
};

if (!firebase.app) firebase.initializeApp(firebaseConfig);

export default firebase;
