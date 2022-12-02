import React from 'react';


export default function CardHotelFinal(props) {
  let{name,photo,description,price,date,userId}=props
  return (
    <div className="cards22">
    <div className="">
        <img src={photo[0]} alt={name} />
        
    </div>
    <div className="ContenidoDetalles2">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <div className="">
        <h5>Price: ${price}</h5>
        <h5>Date: {date}hs</h5>
        </div>
            <div className="">
            </div>
    </div>
    </div>
  )
}