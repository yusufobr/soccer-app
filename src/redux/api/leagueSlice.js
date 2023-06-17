import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE = "https://api-football-standings.azharimm.dev/leagues";

const initialState = {
  leagues: [],
  isLoading: false,
  season: "2022",
};

export const fetchLeagues = createAsyncThunk(
  "leagues/fetchLeagues",
  async () => {
    const req = await fetch(BASE);
    const result = await req.json();
    console.log("leagues -->", result.data);
    return result.data;
  }
);

const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeagues.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLeagues.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leagues = action.payload;
      });
  },
});

export const selectLeagues = (state) => state.leagues.leagues;

export default leaguesSlice.reducer;
