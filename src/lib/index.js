// Configuracion firebase
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

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
  } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

  import { 
    getFirestore,
    collection, 
    addDoc, 
    getDoc 
  } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjr-ZpWK_pg0Apckfty-O56ZqnFhwSO_U",
    authDomain: "valorant-social.firebaseapp.com",
    projectId: "valorant-social",
    storageBucket: "valorant-social.appspot.com",
    messagingSenderId: "700869464423",
    appId: "1:700869464423:web:88689d128213e38acb1fc2",
    measurementId: "G-1KJ7QLNHYF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider(app);
  export const user = auth.currentUser;


// registro de usuario
export const createU = (email, password, nameUser, userLast) => {
  createUserWithEmailAndPassword(auth, email, password, nameUser, userLast)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log("created");
      alert("El usuario ha sido creado")
      window.location.hash = '#/';
      updateProfile(auth.currentUser, {
        displayName: nameUser,

      })

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("El correo o la contraseña son incorrectos, intentalo de nuevo")
      console.log(errorCode + errorMessage);
    });
};

// registro con google
export const whithGoogle = () => {
  signInWithPopup(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      alert("El usuario se ha registrado con exito")
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert("El correo es invalido")
    });
}
