import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { PlayerState } from '../interfaces/player-state.interface';
import { Player } from '../interfaces/player.interface';
import { getPlayer } from '../services/PlayersSrv';

const initialState: PlayerState = {
  player: {
    id: 0,
    first_name: '',
    last_name: '',
    position: '',
    height_feet: 0,
    height_inches: 0,
    weight_pounds: 0,
    team: {
      id: 0,
      abbreviation: '',
      city: '',
      conference: '',
      division: '',
      full_name: '',
      name: ''
    }
  },
  status: 'loading',
};

export const fetchPlayer = createAsyncThunk(
  'players/fetchPlayer',
  async (id: string) => {
    const { data } = await getPlayer(id);
    return data;
  }
);

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlayer.fulfilled, (state, action: PayloadAction<Player>) => {
      state.status = 'idle';
      state.player = action.payload;
    });
  },
});

export const selectPlayer = (state: RootState) => state.player;

export default playerSlice.reducer;
