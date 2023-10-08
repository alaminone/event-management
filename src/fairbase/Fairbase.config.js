// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2VhR6wMl7lW-BtV7kPe8APUHBIOPkFqU",
  authDomain: "xijan-event-project.firebaseapp.com",
  projectId: "xijan-event-project",
  storageBucket: "xijan-event-project.appspot.com",
  messagingSenderId: "214309208826",
  appId: "1:214309208826:web:cb6c3321e7da3fc92dbf43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;