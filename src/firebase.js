// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYko_68hfliB1BpiKO7-yQ6LN45evenyA",
  authDomain: "diet-app-a878a.firebaseapp.com",
  projectId: "diet-app-a878a",
  storageBucket: "diet-app-a878a.appspot.com",
  messagingSenderId: "624775711843",
  appId: "1:624775711843:web:efa4aabb8d257d74797c56",
  measurementId: "G-X5T3619EP0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);