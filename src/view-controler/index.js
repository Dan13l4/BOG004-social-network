import { components } from "../view/index.js";

//const changeView = (route) => {
    //const container = document.getElementById("container");
    //container.innerHTML = "";
    //switch (route){
        //case "": 
           // { return container.appendChild(components.home())}
        //case "#/": 
            //{ return container.appendChild(components.home())}
        //case "#/registerPage": 
           // { return container.appendChild(components.register())}
        //case "#/board":
           // { return container.appendChild(components.board())}
        //default:
            //{ return container.appendChild(components.error())}
            //break;
    //}
//}

//export { changeView }

export const changeView = (hash) => {
    const container = document.getElementById("container")
    container.innerHTML = "";

      if (hash === "#/" || hash === "/" || hash === "#" || hash === ""){
          
      container.appendChild(components.home());
    } else if (hash === "#/") {
        container.appendChild(components.home());
    } else if (hash === "#/registerPage") {
        container.appendChild(components.register());
    } else if (hash === "#/board") {
        container.appendChild(components.board());
    } else if (hash === "#/error") {
        container.appendChild(components.error());
    }
  }
