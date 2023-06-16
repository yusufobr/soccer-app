import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE = "https://api-football-standings.azharimm.dev/leagues";

const initialState = {
  standing: [],
  isLoading: false,
};

export const fetchStanding = createAsyncThunk(
  "standing/fetchStanding",
  async ({league, season}) => {
    const req = await fetch(
      `${BASE}/${league}/standings?season=${season}&sort=asc`
    );
    const result = await req.json();
    return result.data.standings
  }
);

const standingSlice = createSlice({
    name: 'standing',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchStanding.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchStanding.fulfilled, (state, action) => {
                state.isLoading = false;
                state.standing = action.payload;
            })
    }
})

export const selectStanding = (state) => state.standing.standing
export const selectLoading = (state) => state.standing.loading

export default standingSlice.reducer;