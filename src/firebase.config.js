/* eslint-disable no-unused-vars */
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig1 = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
  appId: process.env.REACT_APP_FIREBASE_APPI_ID,
};
const firebaseConfig2 = {
  apiKey: "AIzaSyAfOQtASjCNvb-z5K57xn6inoFVCFNHSdQ",
  authDomain: "fruit-delivery-8b0f7.firebaseapp.com",
  databaseURL:
    "https://fruit-delivery-8b0f7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fruit-delivery-8b0f7",
  storageBucket: "fruit-delivery-8b0f7.appspot.com",
  messagingSenderId: "912039851229",
  appId: "1:912039851229:web:6be3b24776cbb5fb739734",
  measurementId: "G-TVJ78Y3DKR",
};
const firebaseConfig = {
  apiKey: "AIzaSyBzT06_S9LhLbFGmDgnlgW5Bf9P3qRFASw",
  authDomain: "adwa-619ee.firebaseapp.com",
  databaseURL:
    "https://adwa-619ee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adwa-619ee",
  storageBucket: "adwa-619ee.appspot.com",
  messagingSenderId: "423007064814",
  appId: "1:423007064814:web:896c2f5f8b1662560919ff",
  measurementId: "G-PTM3PVF6RL",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, db, storage, firestore };
