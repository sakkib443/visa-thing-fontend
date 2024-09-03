// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const baseQuery = fetchBaseQuery({
  baseUrl: "https://visa-thing-backend.vercel.app/api",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

const baseQueryCountry = fetchBaseQuery({
  baseUrl: "https://cms.visathing.com/api/",
});

export const baseApiCountry = createApi({
  reducerPath: "baseApiCountry",
  baseQuery: baseQueryCountry,
  endpoints: () => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
