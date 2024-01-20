import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './NavBar.css'

const NavBar = () => {
  const [t, i18n] = useTranslation('global')

  const [menuOpen, setMenuOpen] = useState(false)

  const handleLng = () => {
    i18n.changeLanguage(i18n.language === "en" ? 'gr' : 'en')
  }

  return (
  <nav>
    <div className={menuOpen ? "navOpen nav" : 'nav'}>
      <Link to='/' className="logo" onClick={() => setMenuOpen(false)}>Tiffany Kyriakoulis</Link>
      <a href='#' className='toggleButton' onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'barOpen bar' : 'bar'}></span>
        <span className={menuOpen ? 'barOpen bar' : 'bar'}></span>
      </a>
      <div className={menuOpen ? 'navBar navBarOpen' : 'navBar'}>
          <a href='#' className="langToggle" onClick={() => handleLng()}>
            {i18n.language === "en" ? "ΕΛΛΗΝΙΚΑ" : 'ENGLISH'} 
          </a>
          <Link to='/about' className='navItem' onClick={() => setMenuOpen(false)}>{t('header.about')}</Link>
          <Link to='/contact' className="buttonNav" onClick={() => setMenuOpen(false)}>{t('header.getIn')}</Link>
      </div>
    </div>
  </nav>
  )
}

export default NavBar