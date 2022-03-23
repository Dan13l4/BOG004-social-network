import { changeView } from "./view-controler/index.js"
import { lookout } from "./lib/index.js"

//const init = () => {
    //changeView(window.location.hash)
    //window.addEventListener("hashchange", () => changeView(window.location.hash))
//}

//window.addEventListener('load', init); 

window.addEventListener("load", () => {
    changeView(window.location.hash);
    lookout();
     
   });
   window.addEventListener("hashchange", () => {
    changeView(window.location.hash);
    lookout();  
   });

