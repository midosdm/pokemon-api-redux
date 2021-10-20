import { configureStore } from '@reduxjs/toolkit';
import generationsReducer from '../features/generation/generationsSlice'

export const store = configureStore({
  reducer: {
    generations: generationsReducer
  },
});
