export default () =>{
  const board = `
  <section class="board">
    <div>
      
    </div>
  </section>`

  const divElem = document.createElement("div");
  divElem.innerHTML = board;
  return divElem;
}