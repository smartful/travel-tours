import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import TourName from './TourName'
import { shortener } from '../utils/shortener'

function TextZone ({ name, price, description }) {
  const [plainDescription, setPlainDescription] = useState(false)

  const zoneStyle = {
    padding: '1.5rem'
  }

  const readMoreStyle = {
    color: '#1133FF',
    fontWeight: '500'
  }

  return (
    <div style={zoneStyle}>
      <TourName name={name} price={price} />
      {plainDescription
        ? <Fragment>
          <div>
            {description}
            <a onClick={() => setPlainDescription(false)} style={readMoreStyle}> Show less</a>
          </div>
        </Fragment>
        : <Fragment>
          <div>
            {shortener(description, 150)}
            <a onClick={() => setPlainDescription(true)} style={readMoreStyle}> Read more</a>
          </div>
        </Fragment>}
    </div>
  )
}

TourName.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
}

export default TextZone
