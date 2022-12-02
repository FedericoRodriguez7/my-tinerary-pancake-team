import React from 'react'
import { Link as NavLink } from 'react-router-dom'
import "./CityCard.css"

export default function CityCard(props) {
    let { city } = props

    return (
        <div className="card-container123 bg-palette1 flex column justify-center">
            <div className="img-card-container">
                <img className="img-card"
                    src={city.photo}
                    alt={city.name} />
            </div>
            <div className="text-card">
                <h3>{city.name}</h3>
                <p>Continent: {city.continent}</p>
                <p>Population: {city.population}</p>
            </div>
            <div className='botoncito12321'>
            <NavLink to={`/detailsC/${city._id}`} style={{ textDecoration: 'none' }}>
                <button className="more">More...</button>
            </NavLink>
</div>
        </div>
    )
}