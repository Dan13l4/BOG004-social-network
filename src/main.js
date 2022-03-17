import { start } from './App/start.js';

document.addEventListener("DOMContentLoaded", start);

const firtsPage = document.getElementById("initio")
firtsPage.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log(submit)
})