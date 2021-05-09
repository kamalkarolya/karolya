import React,{useContext} from 'react';
import './Navbar.css';
import {Link, NavLink } from "react-router-dom";
import logo from "../images/logoanime.png";
import { UserContext } from '../App';


const Navbar = () => {
  const {state, dispatch} =  useContext(UserContext);
   const RenderMenu=()=>{
    if (state) {
      return(
        <>
        <li className="nav-item">
        <Link to="/" className="links" > <a className="nav-link active" aria-current="page">Home</a></Link>
       </li>
       <li className="nav-item">
        <Link to="/aboutme" className="links" > <a className="nav-link active" aria-current="page">About</a></Link>
       </li>
       <li className="nav-item">
       <Link to="/contact" className="links"> <a className="nav-link active" aria-current="page">Contact</a></Link> 
       </li>
   
       <li className="nav-item">
        <Link to="/signout"  className="links"> <a className="nav-link active" aria-current="page">Logout</a></Link>
       </li>
       </>
       
       
      )
    }else{
      return (
       <>
           <li className="nav-item">
         <Link to="/" className="links" > <a className="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item">
         <Link to="/aboutme" className="links" > <a className="nav-link active" aria-current="page">About</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className="links"> <a className="nav-link active" aria-current="page">Contact</a></Link> 
        </li>
        <li className="nav-item">
        <Link to="registration" className="links" > <a className="nav-link active" aria-current="page">Registration</a></Link> 
        </li>
        <li className="nav-item">
         <Link to="/signin"  className="links"> <a className="nav-link active" aria-current="page">Login</a></Link>
        </li>
      </>
        
      )
    }

   }
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <NavLink to="/" className="links" >
         <img src={logo} className="logo" alt="Karolya" /> <span style={{fontSize:"2rem",textDecoration:"none",color:"black"}} > ₭₳Ɽ0ⱠɎ₳</span>  
   </NavLink>
   
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
       <RenderMenu />
        
      </ul>
  
    </div>
  </div>
</nav>
      </>
    )
}

export default Navbar
