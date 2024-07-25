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
        getCollectedCarsByUser: builder.query({
            query: (user) => `usrCollectedCars.json?orderBy="user"&equalTo="${user}"`,
            transformResponse: (res)=>{
                const transformedResponse = Object.values(res)
                console.log('traigoAutos')
                return transformedResponse
            }
        }),
        getWishedCarsByUser: builder.query({
            query: (user)=> `usrWishedCars.json?orderBy="user"&equalTo="${user}"`,
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
        }),
        postNewCollectedCar: builder.mutation({
            query: ({...car})=>({
                url:'usrCollectedCars.json',
                method:'POST',
                body: car
            })
        }),
        postNewWishedCar: builder.mutation({
            query: ({...car})=>({
                url:'usrWishedCars.json',
                method:'POST',
                body: car
            })
        })
        
    })
})

export const{   useGetCarsQuery,
                useGetCarImgQuery, 
                usePostCarImageMutation, 
                useGetCollectedCarsByUserQuery,
                useGetWishedCarsByUserQuery,
                usePostNewCollectedCarMutation,
                usePostNewWishedCarMutation
            } = myHotWheelsApi;
