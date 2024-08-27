import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visaInfo: [],
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getVisaInfo: (state, action) => {
      state.visaInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getVisaInfo } = countrySlice.actions;
export const visainfoFromSlice = (state) => state.country.visaInfo;

export default countrySlice.reducer;
