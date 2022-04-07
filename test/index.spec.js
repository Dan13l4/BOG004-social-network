import { createUser } from '../src/lib/firebase-utils.js';
jest.mock('../src/lib/firebase-utils')

describe('createUser', () => {
  console.log(createUser)
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});


