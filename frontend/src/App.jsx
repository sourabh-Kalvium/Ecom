import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from './pages/login'
import Home from './pages/Home'
import Createproudct from './components/Createproudct'
import SellerProcutPage from "./pages/SellerProductPage"
import NavBar from "./components/nav"
import IndividualProduct from './pages/IndividualProduct'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
       <Routes>
            <Route  path="/"  element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create" element={<Createproudct/>}></Route>
            <Route path="/modify" element={<SellerProcutPage/>}></Route>
            <Route path="/pro" element={<IndividualProduct/>}></Route>

       </Routes>
     </BrowserRouter>


    </>
  )
}

export default App
