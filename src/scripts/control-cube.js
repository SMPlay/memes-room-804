import { getDataFromStore } from '../store';
import { rotateSelector } from '../slices';
import { rotateCube } from './rotate-cube';

const cube = document.querySelector('.cube');

const rotateCubeListener = ({ keyCode }) => {
  rotateCube(keyCode);
  const { rotateX, rotateY } = getDataFromStore(rotateSelector);

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

document.addEventListener('keydown', rotateCubeListener);
