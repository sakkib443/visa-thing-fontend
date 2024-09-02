import { configureStore } from "@reduxjs/toolkit";
import { baseApi, baseApiCountry, baseVisaApi } from "./baseApi";
import countrisReducer from "../features/cetagory/countrisSlice";
import visaReducer from "../features/cetagory/Country/visaSlice.js";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [baseApiCountry.reducerPath]: baseApiCountry.reducer,
    [baseVisaApi.reducerPath]: baseVisaApi.reducer,
    countris: countrisReducer,
    visaInfo: visaReducer, // Use getAllCountry.reducer instead of visaReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(baseApiCountry.middleware)
      .concat(baseVisaApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// setupListeners(store.dispatch);
