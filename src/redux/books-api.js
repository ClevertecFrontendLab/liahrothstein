import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi ({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://strapi.cleverland.by/api/'}),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books'
        }),
        getIdBook: builder.query({
            query: (id) => `/books/${id}`
        }),
        getCategories: builder.query({
            query: () => '/categories'
        })
    })
});

export const {useGetBooksQuery, useGetIdBookQuery, useGetCategoriesQuery} = booksApi;