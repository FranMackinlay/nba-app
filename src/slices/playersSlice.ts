import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Player } from '../interfaces/player.interface';
import { PlayersState } from '../interfaces/players-state.interface';
import Value from '../interfaces/valie.interface';
import { getPlayers, searchPlayer } from '../services/PlayersSrv';

const initialState: PlayersState = {
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
  async (query: Value) => {
    const { data } = await searchPlayer(query);
    return data.data;
  }
);

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlayers.fulfilled, (state, action: PayloadAction<Player[]>) => {
        state.status = 'idle';
        state.players = action.payload;
      })
      .addCase(searchPlayers.fulfilled, (state, action: PayloadAction<Player[]>) => {
        state.status = 'idle';
        state.players = action.payload;
      });
  },
});

export const selectPlayers = (state: RootState) => state.players;

export default playersSlice.reducer;
