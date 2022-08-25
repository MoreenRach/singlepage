import React from 'react'
import "./Movie1.css"
import Button from '../UI/Button/Button'
import "../UI/Button/Button.css"
import refCar from "../../assets/car.jpg"

const Features = () => {
    return (
        <div class="grid-container1">
            <div class="item1">Oktober</div>
            <div class="item2">25.10.2022</div>
            <div class="item3">20:15</div>
            <div class="item4">
                <img src={refCar} class="card-img-top" alt="Film die Grüne Lüge" />
            </div>
            <div class="item5">
                <h3 class="card-title">Green Lie</h3>
                <p class="card-text">The Green Lie is a cinema documentary by director Werner Boote.
                    He shows the greenwashing of the corporations using the example of palm oil and electric cars.
                    PR strategies of some corporate giants such as BP, RWE and Unilever are linked to personal fates
                    in places of environmental disasters and monocultures.
                </p>
                <div class="but">
                    <Button text={"Trailer german"} btnClass={"btn-light"} href={"https://youtu.be/e_AY6p3KZ8I"} />
                    <Button text={"Trailer english"} btnClass={"btn-dark"} href={"https://www.youtube.com/watch?v=Kon48ssPfCU&t=7s"} />
                </div>
            </div>
        </div>
    )
}

export default Features