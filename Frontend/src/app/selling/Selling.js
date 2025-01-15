import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const SellingApi = createApi({
    reducerPath: 'sellingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4040/' }),
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: () => `selling`,
        }),
        getDataById: builder.query({
            query: (id) => `selling/${id}`,
        }),
        deleteData: builder.mutation({
            query: (id) => ({
                url: `selling/${id}`,
                method: "DELETE"
            })
        }),
        Post: builder.mutation({
            query: (newData) => ({
                body: newData,
                url: `selling`,
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }
            })
        }),
    }),
})

export const { useGetAllDataQuery,useDeleteDataMutation,useGetDataByIdQuery,usePostMutation } = SellingApi