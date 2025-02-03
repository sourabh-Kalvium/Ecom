import React from "react";
import {Link} from "react-router-dom"
function Navbar(){
       return(
        <>
        <h1><Link to="/">HOME</Link></h1>
        <h1><Link to="/login">Login</Link></h1>
        </>
        
       )
}

export default Navbar;