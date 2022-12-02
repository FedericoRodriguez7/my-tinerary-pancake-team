import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from '../../api/url'

const getHotels = createAsyncThunk("getHotels", async () => {
    try{
        const res = await axios.get(`${BASE_URL}/api/hotels`)
        return res.data.response
    }catch(error){
        console.log(error)
        return {
            payload: "Error"
        }
    }
})

const hotelsFiltred = createAsyncThunk("hotelsFiltred", async (data) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/hotels?name=${data.name}&order=${data.order}`)
        const dataReduce = {
            res: res.data.response,
            order: data.order,
            name: data.name,
            
        }
        return dataReduce
    } catch(error){
        console.log(error)
        return{
            payload: "Error"
        }
    }
})

const createHotel = createAsyncThunk("createHotel", async (newHotel) => {
    try{
        const res = await axios.post(`${BASE_URL}/api/hotels`, newHotel)

        if (res.data.id) {
            return {
                id: res.data.id,
                success: true,
                response: newHotel,
            }
        } else {
            return {
                success: false,
                messages: res.data.message,

            }
        }
    }catch(error){
        return {
            success: false,
            response: 'Something went wrong'
        }
    }
    
})
const getHotelsAdmin = createAsyncThunk("getHotelsAdmin", async (id) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/hotels?userId=${id}`)
        return res.data.response
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const deleteHotel = createAsyncThunk("deleteHotel", async (id) => {
    try{
        const res = await axios.delete(`${BASE_URL}/api/hotels/${id}`)
        return res.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const updateHotel = createAsyncThunk("updateHotel", async (data) => {
    try{
        const res = await axios.patch(`${BASE_URL}/api/hotels/${data.id}`, data.hotels)
        console.log(res.data)
        return res.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})
const getShow = createAsyncThunk("getShow", async (id) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/shows?userId=${id}`)
        return res.data.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const updateShow = createAsyncThunk("updateShow", async (data) => {
    try{
        const res = await axios.patch(`${BASE_URL}/api/shows/${data.id}`, data.show)
        return res.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const deleteShow = createAsyncThunk("deleteShow", async (id) => {
    try{
        const res = await axios.delete(`${BASE_URL}/api/shows/${id}`)
        return res.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const hotelActions={
    hotelsFiltred, 
    getHotels, 
    createHotel, 
    getHotelsAdmin, 
    updateHotel, 
    deleteHotel,
    getShow,
    updateShow,
    deleteShow,
}

export default hotelActions