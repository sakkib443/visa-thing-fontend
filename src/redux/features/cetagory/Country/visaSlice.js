import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visaSearch: undefined,
  vasaCategory: undefined,
};

export const visaSlice = createSlice({
  name: "visaCategoris",
  initialState,
  reducers: {
    getSearchVisa: (state, actions) => {
      console.log("get search visa", actions.payload);
      state.vasaCategory = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getSearchVisa } = visaSlice.actions;
// export const visaInfoType = (state) => state.countris?.visa || [];

// Selectors
export const visaInfoCategory = (state) =>
  state.visaCategoris.vasaCategory || [];

export default visaSlice.reducer;
