import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import actionsCity from '../../redux/actions/cityActions'
import Swal from 'sweetalert2'
import "./CityCardAdmin.css"

export default function CityCardAdmin(props) {
    let { city } = props
    const dispatch = useDispatch()
    const { deleteCity, updateCity } = actionsCity
    const { cities } = useSelector(state => state.city)
    const { token } = useSelector(state => state.user)

    async function deleteAdmin() {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "you won't be able to look it up later!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    let data = {
                        id: city._id,
                        token
                    }
                    dispatch(deleteCity(data))
                    
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    let continents = [...new Set(cities.map(city => city.continent))]

    async function updateAdmin() {
        try {
            const { value: formValues } = await Swal.fire({
                title: `Update City \n ${city.name} `,
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Continent"id="continent" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Population"id="population" class="swal2-input">'+
                    `<select id='continent' class="swal2-input"> 
                    ${continents.map(cont => {
                        if(city.continent === cont){
                            return `<option selected value="${cont}">${cont}</option>`
                        }else{
                            return `<option value="${cont}">${cont}</option>`
                        }})} 
                    </select>`,
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let continent = document.getElementById('continent').value
                    let photo = document.getElementById('photo').value
                    let population = document.getElementById('population').value

                    let data = {
                        id: city._id,
                        token,
                        citie: {

                        }
                    }
                    console.log(token)
                    if(name !== ''){
                        data.citie.name = name
                    }
                    if(continent !== ''){
                        data.citie.continent = continent
                    }

                    if(photo !== ''){
                        data.citie.photo = photo
                    }

                    if(population !== ''){
                        data.citie.population = population
                    }

                    dispatch(updateCity(data))
                    window.location.reload()
                }
            })

            if (formValues) {
                Swal.fire(JSON.stringify(formValues))
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="YAAAA123 card-container bg-palette1 flex column justify-center">
            <div className="img-card-container123">
                <img className="img-card"
                    src={city.photo}
                    alt={city.name} />
            </div>
            <div className="text-card">
                <h3>{city.name}</h3>
                <p>Continent: {city.continent}</p>
                <p>Population: {city.population}</p>
            </div>
            <div className='botonesfinales23123123'>
                <button className="bg-palette5" onClick={updateAdmin}>Update</button>
                <button className="bg-palette2" onClick={deleteAdmin}>Delete</button>
            </div>


        </div>
    )
    
}
