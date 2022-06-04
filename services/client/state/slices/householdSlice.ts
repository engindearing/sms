import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import HouseholdAPI from "../../api/household";

let initialState = {
  household: {},
  members: [],
  loading: false,
  fetchInProgress: false,
  updateInProgress: false,
  error: null,
};

// ** API CALLS **
export const fetchHouseholdByUserId = createAsyncThunk(
  "household/fetchHouseholdByUserId",
  async (userId: string) => {
    const response = await HouseholdAPI.fetchHouseholdByUserId(userId);

    return response;
  }
);

export const updateHouseholdById = createAsyncThunk(
  "household/updateHouseholdById",
  async (householdData: { householdId: string; payload: object }) => {
    const { householdId, payload } = householdData;

    const response = await HouseholdAPI.updateHousehold(householdId, payload);

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

      // ** fetchHouseholdbyUserId **
      .addCase(fetchHouseholdByUserId.pending, (state, action) => {
        state.fetchInProgress = true;
      })
      .addCase(fetchHouseholdByUserId.fulfilled, (state, action) => {
        state.household = action.payload.household;

        state.members = action.payload.members;

        state.fetchInProgress = false;
      })
      .addCase(fetchHouseholdByUserId.rejected, (state, action) => {
        state.error = action.error.message;

        state.fetchInProgress = false;
      })

      // ** updateHouseholdByUserId **
      .addCase(updateHouseholdById.pending, (state, action) => {
        state.updateInProgress = true;
      })

      .addCase(updateHouseholdById.fulfilled, (state, action) => {
        state.household = action.payload;

        state.updateInProgress = false;
      })

      .addCase(updateHouseholdById.rejected, (state, action) => {
        state.error = action.error.message;

        state.updateInProgress = false;
      });
  },
});

export const { setHousehold } = householdSlice.actions;

export default householdSlice.reducer;
