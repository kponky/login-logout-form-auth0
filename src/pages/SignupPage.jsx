import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function myButton({onClick}){
    const handleClik = (e) =>{
        e.preventDefault; //this prevent form from submityng
        onclick();
    }
}
//this spavce is for googlelogin

const[email, setEmail] = useState(" ");
const [password , setPassword] = useState("");
const [confirmPassword, setConfimPassword] = useState("");

//thi sis for handling email and password

const handleEmail = (e) =>{
    setEmail(e.target.value);
}

const handPassword = (e) =>{
    setPassword(e.target.value);
}

const handleConfirmPassword = (e) =>{
    setConfimPassword(e.target.value);
}

//this is how to handle submission

// const handleSubmit = (e) =>{
//     if (email === "")
// }



const SignupPage = () => {
  return (
    <div className='signupFrom'>
    
    <form className='signup-form' id='signUp' onClick={handleClik} >
    <h2>SignUp</h2>
    <input type='email' placeholder='Email' onChange={HandleEmail} id='email' autoComplete='on' required/>
   
    <div className='password-container'>
    <input type='password' placeholder=' Create Password' onChange={HnadlePassword} name='password' minLength={8} required />  
    <i class="fa fa-eye-slash" aria-hidden="true"></i>
    </div>
    <div className='password-container'>
    <input type='password' placeholder=' Confirm Password' onChange={handleConfirmPassword} name='confirmPassword' minLength={8} required />  
    <i class="fa fa-eye-slash" aria-hidden="true"></i>
    </div>
    <a href='#' className='fpw'>Forgot Password?</a>
    <button className='log' type='submit' onClick={()=>{handleSubmit()} }>Signup</button>
    <p>Already Have an accoun? <Link to= "/LoginPage.jsx"></Link> Login </p>
 
    <p>Or</p>
 
  
 
    <button className='log btn-facebook' type='submit'><i class="fa fa-facebook" aria-hidden="true"></i> Login with Facebook</button>
    <button className='log btn-google' type='submit'><i class="fa fa-google" aria-hidden="true"></i> Login with Google</button>
 
    
    </form>
    </div>
  )
}

export default SignupPage
