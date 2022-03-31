/* eslint-disable */
import { likepost, auth, deletePosts, editPost } from '../lib/index.js';
/* eslint-enable */

export const look = (box) => {
  const postNewPage = document.querySelector('#wallPost');
  postNewPage.innerHTML = '';
  const lookConten = (rest) => {
    const carry = `
    <div class= 'card'>
        <div class='watchPost'>
          <div class='conteinerUser'>
            <p><img class="userpost" src='./img/usuario.png'/>${rest.task.data.name}</p>
          </div>
          <textarea class='nameLook' id='postLook'  readonly>${rest.task.data.publicacion}</textarea>
          <div class='contentButtons'>
          <button class='btnlike' id='likes' value='${rest.task.id}'>
            <img class='likepost' src='./img/like.png'/>
          </button>
            <p class='number' id='counter-likes'> ${rest.task.data.numberLike} me gusta</p>
          </div>
                `;
    let carryTwo = "";      
    if(rest.task.data.userId === auth.currentUser.uid) {
      carryTwo =  `
      <div class= buttonContent>
      <button class="icon-pencil edit" id="edit" value=${rest.task.id}>edit</button>
      <button class="save" id="${rest.task.id}-save">save</button>
      <button class = 'delete' id= 'delete' value = ${rest.task.id}>X</button>
      </div>
      `
    }
    postNewPage.innerHTML += carry + carryTwo;
  };
  box.forEach(lookConten);


  // dar like a los post
  const btnlike = postNewPage.querySelectorAll('#likes');
  btnlike.forEach((like) => {
    like.addEventListener('click', () => {
      const userId = auth.currentUser.uid;
      likepost(like.value, userId); // deberiamos mandarle el id del usuario que dio like
    });
  });
  
//Borrar post
  const btnDelete = postNewPage.querySelectorAll('#delete');
  btnDelete.forEach((remove) => {
    remove.addEventListener('click', () => {
      const confirmDelete = confirm('ESTAS SEGURO QUE QUIERES ELIMINAR EL POST?')
      if (confirmDelete == true) {
        deletePosts(remove.value);
      }
    });
  });

// editar post
const btnEdit = document.querySelectorAll("#edit");
btnEdit.forEach((edit) => {
  edit.addEventListener("click", () => {
    const publi = document.querySelector("#postLook");
    publi.removeAttribute("readonly");
    const btnsave = document.querySelector(`#${edit.value}-save`)
    btnsave.style.display = "block"
    btnsave.addEventListener("click", () => {
      const potst = publi.value;
      editPost(edit.value, potst);
      btnsave.style.display = "none"
      publi.setAttribute("readonly", "readonly");
    })
  })
});

  return look;
};
