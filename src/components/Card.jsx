import React from 'react'
import PropTypes from 'prop-types'
import TextZone from './TextZone'

const Card = ({ name, price, description, srcImg }) => {
  const cardStyle = {
    width: '50%',
    height: '35rem',
    border: '1px solid white',
    borderRadius: '2rem',
    backgroundColor: 'white',
    marginBottom: '3rem'
  }

  return (
    <div style={cardStyle}>
      <img src={srcImg} alt={name} width='100%' height='50%' />
      <TextZone name={name} price={price} description={description} />
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
