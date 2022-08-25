import React from 'react';
import "./Footer.css"
import {GiButterflyFlower} from "react-icons/gi"

const Footer = () => {
  return (
    <footer id="footer">
      <div className='container footer'>

        <div className='footer-box'>
          <h4>Useful Links</h4>
          <div className='footer-links'>
            <a href='#'>HFU</a>
            <a href='#'>Referate</a>
            <a href='#'>Gucklochkino</a>
          </div>
        </div>

        <div className='footer-box'>
          <p className='logo-text'>
            <GiButterflyFlower color="#fff" size={34} />
            Ref<span>Sustainability</span>
          </p>
          <p className='u-text-small'>
            &copy; Copyright 2022. RefSustainability
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;