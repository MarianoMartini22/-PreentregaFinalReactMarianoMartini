 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGpUNf00hdYkh35Bbp88Bk07-C4ZiPY1g",
    authDomain: "cursos-pepito.firebaseapp.com",
    databaseURL: "https://cursos-pepito-default-rtdb.firebaseio.com",
    projectId: "cursos-pepito",
    storageBucket: "cursos-pepito.appspot.com",
    messagingSenderId: "1094909083813",
    appId: "1:1094909083813:web:df5e7ad9280a72bb1d4d4c"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);