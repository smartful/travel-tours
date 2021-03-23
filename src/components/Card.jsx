import React from 'react'
import PropTypes from 'prop-types'
import TextZone from './TextZone'
import './Card.css'

const Card = ({ name, price, description, srcImg, withdraw }) => {
  return (
    <div className='card'>
      <img src={srcImg} alt={name} className='image' />
      <TextZone name={name} price={price} description={description} />
      <button className="withdraw" onClick={() => withdraw(name)}>Pas intéressé</button>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  srcImg: PropTypes.string
}
export default Card
