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
        }),
        getCarImg: builder.query({
            query: (localId) => `carImages/${localId}.json`
        }),
        postCarImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `carImages/${localId}.json`,
                method: 'PUT',
                body:{
                    image: image
                }
            })
        })
    })
})

export const {useGetCarsQuery, useGetCarImgQuery, usePostCarImageMutation} = myHotWheelsApi;
