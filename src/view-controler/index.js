import { components } from "../view/index.js";

const changeView = (route) => {
    const container = document.getElementById("container");
    container.innerHTML = "";
    switch (route){
        case "": 
            { return container.appendChild(components.home())}
        case "#/": 
            { return container.appendChild(components.home())}
        case "#/registerPage": 
            { return container.appendChild(components.register())}
        default:
            { return container.appendChild(components.error())}
            break;
    }
}

export { changeView }
