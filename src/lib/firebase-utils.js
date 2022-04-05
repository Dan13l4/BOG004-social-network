import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';

export { initializeApp }

import {
    updateProfile,
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    getRedirectResult,
    onAuthStateChanged,
  } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

  export { updateProfile,
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    getRedirectResult,
    onAuthStateChanged,}


  import {
    getFirestore,
    collection,
    addDoc,
    query,
    onSnapshot,
    orderBy,
    doc,
    getDoc,
    updateDoc,
    arrayRemove,
    arrayUnion,
    deleteDoc,
  } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

  export { getFirestore,
    collection,
    addDoc,
    query,
    onSnapshot,
    orderBy,
    doc,
    getDoc,
    updateDoc,
    arrayRemove,
    arrayUnion,
    deleteDoc,}