import { createUser } from '../../src/lib/index.js';
import { createUserWithEmailAndPassword } from '../../src/lib/firebase-utils.js';
import { updateProfile } from '../../src/lib/firebase-utils.js';
jest.mock('../../src/lib/firebase-utils.js')

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('el usuario deberia poder crear una cuenta', () => {
    const nameUser = 'karen'
    const email = 'karen@gmail.com'
    const password = 'poyo123'
    const userLast = 'Baron'
    const nickName = 'Karencilla'
    const auth = {};
    window.alert = jest.fn()
    return createUser(auth,email,password, nameUser,userLast,nickName,)
    .then(() => {
      expect(window.location.hash).toBe('#/')
      expect(window.alert).toHaveBeenCalledWith('El usuario ha sido creado')
  })  
})
});


