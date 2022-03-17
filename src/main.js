import { changeView } from "./view-controler/index.js"
import iniciar from "./view/start.js"

const start = () => {
    document.addEventListener("DOMContentLoaded", iniciar);
}

const init = () => {
    changeView(window.location.hash)
    window.addEventListener("hashchange", () => changeView(window.location.hash))
}

window.addEventListener('load', init); 

