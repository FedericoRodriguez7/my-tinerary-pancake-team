import React from 'react';
import "./CardDetails2.css"

export default function CardDetails(props) {
  let{name,photo,description,price,duration,userId}=props
  return (
    <div className="cards22">
    <div className="">
        <img src={photo} alt={name} />
        
    </div>
    <div className="ContenidoDetalles2">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <div className="">
        <h5>Price: ${price}</h5>
        <h5>Duration: {duration}hs</h5>
        </div>
            <div className="">
            </div>
    </div>
    </div>
  )
}