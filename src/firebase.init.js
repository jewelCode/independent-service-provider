// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5lgT2gHuTfjsxgFf054MSqmbgpLA9FAc",
  authDomain: "lawyer-service-d75bc.firebaseapp.com",
  projectId: "lawyer-service-d75bc",
  storageBucket: "lawyer-service-d75bc.appspot.com",
  messagingSenderId: "351144343924",
  appId: "1:351144343924:web:0e09eb9e979c1c4891d421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

