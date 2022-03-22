import { changeView } from "./view-controler/index.js"

const init = () => {
    changeView(window.location.hash)
    window.addEventListener("hashchange", () => changeView(window.location.hash))
}

window.addEventListener('load', init); 

const firtsPage = document.getElementById("initio")
firtsPage.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log(submit)
})