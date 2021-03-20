import { rotateCube } from './rotate-cube';
import { KEYDOWN_TARGET } from './constants';

const controlPanel = document.querySelector('.control__panel');

controlPanel.addEventListener('click', ({ target }) => {
  if (target.classList.contains('control__button')) {
    const key = target.dataset.key;

    rotateCube(key);
  }
});
document.addEventListener('keydown', ({ key, target }) => {
  if (target.tagName === KEYDOWN_TARGET) {
    rotateCube(key);
  }
});
