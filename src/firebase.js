// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1VYJh6LfC4GRlsbl2YWoTYgvb9Ixnq50',
  authDomain: 'amateur-41afd.firebaseapp.com',
  projectId: 'amateur-41afd',
  storageBucket: 'amateur-41afd.appspot.com',
  messagingSenderId: '535328490333',
  appId: '1:535328490333:web:4eb90ce6822352a87edeb4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const colRef = collection(db, 'post');

export function loginUser() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}
