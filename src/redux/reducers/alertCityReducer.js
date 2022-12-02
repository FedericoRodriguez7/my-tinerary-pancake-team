import { createReducer } from "@reduxjs/toolkit";
import alertActions from "../actions/alertCity";


const { alerta } = alertActions

const iState = {
    vista: false,
    mensaje: ""
}

const alertReducer = createReducer(iState, (builder) => {
    builder
    .addCase(alerta, (state, action) => {
        console.log(action.payload)
        let newState = {
            ...state,
            vista: true,
            message: action.payload
        }
        console.log(newState)
        return newState
    })
})


export default alertReducer