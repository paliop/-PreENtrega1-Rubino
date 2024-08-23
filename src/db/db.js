import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

  apiKey: "AIzaSyAFAebr4Nsr3CsDf3YnQc_dwsANfVuNiqA",

  authDomain: "paliplantde.firebaseapp.com",

  projectId: "paliplantde",

  storageBucket: "paliplantde.appspot.com",

  messagingSenderId: "606019226867",

  appId: "1:606019226867:web:8959593bb115c0988dbb86",

  measurementId: "G-KZFHWWKLGX"

};

initializeApp(firebaseConfig);

const db=getFirestore()

export {db};


