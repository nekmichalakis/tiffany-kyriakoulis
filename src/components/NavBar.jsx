import React from 'react'

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav">
        <a href='/' className="logo">Tiffany Kyriakoulis</a>
        <div className="navBar">
            <a href='/about' className='navItem'>ABOUT ME</a>
            <div className="buttonNav">GET IN TOUCH</div>
        </div>
    </nav>
  )
}

export default NavBar