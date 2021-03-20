import { configureStore } from '@reduxjs/toolkit';

import { reducer as rotateReduced } from './slices';

export const { dispatch, getState } = configureStore({
  reducer: rotateReduced
});

export const getDataFromStore = (selectFn) => selectFn(getState());
