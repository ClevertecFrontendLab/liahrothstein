import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "@constants/index";
import type { UserDTO } from "../../../shared/types";

interface LoginResponse {
    accessToken: string
}

export interface CheckEmailRequest {
    email: string
}
export interface CheckEmailResponse {
    email: string,
    message: string
}

export const loginAPI = createApi({
    reducerPath: 'loginAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        userLogin: build.mutation<LoginResponse, UserDTO>({
            query: (user: UserDTO) => ({
                url: '/auth/login',
                method: 'POST',
                body: user
            })
        }),
        userGoogleLogin: build.query({
            query: () => ({
                url: '/auth/google',
                method: 'GET'
            })
        }),
        userCheckEmail: build.mutation<CheckEmailResponse, CheckEmailRequest>({
            query: (email: CheckEmailRequest) => ({
                url: '/auth/check-email',
                method: 'POST',
                body: email
            })
        })
    })
});

export const { useUserLoginMutation, useLazyUserGoogleLoginQuery, useUserCheckEmailMutation } = loginAPI;