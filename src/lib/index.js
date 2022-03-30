/* eslint-disable */
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
  getDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
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
export const createUser = (email, password, nameUser, userLast, nickName) => {
  // Traemos la funcion de firebase para crear un usuario
  createUserWithEmailAndPassword(
    auth,
    email,
    password,
    nameUser,
    userLast,
    nickName,
  )
  // La promesa verifica que se cumplan los parametros y retorna la promesa resuelta
    .then((userCredential) => {
      user = userCredential.user;
      // Se lanza una alerta para notificar al usuario que se creo el usuario
      alert('El usuario ha sido creado');
      // Se manda al usuario a la pagina de inicio para que inicie sesion
      window.location.hash = '#/';
      // Se actualizar el perfil de usuario con el nombre ingresado
      updateProfile(auth.currentUser, {
        displayName: nameUser,
      });
    })
    // Si la promesa es rechazada manda un mensaje de error
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
      // Esto le da un token de acceso de Google. Puede usarlo para acceder a la API de Google.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // La información del usuario registrado.
      const user = result.user;
      // Se manda el usuario al board para empezar a publicar.
      window.location.hash = '#/board';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Hay un error con el correo electrónico de la cuenta de usuario utilizada.
      const email = error.email;
      // Hay un error con el AuthCredential usado
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode + errorMessage);
    });
};

// Iniciar sesion
export const loginIn = (userEmail, userPassword) => {
  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      // El usuario inicia sesion sin problemas
      const user = userCredential.user;
      window.location.hash = '#/board';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('El usuario o la contraseña son incorrectas');
    });
};

// cerrar Sesión
export const closeSesion = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = '#/';
      //el usuario cierra sesion sin problemas
    })
    .catch((error) => {
      // Ocurrio un error y el usuario no puede cerrar sesion
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
      // Se verifica el lugar donde se encuetra el usuario incluyendo la pagina de registro, para evitar que si el usuario esta logueado
      // pueda usar los botones de volver
      window.location.hash = '#/';
    }
  });
};

// Crear post
// genera la data
export const savePost = async (postData) => {
  // El await para el async hasta que la promesa pase
  // Con addDoc y collection guardamos lo que el usuario escriba dentro del input en la coleccion indicada
  const docRef = await addDoc(collection(db, 'posts'), {
    publicacion: postData,
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    userId: auth.currentUser.uid,
    // Aqui creamos una array para llevar un conteo de los likes, para que queden almacenados
    like: [],
    numberLike: 0,
    date: Date(Date.now()),
  });
  return docRef;
};

// traer la data
export const showPost = () => {
  // Aqui llamamos todos los elementos de la coleccion y con OrderBy los organizamos por fecha
  // y por forma descendente
  const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    // Creamos una array donde se veran todos los posts
    const postsBox = [];
    querySnapshot.forEach((doc) => {
      // Hacemos que cada una de las publicaciones se combiertan en un objeto y las empujamos al array
      const task = {};
      task.id = doc.id;
      task.data = doc.data();
      postsBox.push({ task });
    });
    look(postsBox);
    return postsBox;
  });
};

// Dar like
export const likepost = async (id, userId) => {
  const postRef = doc(db, "posts", id);
  const docLike = await getDoc(postRef);
  const dataLike = docLike.data();

  if ((dataLike.like).includes(userId)) {
    await updateDoc(postRef, {
      like: arrayRemove(userId),
      numberLike: dataLike.numberLike - 1,
    });
  } else {
    await updateDoc(postRef, {
      like: arrayUnion(userId),
      numberLike: dataLike.numberLike + 1,
    });
  }
};
/* eslint-enable */

//Like y Dislike
