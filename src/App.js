import './App.css'
import Card from './components/Card'
import { travels } from './travels'

function App () {
  return (
    <div className='App'>
      <h1>Tours</h1>
      <div className='underline' />
      {travels.map(travel => (
        <Card
          key={travel.name}
          name={travel.name}
          price={travel.price}
          description={travel.description}
          srcImg={travel.srcImg}
        />
      ))}
    </div>
  )
}

export default App
