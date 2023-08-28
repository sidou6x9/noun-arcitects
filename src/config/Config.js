import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0yqWDbVDHqpOJbhcYEDpo7dy6mo0f-ZE",
  authDomain: "start2grow-792bf.firebaseapp.com",
  projectId: "start2grow-792bf",
  storageBucket: "start2grow-792bf.appspot.com",
  messagingSenderId: "816689167425",
  appId: "1:816689167425:web:a582cbda26ed72eb6e9ac0",
  measurementId: "G-5J84DBTPFN",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
