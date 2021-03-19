import { dispatch } from "../store";
import {
  rotateBottom,
  rotateLeft,
  rotateRight,
  rotateTop,
} from "../slices";

export const rotateCube = (keyCode) => {
  switch (keyCode) {
    case 37:
      dispatch(rotateTop);
      break;
    case 38:
      dispatch(rotateLeft);
      break;
    case 39:
      dispatch(rotateBottom);
      break;
    case 40:
      dispatch(rotateRight);
      break;
    default:
      return;
  }
};
