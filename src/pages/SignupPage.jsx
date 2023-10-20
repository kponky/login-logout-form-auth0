import React from 'react'

const SignupPage = () => {
  return (
    <div className='signupFrom'>
    <form className='signup-form'>
    <h2>SignUp</h2>
    <input type='text' placeholder='Username' required/>
    <div className='password-container'>
    <input type='password' placeholder='Password' required />  
    <i class="fa fa-eye-slash" aria-hidden="true"></i>
    </div>
    <div className='password-container'>
    <input type='password' placeholder=' Conform Password' required />  
    <i class="fa fa-eye-slash" aria-hidden="true"></i>
    </div>
    <a href='#' className='fpw'>Forgot Password?</a>
    <button className='log' type='submit'>Signup</button>
    <p>Already Have an accoun?<a href='#'>Login</a></p>
 
    <p>Or</p>
 
  
 
    <button className='log btn-facebook' type='submit'><i class="fa fa-facebook" aria-hidden="true"></i> Login with Facebook</button>
    <button className='log btn-google' type='submit'><i class="fa fa-google" aria-hidden="true"></i> Login with Google</button>
 
    
 
       
    </form>
    </div>
  )
}

export default SignupPage
