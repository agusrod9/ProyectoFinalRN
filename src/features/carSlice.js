import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'car',
    initialState: {
        value:{
            toy_num: null,
            model: null,
            series: null,
            series_num: null,
            photo_url: null,
            year: null,
            user: null
        }
    },
    reducers:{
        addCarToMyCollection: (state, {payload})=>{
            //acá va la lógica de agregar el auto a la colección
        },
        addCarImg:(state, {payload})=>{
            state.value.addCarImg = payload;
        }
    }
})

export const {addCarToMyCollection, addCarImg} = carSlice.actions;
export default carSlice.reducer