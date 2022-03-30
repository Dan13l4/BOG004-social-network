import { createUser } from '../lib/index.js';

export default () => {
  const register = `
  <nav class='start'>
        <a href='#/' class='btn'>Volver al inicio</a>
  </nav>
  <section class='registerTwo'>
    <div class='createUser'>
      <form class='form' id='task'>
      <p class= 'regist'>Usuario:</p>
      <input type='text' class= 'inputs' placeholder='Escribe tu usuario' id='registerUser'>
        <p class= 'regist'>Nombre:</p>
        <input type='text' class= 'inputs' placeholder='Escribe tu nombre' id='registerName'>
        <p class= 'regist'>Apellido:</p>
        <input type='text' class= 'inputs' placeholder='Escribe tu apellido' id='lastname'>
        <p class= 'regist'>Correo electronico:</p>
        <input type='text' class= 'inputs' placeholder='Ingresa tu correo electronico' id='registerMail'>
        <p class= 'regist'>Contraseña:</p>
        <input type='password' class= 'inputs' placeholder='Ingresa una contraseña' id='registerPassword'>
        <br>
        <br>
        <button type='submit' class='btnRegister' id='btnRegister'>Registrarse</button>
      </form>
    </div>
  </section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = register;

  divElem.querySelector('#btnRegister').addEventListener('click', () => {
    const email = document.getElementById('registerMail').value;
    const password = document.getElementById('registerPassword').value;
    const nameUser = document.getElementById('registerName').value;
    const userLast = document.getElementById('lastname').value;
    const nickName = document.getElementById('registerUser').value;

    createUser(email, password, nameUser, userLast, nickName);
  });
  return divElem;
};
