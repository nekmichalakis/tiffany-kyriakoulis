import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
  <nav>
    <div className={menuOpen ? "navOpen nav" : 'nav'}>
      <Link to='/' className="logo" onClick={() => setMenuOpen(false)}>Tiffany Kyriakoulis</Link>
      <a href='#' className='toggleButton' onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'barOpen bar' : 'bar'}></span>
        <span className={menuOpen ? 'barOpen bar' : 'bar'}></span>
      </a>
      <div className={menuOpen ? 'navBar navBarOpen' : 'navBar'}>
          <Link to='/about' className='navItem' onClick={() => setMenuOpen(false)}>ABOUT ME</Link>
          <Link to='/contact' className="buttonNav" onClick={() => setMenuOpen(false)}>GET IN TOUCH</Link>
      </div>
    </div>
  </nav>
  )
}

export default NavBar