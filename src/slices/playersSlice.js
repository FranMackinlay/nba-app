import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPlayers, searchPlayer } from '../services/PlayersSrv';

const initialState = {
  players: [],
  status: 'idle',
};

export const fetchPlayers = createAsyncThunk(
  'players/fetchPlayers',
  async () => {
    const response = await getPlayers();
    return response.data.data;
  }
);

export const searchPlayers = createAsyncThunk(
  'players/searchPlayer',
  async (query) => {
    const response = await searchPlayer(query);
    return response.data.data;
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
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.players = action.payload;
      })
      .addCase(searchPlayers.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(`action.payload`, action.payload);
        state.players = action.payload;
      });
  },
});

export const selectPlayers = (state) => state.players;

export default playersSlice.reducer;
