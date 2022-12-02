import React from 'react'
import './HotelCard.css'
import { Link as NavLink } from 'react-router-dom'

export default function HotelCard(props) {
    let { hotel } = props
    
    return (
        <div className="card-container123 bg-palette1 flex column justify-center">
            <div className="img-card-container">
                <img className="img-card"
                    src={hotel.photo[0]}
                    alt={hotel.name} />
            </div>
            <div className="text-card">
                <h3>{hotel.name}</h3>
                <p>Capacity: {hotel.capacity}</p>
            </div>
            <div className='botoncito12321'>
            <NavLink to={`/detailsH/${hotel._id}`} style={{ textDecoration: 'none' }}>
                <button className="more">More...</button>
            </NavLink>
</div>
        </div>
    )
}