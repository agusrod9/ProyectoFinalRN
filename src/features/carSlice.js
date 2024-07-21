import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'car',
    initialState: {
        toy_num: '',
        model: '',
        series: '',
        series_num: '',
        photo_url: '',
        year: ''
    },
    reducers:{
        addCarToMyCollection: (newCar)=>{
            //acá va la lógica de agregar el auto a la colección
        },
        addCarImg:(state, {payload})=>{
            state.value.addCarImg = payload;
        }
    }
})

export const {addCarToMyCollection, addCarImg} = carSlice.actions;
export default carSlice.reducer