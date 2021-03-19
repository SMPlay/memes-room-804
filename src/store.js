import { configureStore } from '@reduxjs/toolkit';

import { reducer as rotateReduced } from './slices';

export const store = configureStore({
  reducer: rotateReduced
});

export const dispatch = (action) => store.dispatch(action());
export const getDataFromStore = (selectFn) => selectFn(store.getState());
