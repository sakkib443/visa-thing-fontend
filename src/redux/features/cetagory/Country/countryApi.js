import { baseVisaApi } from "../../../app/baseApi";

const getAllCountry = baseVisaApi.injectEndpoints({
  endpoints: (builder) => ({
    searchAllVisaCategory: builder.query({
      query: (arts) => ({
        url: `/vcategory_search/${arts}`,
        method: "GET",
      }),
    }),
    getVisaCountry: builder.query({
      query: () => ({
        url: `country_name`,
        method: "GET",
      }),
    }),
    countryDetails: builder.query({
      query: ({ country, visaSlug }) => {
        console.log("arts", { country, visaSlug });
        return {
          url: `country_view/${country}/${visaSlug}`,
          method: "GET",
          // country_view/argentina/family-visa
        };
      },
    }),
  }),
});

// getSingleCountry: builder.query({
//   query: (id) => {
//     console.log("find id", id);
//     return {
//       url: `/visainfo/${id}`,
//       method: "GET",
//     };
//   },
// }),

export const {
  useSearchAllVisaCategoryQuery,
  useGetVisaCountryQuery,
  useCountryDetailsQuery,
} = getAllCountry;
