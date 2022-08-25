import React from 'react'
import "./Movie4.css"
import Button from '../UI/Button/Button'
import "../UI/Button/Button.css"
import refTiny from "../../assets/tinyhouse.jpg"

const Movie4 = () => {
  return (
    <div class="grid-container4">
      <div class="item1">Januar</div>
      <div class="item2">24.01.2023</div>
      <div class="item3">20:15</div>
      <div class="item4">
        <img src={refTiny} class="card-img-top" alt="Tinyhouse" />
      </div>
      <div class="item5">
        <h3 class="card-title">Minimalism</h3>
        <p class="card-text">They made minimalism a movement. Longtime friends Joshua
              Fields Millburn and Ryan Nicodemus show how less can be more in life.
        </p>
        <div class="but">
                    <Button text={"Trailer german"} btnClass={"btn-light"} href={"https://youtu.be/k4WjWPYDRNo"} />
                    <Button text={"Trailer english"} btnClass={"btn-dark"} href={"https://youtu.be/0SI-Kyam_Jk"} />
                </div>
       </div>
    </div>
    )
}

export default Movie4