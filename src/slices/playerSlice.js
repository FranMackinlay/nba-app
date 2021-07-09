import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPlayer } from '../services/PlayersSrv';

const initialState = {
  player: {},
  status: 'loading',
};

export const fetchPlayer = createAsyncThunk(
  'players/fetchPlayer',
  async (id) => {
    const response = await getPlayer(id);
    return response.data;
  }
);

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlayer.fulfilled, (state, action) => {
      state.status = 'idle';
      state.player = action.payload;
    });
  },
});

export const selectPlayer = (state) => state.player;

export default playerSlice.reducer;
