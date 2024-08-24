import { baseApi } from "../../app/baseApi";

const createApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountry: builder.query({
      query: () => ({
        url: "/visainfo",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCountryQuery } = createApi;
