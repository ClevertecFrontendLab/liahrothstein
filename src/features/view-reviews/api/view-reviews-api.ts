import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, getOrCreateFeedbacksURL } from "@constants/index";

const token = localStorage.getItem('accessToken');

export const viewReviewsAPI = createApi({
    reducerPath: 'viewReviewsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        getReviews: build.query({
            query: () => ({
                url: getOrCreateFeedbacksURL,
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` }
            })
        })
    })
});

export const { useLazyGetReviewsQuery } = viewReviewsAPI;