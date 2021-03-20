import { RotateButtonType } from 'types/rotate-button-type';
import { rotateCube } from './rotate-cube';
import { KEYDOWN_TARGET } from './constants';

const controlPanel = document.querySelector('.control__panel');

controlPanel.addEventListener('click', (event) => {
  const { classList, dataset } = event.target as HTMLDivElement;

  if (classList.contains('control__button')) {
    const key = dataset.key as RotateButtonType;

    rotateCube(key);
  }
});
document.addEventListener('keydown', ({ key, target }) => {
  const { tagName } = target as HTMLElement;

  if (tagName === KEYDOWN_TARGET) {
    rotateCube(key as RotateButtonType);
  }
});
