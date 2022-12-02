import React from 'react'

export default function BotonFinal(props) {
    let { fx, texto } = props
    return (
        <button onClick={fx} type='button' className="cssbuttons-io-button">{texto}
            <p>Send</p>
        </button>
    )
}