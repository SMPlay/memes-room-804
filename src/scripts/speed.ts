import { dispatch } from '../store';
import { changeSpeedRotate } from '../slices'

const speedCount = document.querySelector('.speed__count');
const inputRange = document.querySelector('.speed__slider');

inputRange.addEventListener('input', ({ target: { value } }) => {
  speedCount.textContent = value;

  dispatch(changeSpeedRotate(+value));
});
