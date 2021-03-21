import React from 'react'
import PropTypes from 'prop-types'
import TourName from './TourName'

function TextZone ({ name, price, description }) {
  const zoneStyle = {
    padding: '1.5rem'
  }

  return (
    <div style={zoneStyle}>
      <TourName name={name} price={price} />
      <div>{description}</div>
    </div>
  )
}

TourName.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
}

export default TextZone
