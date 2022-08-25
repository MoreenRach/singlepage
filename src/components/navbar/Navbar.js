import React from 'react'
import "./Navbar.css"
import {GiButterflyFlower} from "react-icons/gi"

const Navbar = () => {
   return (
    <nav className="container navbar">
      <div className="logo">
        <p className='logo-foto'>
          <GiButterflyFlower color="#fff" size={34}/>
        </p>
        <p className='logo-text'>
          Referat <span>Sustainability</span>
        </p>
      </div>
      <menu>
        <ul className='nav-links'>
          <li><a href='#'>Programm</a></li>
          <li><a href='#'>Blog</a></li>
        </ul>
      </menu>
    </nav>
  )
}

export default Navbar