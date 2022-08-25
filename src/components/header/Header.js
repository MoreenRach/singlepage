import React from 'react'
import "./Header.css"
import refHeader from "../../assets/zukunft.jpg"

const Header = () => {
  return (
    <section id="header">
      <div className='container header'>
        <div className='header-left'>
          <h1>
            <span>REFERAT SUSTAINABILITY</span>
            <span>MOVIE PROGRAM</span>
          </h1>
          <p className='text-header u-text-light'>Students of the University Furtwangen organize once in a month a movie event in the Guckloch 
              cinema in Furtwangen. Movies with topics to sustainability will be shown.</p>
        </div>
        <div className='header-right'>
          <img src={refHeader} alt="ref" />
        </div>
      </div>
    </section>
  )
}

export default Header