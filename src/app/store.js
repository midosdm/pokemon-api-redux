import { configureStore } from '@reduxjs/toolkit';
import generationsReducer from '../features/generation/generationsSlice'
import pokemonsReducer from '../features/pokemons/pokemonsSlice'

export const store = configureStore({
  reducer: {
    generations: generationsReducer,
    pokemons: pokemonsReducer
  },
});
