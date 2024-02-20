import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "@constants/index";

interface CheckEmailRequest {
    email: string
}
interface CheckEmailResponse {
    email: string,
    message: string
}

interface ConfirmEmailRequest {
    email: string,
    code: string
}
interface ConfirmEmailResponse {
    email: string,
    message: string
}

export const confirmEmailAPI = createApi({
    reducerPath: 'confirmEmailAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        userCheckEmail: build.mutation<CheckEmailResponse, CheckEmailRequest>({
            query: (email: CheckEmailRequest) => ({
                url: '/auth/check-email',
                method: 'POST',
                body: email
            })
        }),
        userConfirmEmail: build.mutation<ConfirmEmailResponse, ConfirmEmailRequest>({
            query: (req: ConfirmEmailRequest) => ({
                url: '/auth/confirm-email',
                method: 'POST',
                body: req
            })
        })
    })
});

export const { useUserCheckEmailMutation, useUserConfirmEmailMutation } = confirmEmailAPI;