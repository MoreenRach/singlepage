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
            <a href='https://www.hs-furtwangen.de/' target="_blank">HFU</a>
            <a href='https://reftreff.hs-furtwangen.de/fu/' target="_blank">Referate</a>
            <a href='https://www.guckloch-furtwangen.de/' target="_blank">Gucklochkino</a>
          </div>
        </div>

        <div className='footer-box'>
          <p className='logo-text2'>
            <GiButterflyFlower color="#fff"/>
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