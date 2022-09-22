import { configureStore } from '@reduxjs/toolkit';

function counterReducer(state) {
  return state;
}

export const store = configureStore({
  reducer: counterReducer,
});
