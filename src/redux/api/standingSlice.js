import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE = "https://api-football-standings.azharimm.dev/leagues";

const initialState = {
  standing: [],
  isLoading: false,
  league: 'eng.1',
  season: '2022',
  recentLeague: '',
};

export const fetchStanding = createAsyncThunk(
  "standing/fetchStanding",
  async ({ league, season }) => {
    const req = await fetch(
      `${BASE}/${league}/standings?season=${season}&sort=asc`
    );
    const result = await req.json();
    return result.data
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
        state.standing = action.payload.standings;
        state.recentLeague = action.payload.name;
      })
  },
  reducers: {
    setseson: (state, action) => {
      state.season = action.payload;
    },
    setleague: (state, action) => {
      state.league = action.payload
    }
  }
})

export const selectStanding = (state) => state.standing.standing
export const selectLoading = (state) => state.standing.isLoading
export const selectSeason = (state) => state.standing.season
export const selectLeague = (state) => state.standing.league
export const selectRecentLeague = (state) => state.standing.recentLeague

export const { setseson, setleague } = standingSlice.actions;

export default standingSlice.reducer;