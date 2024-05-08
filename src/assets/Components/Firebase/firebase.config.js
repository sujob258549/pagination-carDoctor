// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_cgaGGWtojkT30Il0l6-YKo0un8KHTl0",
  authDomain: "care-doctor-d2ecf.firebaseapp.com",
  projectId: "care-doctor-d2ecf",
  storageBucket: "care-doctor-d2ecf.appspot.com",
  messagingSenderId: "763068840586",
  appId: "1:763068840586:web:14837c7b15de1b0f3e4b73"


//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app