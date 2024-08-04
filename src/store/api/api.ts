import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = 'https://jsonplaceholder.typicode.com/comments'

export type TypeComment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getComment: builder.query({
            query: (id: number) => `/${id}`
        })
    }),
})

export const {useGetCommentQuery} = api;