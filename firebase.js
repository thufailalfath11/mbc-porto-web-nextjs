import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOm2BvH-qq1ph396y0Lv-eUnmXTOfEWXo",
    authDomain: "mbc-porto.firebaseapp.com",
    projectId: "mbc-porto",
    storageBucket: "mbc-porto.appspot.com",
    messagingSenderId: "84834993214",
    appId: "1:84834993214:web:e8e7da8ca0844e660bfd6f",
    measurementId: "G-66Z35D4EM8"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }