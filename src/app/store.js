import { configureStore } from '@reduxjs/toolkit';
import playersReducer from '../features/players/playersSlice';
import playerReducer from '../features/players/playerSlice';

export const store = configureStore({
  reducer: {
    players: playersReducer,
    player: playerReducer,
  },
});
