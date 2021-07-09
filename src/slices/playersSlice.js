import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPlayers, searchPlayer } from '../services/PlayersSrv';

const initialState = {
  players: [],
  status: 'idle',
};

export const fetchPlayers = createAsyncThunk(
  'players/fetchPlayers',
  async () => {
    const { data } = await getPlayers();
    return data.data;
  }
);

export const searchPlayers = createAsyncThunk(
  'players/searchPlayer',
  async (query) => {
    const { data } = await searchPlayer(query);
    return data.data;
  }
);

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlayers.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.players = payload;
      })
      .addCase(searchPlayers.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.players = payload;
      });
  },
});

export const selectPlayers = (state) => state.players;

export default playersSlice.reducer;
