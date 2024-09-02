import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi, baseApiCountry } from "./baseApi"; // Import both APIs
import countrisReducer from "../features/cetagory/countrisSlice";
import authApi from "../features/authentication/authApi";
import authReducer from "../features/authentication/authSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [baseApiCountry.reducerPath]: baseApiCountry.reducer, // Add the second API reducer
    [authApi.reducerPath]: authApi.reducer,
    countris: countrisReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(baseApiCountry.middleware)
      .concat(authApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
