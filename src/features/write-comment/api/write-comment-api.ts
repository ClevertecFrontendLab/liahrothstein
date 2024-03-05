import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, getOrCreateFeedbacksURL } from "@constants/index";

function getToken(token?: string) {
    if (localStorage.getItem('accessToken')) {
        return (localStorage.getItem('accessToken'));
    } else {
        return (token)
    }
}

interface CreateCommentRequest {
    message: string,
    rating: number
}

export const writeCommentAPI = createApi({
    reducerPath: 'writeCommentAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        createComment: build.mutation<{}, CreateCommentRequest>({
            query: (comment) => ({
                url: getOrCreateFeedbacksURL,
                method: 'POST',
                headers: { Authorization: `Bearer ${getToken()}` },
                body: comment
            })
        }),
        updateComments: build.query({
            query: (token) => ({
                url: getOrCreateFeedbacksURL,
                method: 'GET',
                headers: { Authorization: `Bearer ${getToken(token)}` }
            })
        })
    })
});

export const { useCreateCommentMutation, useLazyUpdateCommentsQuery } = writeCommentAPI;