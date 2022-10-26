// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//dotenv
import dotenv from "dotenv";
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.API_KEy,
	authDomain: "web503-firebase-test.firebaseapp.com",
	projectId: "web503-firebase-test",
	storageBucket: "web503-firebase-test.appspot.com",
	messagingSenderId: "187942757556",
	appId: "1:187942757556:web:b3ad0a77eeb3e2b092e3e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
