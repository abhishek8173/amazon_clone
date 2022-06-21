import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/amzn_logo.png'
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
      <Link to="/login">
        <img className='header__logo' src={LOGO} alt='amazon'/>
      </Link>

      <input type="text" className="header__searchInput" />
    </nav>
  )
}

export default Header