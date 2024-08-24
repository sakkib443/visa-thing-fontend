import { baseApiCountry } from "../../../app/baseApi";

const getAllCountry = baseApiCountry.injectEndpoints({
  endpoints: (builder) => ({
    filterAllCountry: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useFilterAllCountryQuery } = getAllCountry;
