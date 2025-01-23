import {useCallback, useState} from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './NavBar.css'

const NavBar = () => {
  const [t, i18n] = useTranslation('global')

  const [menuOpen, setMenuOpen] = useState(false)

  const handleLng = useCallback((e) => {
    e.preventDefault();
    i18n.changeLanguage(i18n.language === "en" ? 'gr' : 'en')
    setMenuOpen(false);
  }, [i18n])

  return (
    <nav>
      <div className={menuOpen ? "navOpen nav" : "nav"}>
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          {t("header.name")}
        </Link>
        <a
          href="#"
          className="toggleButton"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? "barOpen bar" : "bar"}></span>
          <span className={menuOpen ? "barOpen bar" : "bar"}></span>
        </a>
        <div className={menuOpen ? "navBar navBarOpen" : "navBar"}>
          <a href="#" className="langToggle" onClick={(e) => handleLng(e)}>
            {i18n.language === "en" ? "ΕΛΛΗΝΙΚΑ" : "ENGLISH"}
          </a>
          <Link
            to="/about"
            className="navItem"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.about")}
          </Link>
          <Link
            to="/contact"
            className="buttonNav"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.getIn")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
