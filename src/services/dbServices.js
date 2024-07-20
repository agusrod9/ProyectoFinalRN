import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dbUrl } from "../database/realtimeDataBase";


export const myHotWheelsApi = createApi({
    reducerPath: "dbApi",
    baseQuery: fetchBaseQuery({baseUrl:dbUrl}),
    endpoints: (builder)=>({
        getCars: builder.query({
            query: ()=> `testCars.json`,
            transformResponse: (res) => {
                const transformedResponse = Object.values(res)
                return transformedResponse
            }
        })
    })
})

export const {useGetCarsQuery} = myHotWheelsApi;
