import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import ShelterAPI from "../../api/shelter";

let initialState = { shelter: {} };

export const fetchShelterById = createAsyncThunk(
  "shelter/fetchShelterById",
  async (shelterId: string) => {
    alert(shelterId);
    const response = await ShelterAPI.fetchShelterById(shelterId);

    return response;
  }
);

const shelterSlice = createSlice({
  name: "shelter",
  initialState,
  reducers: {
    setShelter(state, action) {
      state.shelter = {};
    },
  },
});

export const { setShelter } = shelterSlice.actions;

export default shelterSlice.reducer;
