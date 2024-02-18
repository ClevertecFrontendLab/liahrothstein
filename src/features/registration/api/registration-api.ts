import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "@constants/index";
import type { UserDTO } from "../../../shared/types";

interface RegistrationResponse { }

export const registrationAPI = createApi({
    reducerPath: 'registrationAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        userRegistration: build.mutation<RegistrationResponse, UserDTO>({
            query: (user: UserDTO) => ({
                url: '/auth/registration',
                method: 'POST',
                body: user
            })
        }),
        userGoogleRegistration: build.query({
            query: () => ({
                url: '/auth/google',
                method: 'GET'
            })
        })
    })
});

export const { useUserRegistrationMutation, useLazyUserGoogleRegistrationQuery } = registrationAPI