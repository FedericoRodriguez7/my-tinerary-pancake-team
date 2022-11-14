import React, { useRef, useState, useEffect } from 'react'
import "./Cities.css"
import Checkbox from '../../components/CheckBox/Checkbox'
import CityCard from '../../components/CityCard/CityCard'

export default function Cities() {

    let [ciudades, setCiudades] = useState([])
    let [ciudadesFiltradas, setCiudadesFiltradas] = useState([])
    const America = useRef()
    const Europa = useRef()
    const Asia = useRef()
    const Sudafrica = useRef()
    const Australia = useRef()
    const searchId = useRef()

    const continentes = [America, Europa, Asia, Sudafrica, Australia]

    useEffect(() => {
        fetch('../dataCities.json')
            .then(response => response.json())
            .then(response => setCiudades(response))

        fetch('../dataCities.json')
            .then(response => response.json())
            .then(response => setCiudadesFiltradas(response))
    }, [])

    let checkCiudades = [...new Set(ciudades.map((ciudad) => ciudad.continent))]

    function filterCheckCards() {

        let checkFiltered = filterCheck()
        localStorage.setItem('checkboxFiltrados', JSON.stringify(checkFiltered))
        let searchFiltered = filterSearch(checkFiltered)
        localStorage.setItem('searchFiltrados', JSON.stringify(searchFiltered))
        setCiudadesFiltradas(searchFiltered)
        console.log(searchFiltered)
        localStorage.setItem('ciudadesFiltradas', JSON.stringify(searchFiltered))
    }

    function filterCheck() {
        let checks = []
        continentes.filter((continente) => continente.current?.checked).map((continente) => checks.push(continente.current.value))
        let ciudadesFiltradas = ciudades.filter((ciudad) => checks.includes(ciudad.continent))

        if (checks.length === 0) {
            return ciudades
        }
        return ciudadesFiltradas
    }

    function filterSearch(array) {
        if (searchId.current.value !== '') {
            let ciudadesFiltradas = array.filter((ciudad) => ciudad.name.toLowerCase().includes(searchId.current.value.toLowerCase()))
            return ciudadesFiltradas
        } else {
            return array
        }
    }

    return (
        <div className="cities-container">
            <div className='TituloHeader3'>
            <h2>Cities </h2>
            
            <form className="category-container" method="get">
                
                <label className='prueba12321'>
                    <input className="search-input w-100" type="search" name="search" id="search" placeholder="Search" ref={searchId} onChange={filterCheckCards} />
                </label>

                {checkCiudades.map((continente, index) => {
                    return <Checkbox continent={continente} valor={continente} refId={continentes[index]} fx={filterCheckCards} key={index} />
                })}
            </form>
</div>
            <div className="cards-container">

                {ciudadesFiltradas.length > 0 ? (
                    ciudadesFiltradas.map((city, index) => {
                        return <CityCard city={city} key={index} />
                    }))
                    : (
                        <img className='img-fluid' width='100%' src="./img/notsearch.png" alt="Not Found Search" />
                    )}
            </div>
        </div>
    )
}