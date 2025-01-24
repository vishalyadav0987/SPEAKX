import React from 'react'
import Logo from '../../assets/main-logo@3x.webp'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" style={{filter:"invert(2)"}}/>
          </Link>


          <nav className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>

          <div className='header-button'>
            <button>Sign in</button>
            <button>Free Trail</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
