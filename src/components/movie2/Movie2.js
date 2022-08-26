import React from 'react'
import "./Movie2.css"
import Button from '../UI/Button/Button'
import "../UI/Button/Button.css"
import refNilpferd from "../../assets/Nilpferd.webp"

const Movie2 = () => {
  return (
    <div class="grid-container2">
      <div class="item1">November</div>
      <div class="item2">29.11.2022</div>
      <div class="item3">20:15</div>
      <div class="item4">
        <img src={refNilpferd} class="card-img-top" alt="Okja" />
      </div>
      <div class="item5">
        <h3 class="card-title">Okja</h3>
        <p class="card-text">Okja is a 2017 action-adventure film directed by Bong Joon-ho
          with a screenplay by Bong and Jon Ronson from a story by Bong. The film is about a young girl who raised a
          genetically modified "super pig" (the titular Okja) and, after she is taken to the United States, goes on
          a mission to rescue her from mistreatment at the hands of the meat industry.
        </p>
        <div class="but">
                    <Button text={"Trailer german"} btnClass={"btn-light"} href={"https://youtu.be/IRYIGfUqpQ0"} />
                    <Button text={"Trailer english"} btnClass={"btn-dark"} href={"https://youtu.be/AjCebKn4iic"} />
        </div>
      </div>
    </div>
    )
}

export default Movie2