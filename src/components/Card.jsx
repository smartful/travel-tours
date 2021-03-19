// import propTypes from 'proptype'

const Card = ({ name, price, description, srcImg }) => {
  return (
    <div>
      <img src={srcImg} alt={name} />
      <h2>{name}</h2>
      <h3>{price} €</h3>
      <p>{description}</p>
    </div>
  )
}

// propTypes
export default Card
