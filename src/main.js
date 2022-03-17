//import { start } from './App/start.js';

//document.addEventListener("DOMContentLoaded", start);

const init = () => {
    window.addEventListener("hashchange", () => console.log(window.location.hash))
}

window.addEventListener("load", init);

