import React from 'react'
import "./Movie5.css"
import Button from '../UI/Button/Button'
import "../UI/Button/Button.css"
import refFood from "../../assets/food.webp"

const Movie5 = () => {
  return (
    <div class="grid-container5">
      <div class="item1">February</div>
      <div class="item2">21.02.2023</div>
      <div class="item3">20:15</div>
      <div class="item4">
        <img src={refFood} class="card-img-top" alt="Food" />
      </div>
      <div class="item5">
        <h3 class="card-title">10 billion. How do we all get fed?</h3>
        <p class="card-text">
          In the course of this century the world population will increase to ten billion.
          Where is the food supposed to come from that every individual needs to survive every day, and of which
          every sixth person already has too little. How can we prevent humanity from destroying the basis for its
          nutrition simply by growing?
          <br/>
          With his last film "Taste The Waste", director Valentin Thurn showed the immense amounts of food that go
          to waste these days. In doing so, he addressed a broad public and sparked an intensive social debate beyond
          Germany. Now he's going one step further and in his new documentary "10 Billion" focuses on agriculture as
          the basis of world nutrition.
          <br/>
          How can enough food be produced for ten billion people in the future? Two camps claim to know the solution:
          On the one hand, industrial agriculture, which is constantly expanding globally and relies on highly efficient
          mass production. On the other hand, there is organic and traditional agriculture, which produce less mass,
          but use the limited resources sparingly. The filmmaker wants to know from both sides how they want to feed
          the world in the future. The film shows the global interactions in agriculture using protagonists from the
          central production areas of seeds, fertilization, pest control, animal feed production, animal production and
          trade. The current practice of both sides will be critically questioned, but also their solutions and visions
          for the future will be presented impartially.
          <br/>
          At the end of the film, there are innovative approaches to food security at the local or regional level. They
          all reveal the enormous influence we have with our eating habits. Each of us actively decides which way
          agriculture will dominate in the future. "10 billion" offers a well-founded basis for decision-making.
        </p>
        <div class="but">
          <Button text={"Trailer german"} btnClass={"btn-light"} href={"https://youtu.be/GHYmr3-ThWw"} />
        </div>
      </div>
    </div>
  )
}

export default Movie5