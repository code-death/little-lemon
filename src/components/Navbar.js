import React from 'react'
import '../Css/Navbar.css'
import logo from '../Assets/Logo.svg'

export default function Navbar() {
  return (
    <nav>
        <img src={logo} alt="logo" />
        <ul className='sectionLinks'>
            <li className='sectionLink'><a href="#home">Home</a></li>
            <li className='sectionLink'><a href="#home">About</a></li>
            <li className='sectionLink'><a href="#home">Menu</a></li>
            <li className='sectionLink'><a href="#home">Reservation</a></li>
            <li className='sectionLink'><a href="#home">Order Online</a></li>
            <li className='sectionLink'><a href="#home">Login</a></li>
        </ul>
    </nav>
  )
}
