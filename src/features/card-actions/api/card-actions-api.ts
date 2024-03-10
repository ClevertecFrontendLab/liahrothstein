import { baseURL, trainingURL } from "@constants/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function getToken(token: string) {
    if (localStorage.getItem('accessToken')) {
        return (localStorage.getItem('accessToken'));
    } else {
        return (token)
    }
};

export const cardActionsAPI = createApi({
    reducerPath: 'cardActionsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        getTrainings: build.query({
            query: (token: string) => ({
                url: trainingURL,
                method: 'GET',
                headers: { Authorization: `Bearer ${getToken(token)}` }
            })
        })
    })
});

export const { useLazyGetTrainingsQuery } = cardActionsAPI;