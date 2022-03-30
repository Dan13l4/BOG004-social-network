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
               <p class='number' id='counter-likes'> ${rest.task.data.numberLike} me gusta</p>
               </div>
               
                `;
    postNewPage.innerHTML += carry;
  };
  box.forEach(lookConten);
};
