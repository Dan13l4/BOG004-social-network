export const getFirestore = () => {
    return {}; 
}

export const initializeApp = () => {
    return {};
}

export const createUserWithEmailAndPassword = (auth,email,password, nameUser,userLast,nickName,) => {
        if(nameUser === 'karen'){
            return Promise.reject(undefined)
        }
    return Promise.resolve({ user: '' });
}

export const updateProfile = () => {
    return Promise.resolve();
}

export const getAuth = () => {
    return {};
}

export class GoogleAuthProvider {}

export const signInWithPopup = () => {
    return Promise.resolve();
}
export const getRedirectResult = () => {
    return Promise.resolve();
}