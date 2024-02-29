import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, getOrCreateFeedbacksURL } from "@constants/index";

const token = localStorage.getItem('accessToken');

interface CreateCommentRequest {
    message: string,
    rating: number
}

interface CreateCommentResponse {

}

export const writeCommentAPI = createApi({
    reducerPath: 'writeCommentAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        createComment: build.mutation<CreateCommentResponse, CreateCommentRequest>({
            query: (comment) => ({
                url: getOrCreateFeedbacksURL,
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
                body: comment
            })
        })
    })
});

export const { useCreateCommentMutation } = writeCommentAPI;