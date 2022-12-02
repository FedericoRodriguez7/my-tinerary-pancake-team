import { useRef } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import hotelActions from '../../redux/actions/hotelActions'
import Swal from 'sweetalert2'
import Inputs from '../../components/inputs/Inputs'
import { useNavigate } from 'react-router-dom'
import BotonEnviar from "../../components/BotonEnviar/BotonEnviar"
import "./NewShows.css"

export default function NewShows() {

    const dispatch = useDispatch()
    const { createShow } = hotelActions
    const { hotels } = useSelector(state => state.hotel)
    const { token, id } = useSelector(state => state.user)
    const navigate = useNavigate()

    const form = useRef()
    const name = useRef()
    const photo = useRef()
    const description = useRef()
    const date = useRef()
    const price = useRef()
    const hotelId = useRef()

    async function enviarForm(e) {
        e.preventDefault()
        let datos = {
            token,
            itinerary: {
                name: name.current.value,
                photo: photo.current.value,
                description: description.current.value,
                duration: date.current.value,
                price: price.current.value,
                cityId: hotelId.current.value,
                userId: id
            }
        }
        try {
            let res = await dispatch(createShow(datos))
            console.log(res)
            if (res.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'show successfully created',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'See my shows',
                    cancelButtonText: 'Exit'
                })
                    .then(result => {
                        if (result.isConfirmed) {
                            navigate(`/myShows`)
                        }
                    })
                form.current.reset()
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="main-container-sign123214241421">
            
            <div className="">
                <form ref={form}>
                    <div className="cardForm ">
                        <div className='tituloitinerarios123123'>
                        <h1 className=" titleForm">New Show</h1>
                        </div>
                        <div className=''>
                            
                            <div className='contenidoItinerary123'>
                                <div className="contenido12312421">
                                    <Inputs  type="text" place="Name" id="name" refId={name} />
                                    <Inputs  type="text" place='Url Photo ' id="Photo" refId={photo} />
                                    <Inputs  type="text" place="Deate" id="description" refId={date} />
                                    <Inputs  type="number" place="Price" id="price" refId={price} />
                                    
                                    <label className='title-select' htmlFor='cityId'>Select a hotel :</label>
                                    <select ref={hotelId}  id="cityId">
                                        {hotels.map(hotel => <option key={hotel._id} value={hotel._id}>{hotel.name}</option>)}
                                    </select>
                               
                                <BotonEnviar fx={enviarForm} texto='Create Show' />
                                 </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}