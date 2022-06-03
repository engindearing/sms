import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import HouseholdAPI from "../api/household";

let initialState = { household: {}, members: [], loading: false, error: null };

export const fetchHouseholdByUserId = createAsyncThunk(
  "household/fetchHouseholdByUserId",
  async (userId:string) => {
    const response = await HouseholdAPI.fetchHouseholdByUserId(userId);

    return response;
  }
);

const householdSlice = createSlice({
  name: "household",
  initialState,
  reducers: {
    setHousehold(state, action) {
      state.household = action.payload.household;
      state.members = action.payload.members;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchHouseholdByUserId.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHouseholdByUserId.fulfilled, (state, action) => {
        state.household = action.payload.household;

        state.members = action.payload.members;

        state.loading = false;
      })
      .addCase(fetchHouseholdByUserId.rejected, (state, action) => {
        state.error = action.error.message;

        state.loading = false;
      });
  },
});

export const { setHousehold } = householdSlice.actions;

export default householdSlice.reducer;
