import { createU } from "../lib/index.js"

export default () =>{
  const register = `
  <section class="registerDos">
    <div class="createUser">
      <form class="registrarse" id="task">
        <p>Nombre:</p>
        <input type="text" placeholder="Escribe tu nombre" id="registerName">
        <p>Apellido:</p>
        <input type="text" placeholder="Escribe tu apellido" id="lastname">
        <p>Correo electronico:</p>
        <input type="text" placeholder="Ingresa tu correo electronico" id="registerMail">
        <p>Contraseña:</p>
        <input type="text" placeholder="Ingresa una contraseña" id="registerPassword">

        <br>
        <br>
        <button type="submit" class="ingresarRegistro" id="btnRegister">Registrarse</button>
      </form>
    </div>
  </section>`

  const divElem = document.createElement("div");
  divElem.innerHTML = register;

  divElem.querySelector('#btnRegister').addEventListener('click', () => {
    const email = document.querySelector('#registerMail').value;
    const password = document.querySelector('#registerPassword').value;
    const nameUser = document.querySelector('#registerName').value;
    const userLast = document.querySelector("#lastname").value;

    createU(email, password, nameUser);
  });

  return divElem;
}