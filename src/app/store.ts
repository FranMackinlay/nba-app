import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import playersReducer from '../slices/playersSlice';
import playerReducer from '../slices/playerSlice';

export const store = configureStore({
  reducer: {
    players: playersReducer,
    player: playerReducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
