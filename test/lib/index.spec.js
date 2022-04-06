import { createUser } from '../../src/lib/firebase-utils.js';

jest.mock('../../src/lib/firebase-utils.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});

it('Deberia permitir la creacion de un usuario', async () => {
  createUser('ejemplo@gmail.com', '123456');
  await new Promise((r) => { setTimeout(r, 2000); });// Espera 2 segundos
  expect(document.getElementById('id-message-error-record').innerHTML).toBe('');
});
