import React from 'react'
import Logo from '../../assets/main-logo@3x.webp'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
        <a href="/" className="logo">
                <img src={Logo} alt="logo" />
            </a>
       
       
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
