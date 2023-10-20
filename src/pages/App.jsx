import React from 'react'
import Navbar from '../Components/Navbar'
import "./app.css"
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
// import Home from './Home'

const App = () => {
  return (
    <div>
      <Navbar/> 
 
      <SignupPage/>
      
    </div>
  )
}

export default App
