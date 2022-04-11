import { whithGoogle } from '../../src/lib/index.js';
jest.mock('../../src/lib/firebase-utils.js')

describe('withGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof whithGoogle).toBe('function');
   
})
});

it('el usuario deberia poder crear una cuenta', async () => {
    const user = 'gisbel@gmail.com';
   expect.assertions(1)
   return await whithGoogle()
     .then(() => {
    expect(window.location.hash).toBe('#/board')
})
})