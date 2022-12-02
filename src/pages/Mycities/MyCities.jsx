import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionsCity from '../../redux/actions/cityActions'
import CityCardAdmin from '../../components/CityCardAdmin/CityCardAdmin'
import "./MyCities.css"


export default function MyCities() {

    const dispatch = useDispatch()
    const { citiesAdmin } = useSelector(state => state.city)
    const { getCitiesAdmin } = actionsCity

    let admId = '636fe5cd55d86e11bfaebc4a'

    useEffect(() => {
        dispatch(getCitiesAdmin(admId))
        // eslint-disable-next-line
    }, [])

    return (
<div className='CONTENEDOR-PADRRES123213213'>
    <div className='MYcities123213'>

        <h2>MY CITIES</h2>
    </div>
        <div className="cities-container123333 flex m-t-16">
            
            <div className="cards-container container-fluid w-90 flex wrap gap-2 justify-center align-center">

                {citiesAdmin.length > 0 ? (
                    citiesAdmin.map((city, index) => {
                        return <CityCardAdmin city={city} key={index} idAdm={admId}/>
                    }))
                    : (
                        <img className='img-fluid' width='100%' src="./img/notsearch.png" alt="Not Found Search" />
                    )}
            </div>
        </div>
        </div>
    )
}




















    
    
