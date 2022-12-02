
import React, { useRef, useState, useEffect } from 'react'
import "./Cities.css"
import Checkbox from '../../components/CheckBox/Checkbox'
import CityCard from '../../components/CityCard/CityCard'
import	{ useDispatch, useSelector } from 'react-redux'
import actionsCity from '../../redux/actions/cityActions'


export default function Cities() {

    const dispatch = useDispatch()
    const { cities, checks, name, checked, continent } = useSelector(state => state.city)
    const { getCities, citiesFiltred } = actionsCity


    let [checkbox, setChecks] = useState([])
    const searchId = useRef()
    const inputCheck = useRef()


    useEffect(() => {
        if (checks || name) {
            let info = {
                checks, name, checked
            }
            dispatch(citiesFiltred(info))
            searchId.current.value = name
            if (checked) {
                checked.forEach(check => {
                    let input = Array.from(inputCheck.current).find(input => input.value === check)
                    input.checked = true
                })
            }
        } else {
            dispatch(getCities)
        }
        
        
    }, [])


    function filterCheckCards(evento) {

      let filter = filterCheck(evento)

        let checked = filter

        filter = filter.map((check) => 'continent=${check}').join('&')
    

    let data = {
        name: searchId.current.value,
        checks: filter,
        checked: checked
    }

    dispatch(citiesFiltred(data))

}

    function filterCheck(evento) {
        let checkFiltered = []
       if(evento.target.checked) {
        checkFiltered = [...checked, evento.target.name]
       
        } else {
            checkFiltered = checkbox.filter((check) => check !== evento.target.name)
            
        }

        

        setChecks(checkFiltered)

       return checkFiltered
    }

    return (
        <div className="cities-container">
            <div className='TituloHeader3'>
                <h2 className='cities-title'>Cities </h2>
            
                <form className="category-container" method="get">
                
                    <label className='prueba12321'>
                        <input className="search-input w-100" type="search" name="search" id="search" placeholder="Search" ref={searchId} onChange={filterCheckCards} />
                    </label>

                    {continent.map((continente, index) => {
                        return <Checkbox continent={continente} valor={continente} fx={filterCheckCards} key={index} />
                })}
                </form>
            </div>
            <div className="cards-container">

            {cities.length > 0 ? (
                    cities.map((city, index) => {
                        return <CityCard city={city} key={index} />
                    }))
                    : (
                        <img className='img-fluid' width='10%' src="https://cdn-icons-png.flaticon.com/512/4952/4952559.png" alt="Not Found Search" />
                    )}
            </div>
        </div>
    )
}