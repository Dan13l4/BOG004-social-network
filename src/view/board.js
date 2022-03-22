export default () =>{
  const board = `
  <section class="board">
    <div>
    <button id="close">Cerrar sesion</button>
    </div>
  </section>`

  const divElem = document.createElement("div");
  divElem.innerHTML = board;
  return divElem;
}