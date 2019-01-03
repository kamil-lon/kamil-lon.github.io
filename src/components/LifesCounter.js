import React from "react"
import "./LifesCounter.css"

const LifesCounter = ({ lifes }) => (
  <div className='lifes'>
    {lifes > 0 ? [...Array(lifes)].map((x, i) => <p key={i}>♥</p>) : "KONIEC"}
  </div>
)

export default LifesCounter
