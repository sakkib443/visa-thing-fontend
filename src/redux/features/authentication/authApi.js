import { baseApi } from "../../app/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    signinUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false, // Optional, prevents overriding existing endpoints
});

export const { useSignupUserMutation, useSigninUserMutation } = authApi;
export default authApi;
