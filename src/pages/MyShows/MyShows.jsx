import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import hotelActions from '../../redux/actions/hotelActions'
import ShowCardAdmin from '../../components/ShowCardAdmin/ShowCardAdmin'
import "./MyShows.css"


export default function MyShows() {

    const dispatch = useDispatch()
    const { shows } = useSelector(state => state.hotel)
    const { getShow } = hotelActions

    let admId = '636fe5cd55d86e11bfaebc4a'

    useEffect(() => {
        dispatch(getShow(admId))
        // eslint-disable-next-line
    }, [])

    return (
<div className='CONTENEDOR-PRINCIPAL23'>
    <div className='shows1234'>

        <h2>MY SHOWS</h2>
    </div>
        <div className="hotel-cardcontaine33">
            
            <div className="hotel-cardcontaine33 ">

                {shows.length > 0 ? (
                    shows.map((show, index) => {
                        return <ShowCardAdmin show={show} key={index} idAdm={admId}/>
                    }))
                    : (
                        <img className='img-fluid' width='100%' src="./img/notsearch.png" alt="Not Found Search" />
                    )}
            </div>
        </div>
        </div>
    )
}

