// importamos la funcion que vamos a testear
import { loginIn } from '../src/lib/index';

describe('loginIn', () => {
  it('debería ser una función', () => {
    expect(typeof loginIn).toBe('function');
  });
});
