import { configureStore } from '@reduxjs/toolkit';
import playersReducer from '../slices/playersSlice';
import playerReducer from '../slices/playerSlice';

export const store = configureStore({
  reducer: {
    players: playersReducer,
    player: playerReducer,
  },
});
