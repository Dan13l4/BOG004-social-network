import createUser from '../../src/view/singIn.js';

jest.mock('../../src/lib/firebase-utils.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});


//SUBIR CAMBIOS AAAAAAAAAAAAAA