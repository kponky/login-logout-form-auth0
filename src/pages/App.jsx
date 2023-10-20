import React from 'react'
import Navbar from '../Components/Navbar'
import "./app.css"
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import { BrowserRouter, Route, Routes, link } from 'react-router-dom'
// import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar/> 
      <SignupPage/>
     
     
      
    </div>
    </BrowserRouter>
  )
}

export default App
