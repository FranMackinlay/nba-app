import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPlayers, searchPlayer } from './playersAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchPlayers = createAsyncThunk(
  'players/fetchPlayers',
  async () => {
    const response = await getPlayers();
    // The value we return becomes the `fulfilled` action payload
    return response.data.data;
  }
);

export const fetchPlayer = createAsyncThunk(
  'players/fetchPlayer',
  async (query) => {
    const response = await searchPlayer(query);
    // The value we return becomes the `fulfilled` action payload
    return response.data.data;
  }
);

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.players = action.payload;
      })
      .addCase(fetchPlayer.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(`action.payload`, action.payload);
        state.players = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = playersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPlayers = (state) => state.players;


export default playersSlice.reducer;