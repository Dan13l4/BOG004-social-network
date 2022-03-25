import { close } from '../lib/index.js';
export default () => {
  const board = `
  <section class='board'>
    <div>
    <img class='imagen' src=''></img>
    </div>
    <div class= 'containerMuro'>
    <input type='text' placeholder='Comparte tus experiencias...' id='muro'>
    <button type='submit' class='btnMuro' id='btnMuro'>Publicar</button>
    <button type='submit' class='btnClose' id='btnClose'>Cerrar Sesión</button>
    <section>
    
    </section>
    </div>
  </section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = board;
  divElem.querySelector('#btnClose').addEventListener('click', () => {
    close();
  });
  return divElem;
};
