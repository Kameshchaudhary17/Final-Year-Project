
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import './App.css'
import LandingPage from './pages/Landing'

function App() {
  return (
  <>
    <BrowserRouter>
     <Routes>
      <Route path = '/' element = {<LandingPage />}/>
      <Route path = '/login' element = {<Login />}/>
      <Route path = '/signup' element = {<Signup />}/>
      <Route path = '/home' element = {<Home />}/>
     </Routes>
     </BrowserRouter>
  </>
  )
}

export default App