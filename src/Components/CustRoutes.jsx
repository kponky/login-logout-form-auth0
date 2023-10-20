import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'

const CustRoutes = () => {
  return (
    <Routes>
    <Route path='/src/pages/SignupPage.jsx' element={<SignupPage/>}/>
    <Route path='/src/pages/LoginPage.jsx'element={<LoginPage/>} />
      
    </Routes>
   
  )
}

export default CustRoutes
