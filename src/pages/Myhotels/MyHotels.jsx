import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import hotelActions from '../../redux/actions/hotelActions'
import HotelCardAdmin from '../../components/hotelCardAdmin/HotelCardAdmin'
import "./MyHotels.css"

export default function MyHotels() {

    const dispatch = useDispatch()
    const {hotelsAdmin} = useSelector(state => state.hotel)
    const {getHotelsAdmin} = hotelActions

    let admId = '636fe5cd55d86e11bfaebc4a'

    useEffect(() => {
        dispatch(getHotelsAdmin(admId))
        // eslint-disable-next-line
    }, [])


  return (
    <div className='CONTENEDOR-PADRRES123213213'>
    <div className='MYcities123213'>

        <h2>MY HOTELS</h2>
    </div>
        <div className="cities-container123333 flex m-t-16">
            
            <div className="cards-container container-fluid w-90 flex wrap gap-2 justify-center align-center">

                {hotelsAdmin.length > 0 ? (
                    hotelsAdmin.map((hotel, index) => {
                        return <HotelCardAdmin hotel={hotel} key={index} idAdm={admId}/>
                    }))
                    : (
                        <img className='img-fluid' width='100%' src="./img/notsearch.png" alt="Not Found Search" />
                    )}
            </div>
        </div>
        </div>
  )
}
