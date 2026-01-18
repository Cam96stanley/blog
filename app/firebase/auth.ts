"use client";

import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

export async function signIn(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signOut() {
  return await firebaseSignOut(auth);
}

export function subscribeToAuthState(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser() {
  return auth.currentUser;
}
