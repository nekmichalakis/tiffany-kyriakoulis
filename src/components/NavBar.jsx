import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  return (
  <nav>
    <div className="nav">
      <Link to='/' className="logo">Tiffany Kyriakoulis</Link>
      <div className="navBar">
          <Link to='/about' className='navItem'>ABOUT ME</Link>
          <Link to='/contact' className="buttonNav">GET IN TOUCH</Link>
      </div>
    </div>
  </nav>
  )
}

export default NavBar