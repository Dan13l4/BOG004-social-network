/* eslint-disable */
import { likepost, auth } from '../lib/index.js';
/* eslint-enable */

export const look = (box) => {
  const postNewPage = document.querySelector('#wallPost');
  postNewPage.innerHTML = '';
  const lookConten = (rest) => {
    const carry = `
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
    postNewPage.innerHTML += carry;
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

  return look;
};
