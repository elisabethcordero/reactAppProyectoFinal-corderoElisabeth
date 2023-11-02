import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY, 
  authDomain: "proyectofinal-react-5defd.firebaseapp.com",
  projectId: "proyectofinal-react-5defd",
  storageBucket: "proyectofinal-react-5defd.appspot.com",
  messagingSenderId: "372228008172",
  appId: "1:372228008172:web:fdf33b37e9c83810231dc9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
