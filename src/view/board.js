import { close, readData, recet } from '../lib/index.js';

export default () => {
  const board = `
  <div class= 'close'>
    <button type='submit' class='btnClose' id='btnClose'>Cerrar Sesión</button>
  </div>
  <section class='board'>
    <div>
      <img class='imagen' src=''></img>
    </div>
    <div class= 'containerMuro'>
      <input type='text' maxlength='150' placeholder='Comparte tus experiencias con un maximo de 150 palabras.' id='muro' class='wall'>
      <div class= 'botones'>
        <button type='submit' class='btnMuro' id='btnMuro'>Publicar</button>
      </div>
    </div>
  </section>

  <section id='wallPost' class='pts'>
  </section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = board;

  divElem.querySelector('#btnClose').addEventListener('click', () => {
    close();
  });

  divElem.querySelector('#btnMuro').addEventListener('click', () => {
    const postData = document.querySelector('#muro').value;
    recet(postData);
    document.querySelector('#muro').value = '';
  });

  readData();
  return divElem;
};
