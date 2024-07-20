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
        decrement: (state)=>{
            state.value -=1;
        },
        incrementByAmmount: (state, action)=>{
            state.value += action.payload
        },
        reset:(state)=>{
            state.value=0
        }
    }
})

export const {addCarToMyCollection, decrement, incrementByAmmount, reset} = carSlice.actions;
export default carSlice.reducer