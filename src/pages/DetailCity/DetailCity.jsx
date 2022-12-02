import React from 'react';
import "./DetailCity.css";
import CardDetails from '../../components/CardDetails2/CardDetails2';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Events from "../../components/Itinerary/Itinerary";
import axios from "axios"

export default function DetailsCity() {

    const { id } = useParams()

    const [detailCards, setDetailCards] = useState([])
    const [itinerary, setItinerary] = useState([])



    


    useEffect(() => {
      axios.get(`http://localhost:8080/api/cities/${id}`)
      .then(res => setDetailCards(res.data.data))

      console.log(detailCards)


      axios.get(`http://localhost:8080/api/itineraries?cityId=${id}`)
      .then(res => setItinerary(res.data.data))
    }, [])

    

    

    

    

    if (detailCards) {
        return (
            <div className='CONTENEDOR-PADRE'>
              <div className='contenedor-details'>
                <h2>DETAILS</h2>
              </div>
                <div className="detail-cities">
                    <div className="img-detail">
                      
                        <img className="" src={detailCards.photo} alt= {detailCards.name} />
                    </div>
                    <div className="text-detail">
                        <div className="logo-details">
                            <img className="img-w-5" src="./img/building1.png" alt="" />
                        </div>
                        <div>
                          <div>
                            <h1>CITY: {detailCards.name}</h1>
</div>
<div>
                            <p>CONTINENT: {detailCards.continent}</p>
</div>
<div>
                            <p>POPULATION: {detailCards.population}</p>
</div>
                        </div>
                        
                        
                    </div>
                </div>
                
                
                <div className='parteInferior'>
                  <h2>EVENTS</h2>
                </div>
                <div className='cajadeEeventos'>

                {
            (itinerary.length!=0)?itinerary.map(e=><CardDetails key={e?._id} name={e?.name} photo={e?.photo[0]} description={e?.description} price={e?.price} duration={e?.duration} />):console.log(true)
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