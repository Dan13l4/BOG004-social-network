import { changeView } from './view-controler/index.js';
import { lookout } from './lib/index.js';

export const loading = window.addEventListener('load', () => {
  changeView(window.location.hash);
  lookout();
});

export const change = window.addEventListener('hashchange', () => {
  changeView(window.location.hash);
  lookout();
});
