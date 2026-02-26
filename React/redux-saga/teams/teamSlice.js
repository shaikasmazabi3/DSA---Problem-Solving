Slice file 

import { createSlice } from "@reduxjs/toolkit";

const teamInitialState = {
  teams: [],
  loading: false,
  error: null,
};

const teamSlice = createSlice({
  name: "team",
  initialState: teamInitialState,
  reducers: {
    fetchTeamRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTeamSuccess: (state, action) => {
      const { data } = action.payload;
      state.teams = data;
      state.loading = false;
    },
    fetchTeamFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTeamRequest, fetchTeamSuccess, fetchTeamFailure } =
  teamSlice.actions;

export default teamSlice.reducer;
 