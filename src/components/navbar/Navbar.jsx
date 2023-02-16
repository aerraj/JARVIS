import React,{useState} from 'react';
import {RiMenu3Line,RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logo.svg"
import './navbar.css';

const Menu=()=>(
  <>
     <p><a href="#home" >Home</a></p>
  <p ><a href="#jvs3" >Hi Jarvis</a></p>
  <p><a href="#possibility" >Brain AI</a></p>
  <p><a href="#features" >Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)
const Navbar = () => {
  const[toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className="jvs_navbar">
    <div className="jvs_navbar-links">
      </div>
<div className='jvs_navbar-links_logo'>
  <img src={logo} alt="logo" />
</div>
<div className='jvs_navbar-links_container'>
<Menu/>
</div>
<div className="jvs_navbar-sign">
  <p>Sign in</p>
 <p> <button type="submit">Sign up</button></p>
</div>
<div className="jvs_navbar-menu">
  {toggleMenu? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                  {toggleMenu && (
<div className="jvs_navbar-menu_container  scale-up-center">
  <div className='jvs_navbar-menu_container-links'>
<Menu/>
</div>
<div className="jvs_navbar-menu_container-links-sign">
  <p>Sign in</p>
 <button type="button">Sign up</button>
</div>
 </div>
 )}
  
</div>
    </div>
  )
}

export default Navbar