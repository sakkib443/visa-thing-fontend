import { baseApi } from "../../app/baseApi";

const createApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountry: builder.query({
      query: () => ({
        url: "/visainfo",
        method: "GET",
      }),
    }),
    getSingleCountry: builder.query({
      query: (id) => {
        console.log("find id", id);
        return {
          url: `/visainfo/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllCountryQuery, useGetSingleCountryQuery } = createApi;
