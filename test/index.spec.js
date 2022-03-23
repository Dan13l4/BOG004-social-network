// importamos la funcion que vamos a testear
import { loginInit } from '../src/lib/index';

describe('loginInit', () => {
  it('debería ser una función', () => {
    expect(typeof loginInit).toBe('function');
  });
});
