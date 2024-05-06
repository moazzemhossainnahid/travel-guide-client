// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSW2jYwlWJCPeX6clCcYmH_LtlF0z8qmk",
  authDomain: "travel-guide-c3681.firebaseapp.com",
  projectId: "travel-guide-c3681",
  storageBucket: "travel-guide-c3681.appspot.com",
  messagingSenderId: "293246266461",
  appId: "1:293246266461:web:af41129898f5f2d26af1b4"
};
 
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 