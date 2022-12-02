import React from 'react'
import { useRef } from 'react'
import './CompSignUp.css'
import Inputs from '../inputs/Inputs'
import BotonEnviar from "../BotonEnviar/BotonEnviar"
import BotonPruebaGoogle from '../BotonPruebaGoogle/BotonPruebaGoogle'
import Swal from 'sweetalert2'
import axios from 'axios'
import { BASE_URL } from '../../api/url'

export default function CompSignUp() {


const form = useRef()
const name = useRef()
const lastName = useRef()
const photo = useRef()
const age = useRef()
const email = useRef()
const password = useRef()
const confirmPassword = useRef()

function enviarFormulario(event) {
    event.preventDefault()
    if (password.current.value === confirmPassword.current.value) {
        let newUser = {
            name: name.current.value,
            lastName: lastName.current.value,
            photo: photo.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value,
        }
        Swal.fire({
            icon: 'info',
            title: `${newUser.name} ${newUser.lastName} Do you want to register with this information?`,
            showConfirmButton: true,
            showCancelButton: true,
        })
            .then(async result => {
                if (result.isConfirmed) {
                    let response = await axios.post(`${BASE_URL}/api/auth/sign-up`, newUser)
                    if (response.data.success) {
                        Swal.fire({
                            title: 'Success!',
                            text: `${newUser.name} your account was created successfully. Please check your mailbox ( ${newUser.email} ) and confirm your registration.`,
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        form.current.reset()
                    }
                }
            })
            .catch(error => {
                if(Array.isArray(error.response.data.message)){
                    Swal.fire({
                        icon: "error",
                        title: error.response.data.message.join(' <br> '),
                        showConfirmButton: true,
                    });
                }else{
                    Swal.fire({
                        icon: "error",
                        title: error.response.data.message,
                        showConfirmButton: true,
                    });
                }
            })
    } else {

        Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            text: 'Passwords do not match!',
        })
    }

}

  return (
      <div className='signup-container'>
          <div className='card-signup'>
          <h3>Sign Up!</h3>
          
  
          <div className='form-signin'>
      <form ref={form}>
      <Inputs classN="signup-input" type="text" place="Name" id="name" refId={name} />
                            <Inputs classN="signup-input" type="text" place="LastName" id="lastName" refId={lastName} />
                            <Inputs classN="signup-input" type="text" place="Photo" id="photo" refId={photo} />
                            <Inputs classN="signup-input" type="number" place="Age" id="age" refId={age} />
                            <Inputs classN="signup-input" type="email" place="Email" id="email" refId={email} />
                            <Inputs classN="signup-input" type="password" place="Password" id="password" refId={password} />
                            <Inputs classN="signup-input" type="password" place="Confirm Password" id="confirmPassword" refId={confirmPassword} />
      </form>
  </div>
  <div className='bottonregistrarse1234123'>
  <BotonEnviar fx={enviarFormulario} texto='Sign Up' />
  </div>
  <div className='botongoogle123213'>
                        <BotonPruebaGoogle texto='Sign up with Google' url='https://accounts.google.com/v3/signin/identifier?dsh=S-1341219122%3A1667751252859917&continue=https%3A%2F%2Fwww.google.com%2F%3Fgws_rd%3Dssl&ec=GAZAmgQ&hl=es-419&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAt_thDvZZDycyZfT6GZJJ27KpLLjV92H1YwhHxFL1XG0rjrjh3BfVulpJ6CADzp2VCsgYHudQ' />
         </div>
          </div>
      </div>
    )
  }
  
  
  
