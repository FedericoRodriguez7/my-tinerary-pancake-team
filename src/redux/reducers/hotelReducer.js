import { createReducer } from "@reduxjs/toolkit";
import hotelActions from "../actions/hotelActions";

const {getHotels,hotelsFiltred,createHotel, getHotelsAdmin, deleteHotel, updateHotel, getShow,updateShow,deleteShow}= hotelActions
const initialstate= {
    hotels:[],
    order:"",
    name: "",
    hotelsAdmin: [],
    shows: [],
}

const hotelReduce = createReducer(initialstate,(builder)=>{
    builder
    .addCase(getHotels.fulfilled, (state, action) => {

        return { ...state, hotels: action.payload, };
    })
    .addCase(hotelsFiltred.fulfilled, (state, action) => {

        return { ...state, hotels: action.payload.res,order:action.payload.order,name:action.payload.name };
    })
    .addCase(createHotel.fulfilled, (state, action) =>{
        if(action.payload.success){
            state.hotels.push(action.payload)
        }
    })
    .addCase(getHotelsAdmin.fulfilled, (state, action) => {
        return { ...state, hotelsAdmin: action.payload};
    })
    .addCase(deleteHotel.fulfilled, (state, action) => {
        let hotel = state.hotelsAdmin.filter(hotel => hotel.id !== action.payload.data._id)
        return { ...state, hotelsAdmin: hotel};
    })
    .addCase(updateHotel.fulfilled, (state) => {
        return { ...state};
    })

    .addCase(getShow.fulfilled, (state, action) => {
        return { ...state, shows: action.payload};
    })
    .addCase(updateShow.fulfilled, (state,) => {
        return { ...state};
    })
    .addCase(deleteShow.fulfilled, (state, action) => {
        let show = state.shows.filter(show => show._id !== action.payload.data._id)
        return { ...state, shows: show};
    })

})

export default hotelReduce
