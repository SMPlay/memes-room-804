import { dispatch, getDataFromStore } from "../store";
import {
  rotateSelector,
  rotateBottom,
  rotateLeft,
  rotateRight,
  rotateTop,
} from "../slices";

const cube = document.querySelector('.cube');

export const rotateCube = (key) => {
  switch (key) {
    case 'ArrowLeft':
      dispatch(rotateBottom);
      break;
    case 'ArrowUp':
      dispatch(rotateRight);
      break;
    case 'ArrowRight':
      dispatch(rotateTop);
      break;
    case 'ArrowDown':
      dispatch(rotateLeft);
      break;
    default:
      return;
  }

  const { rotateX, rotateY } = getDataFromStore(rotateSelector);

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;  
};
