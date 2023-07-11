import React from 'react'
import '../styles/card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Card({image}) {
  return (
    <div className='card box-shadow3'>
      {/* <img src={image} alt="js" /> */}
      <LazyLoadImage className='card-image' src={image} effect='blur' />
    </div>
  )
}

export default Card