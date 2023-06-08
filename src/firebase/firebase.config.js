// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPyypg9Ttrr_sJGqH7nGCqLhdAquvkV84",
  authDomain: "car-resale-f54af.firebaseapp.com",
  projectId: "car-resale-f54af",
  storageBucket: "car-resale-f54af.appspot.com",
  messagingSenderId: "189268161321",
  appId: "1:189268161321:web:532110c13930eac80ebd38",
  measurementId: "G-3CXQP418F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app