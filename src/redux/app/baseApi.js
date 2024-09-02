// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/",
});
export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: baseQuery,

  endpoints: () => ({}),
});
const visaQuery = fetchBaseQuery({
  baseUrl: "https://cms.visathing.com/api/",
});
export const baseVisaApi = createApi({
  reducerPath: "baseVisaApi",

  baseQuery: visaQuery,

  endpoints: () => ({}),
});
const baseQueryCountry = fetchBaseQuery({
  baseUrl: "https://restcountries.com/v3.1/all",
});
export const baseApiCountry = createApi({
  reducerPath: "baseApiCountry",
  baseQuery: baseQueryCountry,

  endpoints: () => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
