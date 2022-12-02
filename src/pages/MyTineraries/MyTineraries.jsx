import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./MyTineraries.css"
import actionsCity from '../../redux/actions/cityActions'
import ItineraryCardAdmin from '../../components/ItineraryCardAdmin/ItineraryCardAdmin'



export default function MyItineraries() {
    const dispatch = useDispatch()
    const { itineraries } = useSelector(state => state.city)
    const { getItineraries } = actionsCity	

    const { id} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getItineraries(id))
        // eslint-disable-next-line
    }, [])

    return (
        <div className='CONTENEDOR-PADRRES123213213123123'>
            <div className='Mytinerary123124214'>
                <h2>MYTINERARY</h2>
            </div>
        <div className="cities-container12321421421214 flex m-t-16">
           

            <div className="cards-container12321321321321 container-fluid w-90 flex wrap gap-2 justify-center align-center">

                {itineraries.length > 0 ? (
                    itineraries.map((itinerary, index) => {
                        return <ItineraryCardAdmin itineraries={itinerary} key={index} idAdm={id} />
                    }))
                    : (
                        <img className='img-fluid' width='100%' src="./img/notsearch.png" alt="Not Found Search" />
                    )}
            </div>
        </div>
        </div>
    )
}