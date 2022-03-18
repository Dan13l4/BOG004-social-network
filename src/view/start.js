export default () =>{ 
    const home = `
  <section class="firstPage">
    <div class="user">
      <p>Correo electronico:</p>
      <input type="text" placeholder="Escribe tu email" id="email">
    </div>

    <div class="password">
      <p>Contraseña:</p>
      <input type="text" placeholder="Escribe tu contraseña" id="password">
    </div>

    <div class="btnEnter">
      <button id="btnEnter">Ingresar</button>
    </div>

    <div class="register">
      <p>¿No tienes usuario?</p> 
      <a href="#/registerPage" class="organize" id="register">Registrate aqui</a> 
      <p>o ingresa con</p> 
      <a href="#/registroGoogle" class="organize">Google</a>
    </div>
  </section>
  <footer class="final">Creado por Gisbel Contreras y Karen Baron</footer>`

  const divElem = document.createElement("div");
  divElem.innerHTML = home;

  return divElem;
}