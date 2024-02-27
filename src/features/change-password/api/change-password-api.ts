import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, changePasswordURL } from "@constants/index";
import { getCookie } from '@utils/index';

interface ChangePasswordRequest {
    password: string,
    confirmPassword: string
}
interface ChangePasswordResponse {
    message: string
}

export const changePasswordAPI = createApi({
    reducerPath: 'changePasswordAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        userChangePassword: build.mutation<ChangePasswordResponse, ChangePasswordRequest>({
            query: (req: ChangePasswordRequest) => ({
                url: changePasswordURL,
                method: 'POST',
                body: req,
                headers: {
                    getSetCookie: getCookie('')
                }
            })
        })
    })
});

export const { useUserChangePasswordMutation } = changePasswordAPI;