// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmoVeyEvkcHMGmht77nGV4kQpqH9fepNc",
  authDomain: "mern-book-inventory-3c7fc.firebaseapp.com",
  projectId: "mern-book-inventory-3c7fc",
  storageBucket: "mern-book-inventory-3c7fc.appspot.com",
  messagingSenderId: "688181516139",
  appId: "1:688181516139:web:9a77b4d2afaaaf495e1e2e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;