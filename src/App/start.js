export const start = () =>{ 
    document.getElementById("root").innerHTML = `
  <section class="firstPage">
  
    <div class="user">
      <p>Correo electronico:</p>
      <input type="text" placeholder="Escribe tu email" id="email">
    </div>

    <div class="password">
      <p>Contraseña:</p>
      <input type="text" placeholder="Escribe tu contraseña" id="password">
    </div>

    <div class="btnEnter">
      <button id="btnEnter">Ingresar</button>
    </div>

    <div class="register">
      <p>¿No tienes usuario?</p> 
      <a href="" class="organize" id="register">Registrate aqui</a> 
      <p>o ingresa con</p> 
      <a href="" class="organize">Google</a>
    </div>
  </section>`
}