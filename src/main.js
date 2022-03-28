import { changeView } from './view-controler/index.js';
import { lookout } from './lib/index.js';

window.addEventListener('load', () => {
  changeView(window.location.hash);
  lookout();
});

window.addEventListener('hashchange', () => {
  changeView(window.location.hash);
  lookout();
});
