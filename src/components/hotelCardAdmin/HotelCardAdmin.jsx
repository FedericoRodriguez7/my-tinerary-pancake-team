import React from 'react'
import { useDispatch } from 'react-redux'
import hotelActions from '../../redux/actions/hotelActions'
import Swal from 'sweetalert2'
import "./hotelCardAdmin.css"

export default function HotelCardAdmin(props) {

    let { hotel } = props
    const dispatch = useDispatch()
    const { deleteHotel, updateHotel} = hotelActions
    
    async function deleteAdmin(){
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
                if (result.isConfirmed){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'  
                    )
                    dispatch(deleteHotel(hotel._id))
                    window.location.reload()
                }
            })
        }catch (error) {
            console.log(error);
        }
    }

    async function updateAdmin() {
        try {
            const {value: formValues} = await Swal.fire({
              title: `Update Hotel \n ${hotel.name} `,
              showCancelButton: true,
              confirmButtonText: 'Update',
              html:
              '<input placeHolder="Name" id="name" class="swal2-input">' +
              '<input placeHolder="Photo1 Url"id="photo1" class="swal2-input">' +
              '<input placeHolder="Photo2 Url"id="photo2" class="swal2-input">' +
              '<input placeHolder="Photo3 Url"id="photo3" class="swal2-input">' +
              '<input placeHolder="Capacity"id="capacity" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                let name = document.getElementById('name').value
                let photo1 = document.getElementById('photo1').value
                let photo2 = document.getElementById('photo2').value
                let photo3 = document.getElementById('photo3').value
                let photo = []
                let capacity = document.getElementById('capacity').value
                let data = {
                    id: hotel._id,
                    hotel: {

                    }
                }

                if(name !== ''){
                    data.hotel.name = name
                }

                if(photo1 !== ''){
                    photo.push(photo1)
                }else{
                    photo.push(hotel.photo[0])
                }

                if(photo2 !== ''){
                    photo.push(photo2)
                }else{
                    photo.push(hotel.photo[1])
                }

                if(photo3 !== ''){
                    photo.push(photo3)
                }else{
                    photo.push(hotel.photo[2])
                }

                if(photo !== []){
                    data.hotel.photo = photo
                }else{
                    data.hotel.photo = hotel.photo
                }

                if(capacity !== ''){
                    data.hotel.capacity = capacity
                }

                dispatch(updateHotel(data))
                window.location.reload()
            }
       
            })
            if (formValues) {
                Swal.fire(JSON.stringify(formValues))
            }
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className="YAAAA123 card-container bg-palette1 flex column justify-center">
            <div className="img-card-container123">
                <img className="img-card"
                    src={hotel.photo[0]}
                    alt={hotel.name} />
            </div>
            <div className="text-card">
                <h3>{hotel.name}</h3>
                <p>Capacity: {hotel.capacity}</p>
            </div>
            <div className='botonesfinales23123123'>
                <button className="bg-palette5" onClick={updateAdmin}>Update</button>
                <button className="bg-palette2" onClick={deleteAdmin}>Delete</button>
            </div>


        </div>
  )
}
