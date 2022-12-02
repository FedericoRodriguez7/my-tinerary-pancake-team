import './Newcity.css'
import React, {  useRef } from 'react';
import BotonEnviar from '../../components/BotonEnviar/BotonEnviar';
import { useDispatch } from "react-redux"
import Inputs from '../../components/inputs/Inputs';
import actionsCity from '../../redux/actions/cityActions';
import Swal from 'sweetalert2';

export default function NewCity() {

    const dispatch = useDispatch()
    const { createCity} = actionsCity

    const form = useRef()
    const name = useRef()
    const continent = useRef()
    const photo = useRef()
    const population = useRef()

    async function enviarFormulario(event) {
        let newCity;
        event.preventDefault()

        newCity ={
            name: name.current.value,
            continent: continent.current.value,
            photo: photo.current.value,
            population: population.current.value,
            userId: '636fe5cd55d86e11bfaebc4a',

        }

        
  
        try {
            let res = await dispatch(createCity(newCity))
            console.log(res.payload)
            if (res.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'City created successfully.',
                    showConfirmButton: true,
                })
                .then(result => {
                    if(result.isConfirmed){
                        window.location.href = `/detailsC/${res.payload.id}`
                    }
                })  
                form.current.reset()    
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: res.payload.messages.join(' <br> '),
                })
            }
        } catch (error) {
            console.log(error)

    }

}
    

    return (
        <main>
        <div className='CONTENEDORPADRE2'>
          <div className='ParteSuperiorNew'>
                    <h2> New City</h2>
                  </div>
            <form ref={form} className="form-newCity">
                <div className="form-body">
                  
                    
                    <h2 className='title2'>Create new City!</h2>
                    <h4>City name</h4>
                    <Inputs
                        type="text"
                        placeholder="Name of city"
                        className='form__input'
                        id="name"
                        refId={name}
                        
                    />
            <h4>Continent</h4>
                    <Inputs 
                        type="text"
                        placeholder="Continent"
                        className='form__input'
                        id="continent"
                        refId={continent}
                    />
                    <h4>Photo</h4>
                    <Inputs
                        type="text"
                        placeholder="Photo (URL)"
                        className='form__input'
                        id="photo"
                        refId={photo}
                    />
                    <h4>Population</h4>
                    <Inputs
                        type="text"
                        placeholder="Population"
                        className='form__input'
                        id="population"
                        refId={population}
                    />
                    
                    <div className="submit12">

                        <BotonEnviar fx={enviarFormulario} texto='Create City' />
                        
                    </div>
                </div>
            </form>
            </div>
            </main>
    );
};
