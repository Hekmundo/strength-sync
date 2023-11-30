import type { FirebaseOptions } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { debug as d } from 'debug';

const debug = d('strengthsync:firebase');

// Firebase config and initialization
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCflCXCFbAg0lMdKxSpkvIkB7WoxWxrSKQ',
  authDomain: 'strengthsync-20caa.firebaseapp.com',
  projectId: 'strengthsync-20caa',
  storageBucket: 'strengthsync-20caa.appspot.com',
  messagingSenderId: '452759670539',
  appId: '1:452759670539:web:b607ddf417d4077b4bdc0e',
  measurementId: 'G-0R6VZ884X2'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(app);

// Functions
const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    debug('Error signing up with email and password', error);
  }
};

const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    debug('Error signing in with email and password', error);
  }
};

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    debug('Error signing in with Google', error);
  }
};

const createUserRecord = async (user: User) => {
  try {
    const userRef = doc(firestore, 'users', user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    });
    console.log('User record created in Firestore');
  } catch (error) {
    debug('Error creating user record', error);
  }
};

const checkUserInFirestore = async (user: User) => {
  const userRef = doc(firestore, 'users', user.uid);
  const docSnap = await getDoc(userRef);

  // User does not exist in Firestore, create a new record
  if (!docSnap.exists()) createUserRecord(user);
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    checkUserInFirestore(user);
  }
});

export { auth, googleProvider, firestore, signUpWithEmail, signInWithEmail, signInWithGoogle };
