import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='login-form'>
   <form className='signin-form'>
   <h2>SignUp</h2>
   <input type='email' placeholder='Email' required/>
   <div className='password-container'>
   <input type='password' placeholder='Password' required />  
   <i class="fa fa-eye-slash" aria-hidden="true"></i>

   </div>
   <a href='#' className='fpw'>Forgot Password?</a>
   <button className='log' type='submit'>Login</button>
   <p>Don't have an accoumnt?<a href='#'>Signup</a></p>
    <p>Or</p>
  

 

   <button className='log btn-facebook' type='submit'><i class="fa fa-facebook" aria-hidden="true"></i> Login with Facebook</button>
   <button className='log btn-google' type='submit'><i class="fa fa-google" aria-hidden="true"></i> Login with Google</button>

   

      
   </form>

   
    
    </div>
    
    
  )
}

export default LoginPage
