import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseURL } from "@constants/index";

interface CheckEmailRequest {
    email: string
}
interface CheckEmailResponse {
    email: string,
    message: string
}

export const checkEmailAPI = createApi({
    reducerPath: 'checkEmailAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        userCheckEmail: build.mutation<CheckEmailResponse, CheckEmailRequest>({
            query: (email: CheckEmailRequest) => ({
                url: '/auth/check-email',
                method: 'POST',
                body: email
            })
        })
    })
})