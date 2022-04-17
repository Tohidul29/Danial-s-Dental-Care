// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxXiMSC8JTPbqTUTC3ZOBy2aW6DwXNHpA",
    authDomain: "assignment-10-cc88c.firebaseapp.com",
    projectId: "assignment-10-cc88c",
    storageBucket: "assignment-10-cc88c.appspot.com",
    messagingSenderId: "419835038714",
    appId: "1:419835038714:web:222204dc503f74e53d7243"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;