import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, getOrCreateFeedbacksURL } from "@constants/index";

function getToken(token: string) {
    if (localStorage.getItem('accessToken')) {
        return (localStorage.getItem('accessToken'));
    } else {
        return (token)
    }
}

export const viewReviewsAPI = createApi({
    reducerPath: 'viewReviewsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        getReviews: build.query({
            query: (token: string) => ({
                url: getOrCreateFeedbacksURL,
                method: 'GET',
                headers: { Authorization: `Bearer ${getToken(token)}` }
            })
        })
    })
});

export const { useLazyGetReviewsQuery } = viewReviewsAPI;