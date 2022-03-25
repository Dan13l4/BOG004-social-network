import { components } from '../view/index.js';
import { look } from '../view/postWall.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    { return container.appendChild(components.home()); }
    case '#/':
    { return container.appendChild(components.home()); }
    case '#/registerPage':
    { return container.appendChild(components.register()); }
    case '#/board':
    { return container.appendChild(components.board()); }
    case '#/postWall':
    { return container.appendChild(components.look()); }
    default:
    { return container.appendChild(components.error()); }
  }
};
export { changeView };
