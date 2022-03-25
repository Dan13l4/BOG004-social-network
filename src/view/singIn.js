import { createU } from '../lib/index.js';

export default () => {
  const register = `
  <nav class='start'>
        <a href='#/' class='btn'>Volver al inicio</a>
  </nav>
  <section class='registerTwo'>
    <div class='createUser'>
      <form class='form' id='task'>
      <p>Usuario:</p>
      <input type='text' placeholder='Escribe tu usuario' id='registerUser'>
        <p>Nombre:</p>
        <input type='text' placeholder='Escribe tu nombre' id='registerName'>
        <p>Apellido:</p>
        <input type='text' placeholder='Escribe tu apellido' id='lastname'>
        <p>Correo electronico:</p>
        <input type='text' placeholder='Ingresa tu correo electronico' id='registerMail'>
        <p>Contraseña:</p>
        <input type='password' placeholder='Ingresa una contraseña' id='registerPassword'>

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
    const nickName = document.getElementById('nickName').value;

    createU(email, password, nameUser, userLast, nickName);
  });

  return divElem;
};
