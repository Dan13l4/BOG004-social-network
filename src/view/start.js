import { whithGoogle, loginIn } from '../lib/index.js';

export default () => {
  const home = `
  <section class='firstPage'>
  <img src= './img/agentes.png' alt='agentesValorant' class= 'agentes' id='agentesValorant'> 
  <div class='intro'>
  <div class='user'>
  </div>
  <div class='user'>
  <img src='./img/valorantlogo.png' alt='logoValorant' class='logo'>
  <p>Correo electronico:</p><input type='text' placeholder='Escribe tu email' id='email'>
  </div>
  <div class='password'>
  <p>Contraseña:</p><input type='password' placeholder='Escribe tu contraseña' id='password'>
  </div>
  <div class='btnEnter'>
  <button id='btnEnter'>Ingresar</button>
  </div>
  <div class='register'>
  <p class='organize'>¿No tienes usuario?</p> 
  <a href='#/registerPage' class='organize' id='register'>Registrate aqui</a>
  <p class='organizeTwo'>o ingresa con</p>
  <a href='#/' class='organizeTwo' id='google'>Google</a>
  </div>
  </section>
  <footer class='final'>
  Creado por Gisbel Contreras y Karen Baron
  </footer>`;

  const divElem = document.createElement('div');
  divElem.className = 'fisrtPage';
  divElem.innerHTML = home;

  divElem.querySelector('#btnEnter').addEventListener('click', () => {
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;
    loginIn(userEmail, userPassword);
  });

  divElem.querySelector('#google').addEventListener('click', () => {
    whithGoogle();
  });
  
  return divElem;
};
