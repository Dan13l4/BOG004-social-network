import { whithGoogle,ingreso} from "../lib/index.js";

export default () =>{ 
    const home = `
  <section class="firstPage">

  <div class="intro">
  
      <div class="user">
        <img src="./img/valorantlogo.png" alt="logoValorant" class="logo">
      </div>

      <div class="user">
        <p>Correo electronico:</p>
        <input type="text" placeholder="Escribe tu email" id="email">
      </div>

      <div class="password">
        <p>Contraseña:</p>
        <input type="password" placeholder="Escribe tu contraseña" id="password">
      </div>

      <div class="btnEnter">
        <button id="btnEnter">Ingresar</button>
      </div>

      <div class="register">
        <p>¿No tienes usuario?</p> <a href="#/registerPage" class="organize" id="register">Registrate aqui</a> <p>o ingresa con</p> <a href="#/" class="organize" id="google">Google</a>
      </div>
    </div>
    
  </section>
  <footer class="final">Creado por Gisbel Contreras y Karen Baron</footer>`

  const divElem = document.createElement("div");
  divElem.className = "fisrtPage"
  divElem.innerHTML = home;

  divElem.querySelector('#google').addEventListener('click', () => {
    whithGoogle();
  });
  divElem.querySelector('#btnEnter').addEventListener('click', () => {
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;
    ingreso(email,password); 
  })
  return divElem;
}

