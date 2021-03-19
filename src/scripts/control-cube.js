import { rotateCube } from './rotate-cube';

const controlPanel = document.querySelector('.control__panel');

controlPanel.addEventListener('click', ({ target }) => {
  if (target.classList.contains('control__button')) {
    const key = target.dataset.key;

    rotateCube(key);
  }
});
document.addEventListener('keydown', ({ key }) => rotateCube(key));
