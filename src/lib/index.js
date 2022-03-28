import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';

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

import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  doc,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

import { look } from '../view/postWall.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBjr-ZpWK_pg0Apckfty-O56ZqnFhwSO_U',
  authDomain: 'valorant-social.firebaseapp.com',
  projectId: 'valorant-social',
  storageBucket: 'valorant-social.appspot.com',
  messagingSenderId: '700869464423',
  appId: '1:700869464423:web:88689d128213e38acb1fc2',
  measurementId: 'G-1KJ7QLNHYF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);
export const user = auth.currentUser;

// registro de usuario
export const createU = (email, password, nameUser, userLast, nickName) => {
  createUserWithEmailAndPassword(
    auth,
    email,
    password,
    nameUser,
    userLast,
    nickName,
  )
    .then((userCredential) => {
      const user = userCredential.user;
      alert('El usuario ha sido creado');
      window.location.hash = '#/';
      updateProfile(auth.currentUser, {
        displayName: nameUser,
      });
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('El correo o la contraseña son incorrectos, intentalo de nuevo');
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
      window.location.hash = '#/board';
      alert('El usuario se ha registrado con exito');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode + errorMessage);
    });
};

// Iniciar sesion
export const loginInit = (userEmail, userPassword) => {
  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/board';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('El usuario o la contraseña son incorrectas');
      console.log(errorCode + errorMessage);
    });
};

// cerrar Sesión
export const close = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = '#/';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

// Mirar si el usuario esta logueado
export const lookout = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      window.location.hash = '#/board';
    } else if (!window.location.hash.includes('registerPage')) {
      window.location.hash = '#/';
    }
  });
};

// Crear post
// genera la data
export const recet = async (postData) => {
  const docRef = await addDoc(collection(db, 'posts'), {
    publicacion: postData,
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    userId: auth.currentUser.uid,
    like: [],
    numberLike: 0,
    date: Date(Date.now()),
  });
  console.log('Document written with ID: ', docRef.id);
  return docRef;
};

// traer la data
export const readData = () => {
  const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const postsBox = [];
    querySnapshot.forEach((doc) => {
      const task = {};
      task.id = doc.id;
      task.data = doc.data();
      postsBox.push({ task });
    });
    look(postsBox);
    return postsBox;
  });
};
