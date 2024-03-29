import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, registerURL } from "@constants/index";
import type { UserDTO } from "../../../shared/types";

export const registrationAPI = createApi({
    reducerPath: 'registrationAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        userRegistration: build.mutation<{}, UserDTO>({
            query: (user: UserDTO) => ({
                url: registerURL,
                method: 'POST',
                body: user
            })
        })
    })
});

export const { useUserRegistrationMutation } = registrationAPI