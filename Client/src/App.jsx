import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

function App() {
  return (
  <>
    <BrowserRouter>
     <Routes>
      <Route path = '/' element = {<Login />}/>
      <Route path = '/signup' element = {<Signup />}/>
     </Routes>
     </BrowserRouter>
  </>
  )
}

export default App
