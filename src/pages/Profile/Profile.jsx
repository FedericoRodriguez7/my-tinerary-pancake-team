import React from 'react'
import './Profile.css'
import Swal from 'sweetalert2'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import userActions from '../../redux/actions/userActions'






export default function Profile() {

    
    const form = useRef()
    const dispatch = useDispatch()
    const {getUser, updateUser} = userActions
    const {user,id} = useSelector(state => state.user)
    useEffect(() => {
        dispatch(getUser(id))
    },[])

    function updateName() {

        Swal.fire({
            title: 'Update your name',
            input: 'text',
            inputLabel: 'Your name',
            inputPlaceholder: 'Enter your name',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Write something!'
                }
            }
        })
            .then(async (result) => {
                if (result.isConfirmed) {

                    let userUpdated = {
                        id: user._id,
                        user: {
                            name: result.value
                        }
                    }
                    dispatch(updateUser(userUpdated))
                }
            }
            )
    }

    function updateLastName() {

        Swal.fire({
            title: 'Update your last name',
            input: 'text',
            inputLabel: 'Your last name',
            inputPlaceholder: 'Enter your last name',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Write something!'
                }
            }
        })
            .then(async (result) => {
                if (result.isConfirmed) {

                    let userUpdated = {
                        id: user._id,
                        user: {
                            lastname: result.value
                        }
                    }
                    dispatch(updateUser(userUpdated))
                }
            }
            )
    }

    function updateEmail() {

        Swal.fire({
            title: 'Update your Email',
            input: 'text',
            inputLabel: 'Your Email',
            inputPlaceholder: 'Enter your Email',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
            .then(async (result) => {
                if (result.isConfirmed) {

                    let userUpdated = {
                        id: user._id,
                        user: {
                            email: result.value
                        }
                    }
                    dispatch(updateUser(userUpdated))
                }
            }
            )

    }

    function updatePhoto() {

        Swal.fire({
            title: 'Update your photo',
            input: 'text',
            inputLabel: 'Your new photo url',
            inputPlaceholder: 'Enter your new photo url',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
            .then(async (result) => {
                if (result.isConfirmed) {

                    let userUpdated = {
                        id: user._id,
                        user: {
                            photo: result.value
                        }
                    }
                    dispatch(updateUser(userUpdated))
                }
            }
            )
    }
    function updateAge() {

        Swal.fire({
            title: 'Update your age',
            input: 'text',
            inputLabel: 'Your age',
            inputPlaceholder: 'Enter your age',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
            .then(async (result) => {
                if (result.isConfirmed) {

                    let userUpdated = {
                        id: user._id,
                        user: {
                            age: result.value
                        }
                    }
                    dispatch(updateUser(userUpdated))
                }
            }
            )
    }

    function updatePassword(e) {
        e.preventDefault()
        Swal.fire({
            title: 'Update your password',
            input: 'password',
            inputLabel: 'Your password',
            inputPlaceholder: 'Enter your password',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
            .then(async (result) => {
                if (result.isConfirmed) {

                    let userUpdated = {
                        id: user._id,
                        user: {
                            password: result.value
                        }
                    }
                    dispatch(updateUser(userUpdated))
                }
            }
            )
    }



  return (
    <>
    <div className='container-profilepage'>
        <div className='card-profilecontainer'>
        <div className='tittle-profile'>
            <h4>My Profile</h4>
        </div>
        <form ref={form}>
        <div className='img-profile'>
            <img src={user.photo} alt="" />

        </div>
        <div>
            <div className='edits' onClick={updatePhoto}> 
               <p>Update photo</p> 
            </div>
        </div>
        <div className='information-container12'>
            <div className='edits'><p onClick={updateName}>Edit </p><h4 > Name : {user.name}</h4> </div>
            <div className='edits'><p onClick={updateLastName}>Edit </p><h4 > Last Name: {user.lastname}</h4> </div>
            <div className='edits'><p onClick={updateAge }>Edit </p> <h4 > Age:{user.age} </h4> </div>
            <div className='edits'><p onClick={updateEmail }>Edit </p><h4 > Email:{user.email} </h4> </div>
            <div className='edits'><p onClick={updatePassword} >Edit </p><h4 > Password:{user.password} </h4> </div>

        </div>
        </form>
        </div>
    </div>
    </>

  )
} 
