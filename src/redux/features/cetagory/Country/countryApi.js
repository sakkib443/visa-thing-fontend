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
      query: (arts) => {
        console.log("arts", arts);
        return {
          // https://cms.visathing.com/api/country_view/algeria/family-visa
          url: `country_view/algeria/family-visa`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useSearchAllVisaCategoryQuery,
  useGetVisaCountryQuery,
  useCountryDetailsQuery,
} = getAllCountry;

export default getAllCountry; // Add this line to make getAllCountry the default export
