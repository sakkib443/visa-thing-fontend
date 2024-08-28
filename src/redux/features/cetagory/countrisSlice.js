import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visaInfo: undefined,
  visa: undefined,
};

export const countrisSlice = createSlice({
  name: "countris",
  initialState,
  reducers: {
    getVisaInfo: (state, action) => {
      console.log("getVisaInfo payload:", action.payload);
      state.visaInfo = action.payload || [];
    },
    VisasType: (state, action) => {
      const filterVisa = state.visaInfo.filter(
        (item) => item.visaType === action.payload
      );
      state.visa = filterVisa;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getVisaInfo, VisasType } = countrisSlice.actions;

// Selectors
export const visainfoFromSlice = (state) => state.countris?.visaInfo || [];
export const visaInfoType = (state) => state.countris?.visa || [];

export default countrisSlice.reducer;
