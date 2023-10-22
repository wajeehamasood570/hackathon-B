// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdwAxidrnNHniYVGUzF6tMP6ZoFsc7j-4",
  authDomain: "hackathon-c7453.firebaseapp.com",
  databaseURL: "https://hackathon-c7453-default-rtdb.firebaseio.com",
  projectId: "hackathon-c7453",
  storageBucket: "hackathon-c7453.appspot.com",
  messagingSenderId: "104128992113",
  appId: "1:104128992113:web:5eccdf94fc496a329cdcd0",
  measurementId: "G-1Q7JF7QX88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const imgDB = getStorage(app)
export {imgDB};