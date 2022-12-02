import React from 'react'

export default function BotonPruebaGoogle(props) {
    let { url, texto } = props
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt='Logo Google' />
            <a
                href={url}>
                {texto}
            </a>
        </div>
    )
}