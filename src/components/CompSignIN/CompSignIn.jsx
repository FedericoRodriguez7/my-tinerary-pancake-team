import React from 'react'
import './CompSignIn.css'
import GoogleButton from '../GoogleButton/GoogleButton'
import Inputs from '../inputs/Inputs'
import { useRef } from 'react'
import BotonPruebaGoogle from '../BotonPruebaGoogle/BotonPruebaGoogle'
import Swal from 'sweetalert2'
import userActions from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BotonEnviar from "../BotonEnviar/BotonEnviar"

export default function CompSignIn() {


  const form = useRef()
  
  const email = useRef()
  const password = useRef()
  const {login} = userActions
  const navigate = useNavigate()
  const dispatch= useDispatch()


  
  async function enviarFormulario(event) {
      event.preventDefault()
      
          let User = {
              
              email: email.current.value,
              password: password.current.value,
          }
          try{
            let response = await dispatch(login(User))
            if(response.payload.success){
              Swal.fire({
                icon: "success",
                title: response.payload.res.message,
                showConfirmButton: true,
              })
              .then(result => {
                if(result.isConfirmed){
                  navigate('/')
                }
              })
            }
            else{
              Swal.fire({
                icon: "error",
                title: response.payload.response,
                showConfirmButton: true,
              })
            }
          }catch(error){
            console.log(error);
          }
      }

  return (
    
    <div className='signin-container'>
        <div className='card-sign'>
            <div className='bg-mountain'>
            <div className='img-sign'>
        <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" />
     </div>
            <div>
                <h2>Welcome Back!</h2>
            </div>
            
            </div>
            <div >
            <form ref={form} id = 'form' action="index" method='get' className='form-signin'>
            <label htmlFor="username">User</label>
                <Inputs refId={email} type="text" placeholder='Enter Email'  id='usernamejs'/>
            
                <label htmlFor="password">Password</label>
    <Inputs refId={password} type="password"  placeholder='Enter Password' />
            
    <BotonEnviar fx={enviarFormulario} type="submit"  value='Submit'/>

            <a href="signup"> Don't Have an Account? </a>
            <GoogleButton/>
        </form>
            </div>
        </div>
    </div>
    
  )
}

