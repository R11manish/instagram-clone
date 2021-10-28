// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD7JD_BIrMq6QNdD8n6SkHfXlrv9y4XUUY',
  authDomain: 'insta-clone-7dabf.firebaseapp.com',
  projectId: 'insta-clone-7dabf',
  storageBucket: 'insta-clone-7dabf.appspot.com',
  messagingSenderId: '994191598262',
  appId: '1:994191598262:web:b2e53e52efd2417ebcfc17',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
