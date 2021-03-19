import { createSlice, createSelector } from "@reduxjs/toolkit";

const rotate = createSlice({
  name: "rotate",
  initialState: {
    rotateX: -30,
    rotateY: 38,
  },
  reducers: {
    rotateLeft: (state) => {
      state.rotateX -= 4;
    },
    rotateRight: (state) => {
      state.rotateX += 4;
    },
    rotateTop: (state) => {
      state.rotateY += 4;
    },
    rotateBottom: (state) => {
      state.rotateY -= 4;
    },
  },
});

export const rotateSelector = createSelector(
  ({ rotateX }) => rotateX,
  ({ rotateY }) => rotateY,
  (rotateX, rotateY) => ({ rotateX, rotateY }),
);

export const {
  actions: { rotateLeft, rotateRight, rotateTop, rotateBottom },
  reducer,
} = rotate;
