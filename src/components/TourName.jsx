import React from 'react'
import PropTypes from 'prop-types'

const TourName = ({ name, price }) => {
  const nameStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: '700'
  }

  const priceStyle = {
    width: '5rem',
    height: '1.6rem',
    backgroundColor: '#AABBFF',
    borderRadius: '2rem',
    color: '#1133FF',
    fontWeight: '700',
    padding: '0.25rem 0.5rem'
  }

  return (
    <div style={nameStyle}>
      <div>{name}</div>
      <div style={priceStyle}>{price} €</div>
    </div>
  )
}

TourName.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}

export default TourName
