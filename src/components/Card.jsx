import propTypes from 'prop-types'
// House card in Gallery

function Card(props) {
  return (
    <article className="card">
      <img className="card__img" src={props.image} alt={props.title} />
      <h2 className="card__title white">{props.title}</h2>
    </article>
  )
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string
}

Card.defaultProps = {
  title: 'Titre de la location'
}

export default Card
