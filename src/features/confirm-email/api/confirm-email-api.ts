import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, confirmEmailURL } from "@constants/index";

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
        userConfirmEmail: build.mutation<ConfirmEmailResponse, ConfirmEmailRequest>({
            query: (req: ConfirmEmailRequest) => ({
                url: confirmEmailURL,
                method: 'POST',
                body: req
            })
        })
    })
});

export const { useUserConfirmEmailMutation } = confirmEmailAPI;