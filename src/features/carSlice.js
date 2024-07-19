import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        value: 0
    },
    reducers:{
        increment: (state)=>{
            state.value +=1;  //el estado que recibe en el ejemplo del profe es un numero, y acá le sumaría uno.
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

export const {increment, decrement, incrementByAmmount, reset} = carSlice.actions;
export default carSlice.reducer