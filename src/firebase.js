import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'talker-b998e.firebaseapp.com',
  projectId: 'talker-b998e',
  storageBucket: 'talker-b998e.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
