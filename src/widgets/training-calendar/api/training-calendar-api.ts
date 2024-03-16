import { baseURL, getTrainingListURL } from "@constants/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function getToken(token: string) {
    if (localStorage.getItem('accessToken')) {
        return (localStorage.getItem('accessToken'));
    } else {
        return (token)
    }
};

export const trainingCalendarAPI = createApi({
    reducerPath: 'trainingCalendarAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (build) => ({
        getTrainingList: build.query({
            query: (token: string) => ({
                url: getTrainingListURL,
                method: 'GET',
                headers: { Authorization: `Bearer ${getToken(token)}` }
            })
        })
    })
});

export const { useLazyGetTrainingListQuery } = trainingCalendarAPI;