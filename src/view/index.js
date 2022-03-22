import home from "./start.js";
import Register from "./singIn.js";
import error from "./404.js";
import board from "./board.js";

const components = {
    home: home,
    register: Register,
    error: error,
    board: board
}

export { components };