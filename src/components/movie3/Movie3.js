import React from 'react'
import "./Movie3.css"
import Button from '../UI/Button/Button'
import "../UI/Button/Button.css"
import refTom from "../../assets/Tom.webp"

const Movie3 = () => {
  return (
    <div class="grid-container3">
      <div class="item1">December</div>
      <div class="item2">20.12.2022</div>
      <div class="item3">20:15</div>
      <div class="item4">
        <img src={refTom} class="card-img-top" alt="Tommorrow" />
      </div>
      <div class="item5">
        <h3 class="card-title">Tommorow</h3>
        <p class="card-text">What if each of us could contribute? When actress Mélanie Laurent and French activist
          Cyril Dion read a study in Nature magazine that predicts the likely collapse of our civilization in the next 40
          years, they grapple with the
          horror -Scenario not accept. However, they quickly realize that the existing approaches are not sufficient to
          inspire a large part of the population
          and to motivate them to take action. So the two set off. You will talk to experts and visit projects and
          initiatives around the world that pursue
          alternative ecological, economic and democratic ideas. What they find are answers to the most pressing questions
          of our time. And the certainty
          that there may be another story for our future.</p>
        <div class="but">
          <Button text={"Trailer german"} btnClass={"btn-light"} href={"https://youtu.be/k4WjWPYDRNo"} />
          <Button text={"Trailer english"} btnClass={"btn-dark"} href={"https://youtu.be/0SI-Kyam_Jk"} />
        </div>
      </div>
    </div>
  )
}

export default Movie3