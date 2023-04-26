import React from 'react'
import '../styles/card.css'

function Card({image}) {
  return (
    <div className='card box-shadow3'>
      <img src={image} alt="js" />
    </div>
  )
}

export default Card