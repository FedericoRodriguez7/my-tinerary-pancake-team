import React from 'react'
import "./DetailHotel.css"
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/url';
import CardDetails from '../../components/CardDetails2/CardDetails2';

export default function DetailHotel() {
    const { id } = useParams()

    const [detailCards, setDetailCards] = useState([])
    const [events, setEvents] = useState([])

    

    useEffect(() => {
        axios.get(`${BASE_URL}/api/hotels/${id}`)
            .then(res => setDetailCards(res.data.data))

        axios.get(`${BASE_URL}/api/shows?hotelId=${id}`)
            .then(res => setEvents(res.data.data))
        // eslint-disable-next-line
    }, [])

    console.log(events)


    

    if (detailCards.length !== 0) {
        return (
            <div className='CONTENEDORMAYOR1234124'>
              <div className='PARTESUPERIOR123213'>
                <h2>DETAILS </h2>

              </div>
                
                <div className="card-detail323423423">
                    <div className="img-card1231231312">
                    <img className="" src={detailCards.photo[0]} alt= {detailCards.name} />
                    </div>
                    <div className="text-card-detail flex column justify-center align-center bg-palette1 text-white gap-2 p-1">
                        <div className="logo-details">
                            <img className="img-w-5" src="./img/building1.png" alt="" />
                        </div>
                        <div className="conenido-card123123123">
                            <h1>{detailCards.name}</h1>
                            <p>{detailCards.capacity}</p>
                        </div>
                        
                        
                    </div>
                </div>
                <div className='parteInferior'>
                  <h2>EVENTS</h2>
                </div>
                <div className='cajadeEeventos'>

                {
            (events.length!=0)?events.map(e=><CardDetails key={e?._id} name={e?.name} photo={e?.photo} description={e?.description} price={e?.price} duration={e?.duration} />):console.log(true)
        }
          
                </div>

                <div className='botoncito12321'>
                  <button>
                    <p>Comment</p>
                  </button>
                </div>
            </div>
                
            
        )
    }

}