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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/">Contact</Link></li>
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
