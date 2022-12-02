import React from 'react'
import './CompNewCity.css'
import { useState, useRef } from 'react'
import axios from 'axios'

export function CompNewCity() {

  const form = useRef()
    const id = useRef()
    const name = useRef()
    const continent = useRef()
    const photo = useRef()
    const population = useRef()

    const enviarFormulario = () => {
    let newCity;

    if (name.current.value !== '' && continent.current.value !== '' && photo.current.value !== '' && population.current.value !== '') {
        newCity = {
            name: name.current.value,
            continent: continent.current.value,
            photo: photo.current.value,
            population: population.current.value,
            userId: '636d82c86529ebe93bbef91f',
        }

        axios.post(`http://localhost:8080/api/cities`, newCity)
        form.current.reset()
        alert('Ciudad creada con éxito')
      } else {
        alert('Todos los campos son obligatorios')
    }
  }




  return (
    <div className='newcity-container'>
        <div className='card-newcity'>
            <h3 className='titlenew'>Create New City</h3>
        
            <div className='form-signin'>
                <form action="">
                <label htmlFor="nameCity">Name of the City</label>
    <input type="text" placeholder='Enter Name City' refId={name}  />

    <label htmlFor="Continent">Continent</label>
    <input type="text" placeholder='Enter Continent' refId={continent} />

    <label htmlFor="photo">Photo URL</label>
    <input type="text" placeholder='Enter Photo URL' refId={photo}  />

    <label htmlFor="population">Population</label>
    <input type="text" placeholder='Enter Population' refId={population} />

    <input type="submit" value='Submit' fx={enviarFormulario} texto='Create City' />
                </form>
    </div>
            
        </div>
    </div>
  )
}
