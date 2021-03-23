import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { travels } from './travels'

function App () {
  const [tours, setTours] = useState(travels)

  const withdraw = (name) => {
    const newTours = tours.filter(tour => tour.name !== name)
    setTours(newTours)
  }

  return (
    <div className='App'>
      <h1>Tours</h1>
      <div className='underline' />
      {tours.map(travel => (
        <Card
          key={travel.name}
          name={travel.name}
          price={travel.price}
          description={travel.description}
          srcImg={travel.srcImg}
          withdraw={withdraw}
        />
      ))}
    </div>
  )
}

export default App
