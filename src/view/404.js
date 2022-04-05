export default () => {
  const error = `
  <section class='errorfour'>
    <div class='error'>
    <h1>Lo sentimos!</h1>
    <p>La pagina que estas buscando no existe, trata de nuevo o vuelve al</p> <a href='#/' class='btn'>inicio.</a>
    </div>
  </section>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = error;
  return divElem;
};
