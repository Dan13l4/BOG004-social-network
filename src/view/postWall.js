import { auth } from "../lib/index.js";

export const look = (box) => {

  const postNewPage = document.querySelector("#wallPost");
  postNewPage.innerHTML = "";
  const lookConten = (rest) => {
    console.log(rest);
    const carry = `
        <div class="watchPost">
          <div class="conteinerUser">
              <p>${rest.task.data.name === null ? "Desconocido" : rest.task.data.name}</p>
          </div>
          <textarea class="nameLook" id="postLook"  readonly>${rest.task.data.publicacion}</textarea>
          <div class="contentButtons">
               <p class="number" id="counter-likes"> ${rest.task.data.numberLike} me gusta</p>
               
                `;
    const carryTwo = `
             `;
    let carryThree = "";
    if (rest.task.data.userId === auth.currentUser.uid) {
      carryThree = `
              <div class="buttonsContent">

              </div>
      </div>`;
    }
    postNewPage.innerHTML += carry + carryTwo;
  }
  box.forEach(lookConten);
}