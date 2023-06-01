import React from 'react'
import "./CSS/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({home, aboutUs, testo, contact}) => {
  return (
    <>
    <div className="navMain">
      <img src="https://www.pbtech.co.nz/imglib/dd/pb-logo-alt.svg" alt="" />

      <FontAwesomeIcon className='menuIcon' icon={faBars} />
     
      <ul className='nav-links' >
        <li>{home}</li>
        <li>{aboutUs}</li>
        <li>{testo}</li>
        <li>{contact}</li>
      </ul>
        
    </div>
    
    
    </>
  )
}

export default Navbar