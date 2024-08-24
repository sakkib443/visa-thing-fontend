import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi, baseApiCountry } from "./baseApi"; // Import both APIs

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [baseApiCountry.reducerPath]: baseApiCountry.reducer, // Add the second API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(baseApiCountry.middleware), // Add the second API middleware
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
