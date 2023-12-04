import type { FirebaseOptions } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
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
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

// Functions
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    debug('Error signing up with email and password', error);
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    debug('Error signing in with email and password', error);
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    debug('Error signing in with Google', error);
  }
};

export const createUserRecord = async (user: User) => {
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

export const checkUserInFirestore = async (user: User) => {
  const userRef = doc(firestore, 'users', user.uid);
  const docSnap = await getDoc(userRef);

  // User does not exist in Firestore, create a new record
  if (!docSnap.exists()) createUserRecord(user);
};
