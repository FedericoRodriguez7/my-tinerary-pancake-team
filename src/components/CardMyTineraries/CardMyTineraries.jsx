import React from 'react'
import { useDispatch} from 'react-redux'
import Swal from 'sweetalert2'
import myItineraries from '../../redux/actions/mytinerariesAction'


export default function CardMyTineraries(props) {
    let { itinerary } = props
    
    const dispatch = useDispatch()
    const { deleteCity, updateCity } = myItineraries
console.log(itinerary)
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
                    dispatch(deleteCity(itinerary._id))
                    window.location.reload()
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    async function updateAdmin() {
        try {
            const { value: formValues } = await Swal.fire({
                title: `Update City \n ${itinerary.name} `,
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Continent"id="continent" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Population"id="population" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let continent = document.getElementById('continent').value
                    let photo = document.getElementById('photo').value
                    let population = document.getElementById('population').value

                    let data = {
                        id: itinerary._id,
                        citie: {

                        }
                    }

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
                    src={itinerary.photo}
                    alt={itinerary.name} />
            </div>
            <div className="text-card">
                <h3>{itinerary.name}</h3>
                <p>Continent: {itinerary.continent}</p>
                <p>Population: {itinerary.population}</p>
            </div>
            <div className='botonesfinales23123123'>
                <button className="bg-palette5" onClick={updateAdmin}>Update</button>
                <button className="bg-palette2" onClick={deleteAdmin}>Delete</button>
            </div>


        </div>
    )
  







}