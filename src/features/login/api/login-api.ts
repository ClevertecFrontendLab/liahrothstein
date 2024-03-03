import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, checkEmailURL, loginURL } from "@constants/index";
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
                url: loginURL,
                method: 'POST',
                body: user
            })
        }),
        userCheckEmail: build.mutation<CheckEmailResponse, CheckEmailRequest>({
            query: (email: CheckEmailRequest) => ({
                url: checkEmailURL,
                method: 'POST',
                body: email
            })
        })
    })
});

export const { useUserLoginMutation, useUserCheckEmailMutation } = loginAPI;