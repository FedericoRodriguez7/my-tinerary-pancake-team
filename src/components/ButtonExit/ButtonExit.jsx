import React from 'react'
import { Link as NavLink } from 'react-router-dom'
import "./ButtonExit.css"

export default function ButtonExit(props) {
    let { rute,  text, fx } = props

    return (
        <NavLink to={rute} style={{ textDecoration: 'none' }}>
            <div className='botoncitoLogOut'>
            <button  onClick={fx}>{text}</button>
            </div>
        </NavLink>
    )
}