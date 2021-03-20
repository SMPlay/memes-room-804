import { dispatch, getDataFromStore } from "../store";
import {
  rotateSelector,
  rotateBottom,
  rotateLeft,
  rotateRight,
  rotateTop,
} from "../slices";
import { ARROW_LEFT, ARROW_UP, ARROW_RIGHT, ARROW_DOWN } from "./constants";
import { RotateButtonType } from "types/rotate-button-type";

const cube = document.querySelector(".cube") as HTMLDivElement;

export const rotateCube = (key: RotateButtonType) => {
  switch (key) {
    case ARROW_LEFT:
      dispatch(rotateBottom());
      break;
    case ARROW_UP:
      dispatch(rotateRight());
      break;
    case ARROW_RIGHT:
      dispatch(rotateTop());
      break;
    case ARROW_DOWN:
      dispatch(rotateLeft());
      break;
    default:
      return;
  }

  const { rotateX, rotateY } = getDataFromStore<ReturnType<typeof rotateSelector>>(rotateSelector);

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};
