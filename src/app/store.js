import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import playersReducer from '../features/players/playersSlice';
import playerReducer from '../features/players/playerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    players: playersReducer,
    player: playerReducer,
  },
});
