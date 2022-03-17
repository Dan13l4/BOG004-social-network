export default () =>{
  const register = `
  <section class="registerDos">
    <div class="createUser">
      <form class="registrarse" id="task">
        <p>Nombre:</p>
        <input type="text" placeholder="Escribe tu nombre" id="name">
        <p>Apellido:</p>
        <input type="text" placeholder="Escribe tu apellido" id="lastname">
        <p>Correo electronico:</p>
        <input type="text" placeholder="Ingresa tu correo electronico" id="registerMail">
        <p>Contraseña:</p>
        <input type="text" placeholder="Ingresa una contraseña" id="registerPassword">

        <br>
        <br>
        <button class="ingresarRegistro" id="sumit">Registrarse</button>
      </form>
    </div>
  </section>`

  const divElem = document.createElement("div");
  divElem.innerHTML = register;

  return divElem;
}