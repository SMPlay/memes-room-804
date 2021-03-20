import { configureStore } from '@reduxjs/toolkit';

import { reducer as rotateReduced } from './slices';

export const { dispatch, getState } = configureStore({
  reducer: rotateReduced
});

export type RootState = ReturnType<typeof getState>;

export const getDataFromStore = <T>(selectFn: (state: RootState) => T) => selectFn(getState());
