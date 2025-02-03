import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from './pages/login'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
       <Routes>
            <Route  path="/"  element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>

       </Routes>
     </BrowserRouter>


    </>
  )
}

export default App
