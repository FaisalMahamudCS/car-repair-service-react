// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA27nm6KA3B0o0DQFFL7gSB1N2a8rsXgxU",
    authDomain: "genius-car-services-f2e37.firebaseapp.com",
    projectId: "genius-car-services-f2e37",
    storageBucket: "genius-car-services-f2e37.appspot.com",
    messagingSenderId: "30314614318",
    appId: "1:30314614318:web:73ba1e1a8a6da6dbbf99bf",
    measurementId: "G-2PZKJ0EP84"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;