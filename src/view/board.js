export default () =>{
  const board = `
  <header>
  <section class="board">
    <div>
    <img class="imagen" src=""></img>
    </div>
    <div class= "containerMuro">
    <input type="text" placeholder="Comparte tus experiencias..." id="muro">
    <button type="submit" class="btnMuro" id="btnMuro">Publicar</button>
    <section>
    
    </section>
    </div>
  </section>`

  const divElem = document.createElement("div");
  divElem.innerHTML = register;
  return divElem;
}