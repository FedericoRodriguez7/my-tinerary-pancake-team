import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from '../../api/url'

const getCities = createAsyncThunk("getCities", async () => {
    try{
        const res = await axios.get(`${BASE_URL}/api/cities`)
        return res.data.data
    }catch(error){
        console.log(error)
        return {
            payload: "Error"
        }
    }
})

const citiesFiltred = createAsyncThunk("citiesFiltred", async (data) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/cities?${data.checks}&name=${data.name}`)
        const dataReduce = {
            res: res.data.data,
            checks: data.checks,
            name: data.name,
            checked: data.checked
        }
        return dataReduce
    } catch(error){
        console.log(error)
        return{
            payload: "Error"
        }
    }
})



const createCity = createAsyncThunk("createCity", async (newCity) => {
    try{
        const res = await axios.post(`${BASE_URL}/api/cities`, newCity)

        if (res.data.id) {
            return {
                id: res.data.id,
                success: true,
                response: newCity,
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
            response: 'Ocurrio un error'
        }
    }
})

const getCitiesAdmin = createAsyncThunk("getCitiesAdmin", async (id) => {
  try{
      const res = await axios.get(`${BASE_URL}/api/cities?userId=${id}`)
      return res.data.data
  }catch(error){
      console.log(error)
      return {
          payload: 'Error'
      }
  }
})

const deleteCity = createAsyncThunk("deleteCity", async (data) => {
    let headers = { headers: { Authorization: `Bearer ${data.token}`}}
  try{
      const res = await axios.delete(`${BASE_URL}/api/cities/${data.id}`, headers)
      return res.data
  }catch(error){
      console.log(error)
      return {
          payload: 'Error'
      }
  }
})

const updateCity = createAsyncThunk("updateCity", async (data) => {
    let headers = { headers: { Authorization: `Bearer ${data.token}`}}
  try{
      const res = await axios.put(`${BASE_URL}/api/cities/${data.id}`, data.citie, headers)
      return res.data
  }catch(error){
      console.log(error)
      return {
          payload: 'Error'
      }
  }


  
})
const getItineraries = createAsyncThunk("getItineraries", async (id) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/itineraries?userId=${id}`)
        return res.data.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const updateItinerary = createAsyncThunk("updateItinerary", async (data) => {
    let headers = { headers: { Authorization: `Bearer ${data.token}`}}
    try{
        const res = await axios.put(`${BASE_URL}/api/itineraries/${data.id}`, data.itinerary, headers)
        return res.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const deleteItinerary = createAsyncThunk("deleteItinerary", async (data) => {
    let headers = { headers: { Authorization: `Bearer ${data.token}`}}
    try{
        const res = await axios.delete(`${BASE_URL}/api/itineraries/${data.id}`, headers)
        return res.data
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const createItinerary = createAsyncThunk("createItinerary", async (data) => {
    let headers = { headers: { Authorization: `Bearer ${data.token}`}}
    try{
        const res = await axios.post(`${BASE_URL}/api/itineraries`, data.itinerary, headers)
        if (res.data.id) {
            return {
                id: res.data.id,
                success: true,
                response: data.itinerary,
            }
        } else {
            return {
                success: false,
                messages: res.data.message,

            }
        }
    }catch(error){
        console.log(error)
        return {
            success: false,
            response: error.response.data
        }
    }
})




  




const actionsCity = {
    getCities,
    citiesFiltred,
    createCity,
    getCitiesAdmin,
    deleteCity,
    updateCity,
    getItineraries,
    updateItinerary,
    deleteItinerary,
    createItinerary

    
    
}

export default actionsCity