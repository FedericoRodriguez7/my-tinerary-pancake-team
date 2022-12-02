import React from 'react'
import { useDispatch} from 'react-redux'
import hotelActions from '../../redux/actions/hotelActions'
import Swal from 'sweetalert2'
import "./ShowCardAdmin.css"

export default function ShowCardAdmin(props) {
    let { show } = props
    const dispatch = useDispatch()
    const { deleteShow, updateShow } = hotelActions

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
                    dispatch(deleteShow(show._id))
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
                title: `Update Show \n ${show.name} `,
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Description"id="description" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Price"id="price" class="swal2-input">'+
                    '<input placeHolder="Date"id="date" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let description = document.getElementById('description').value
                    let photo = document.getElementById('photo').value
                    let price = document.getElementById('price').value
                    let date = document.getElementById('date').value

                    let data = {
                        id: show._id,
                        show: {

                        }
                    }

                    if(name !== ''){
                        data.show.name = name
                    }
                    if(description !== ''){
                        data.show.description = description
                    }

                    if(photo !== ''){
                        data.show.photo = photo
                    }

                    if(price !== ''){
                        data.show.price = price
                    }

                    if(date !== ''){
                        data.show.date =date
                    }

                    dispatch(updateShow(data))
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
        <div className="hotel-card66">
            <div className="img-card-container123">
                <img className="img-card"
                    src={show.photo}
                    alt={show.name} />
            </div>
            <div className="text-card3434">
                <h3>{show.name}</h3>
                <p>Description: {show.description}</p>
                <p>Price: {show.price}</p>
                <p>Date: {show.date}</p>
            </div>
            <div className='botonesfinales23123123'>
                <button className="bg-palette5" onClick={updateAdmin}>Update</button>
                <button className="bg-palette2" onClick={deleteAdmin}>Delete</button>
            </div>


        </div>
    )
}
