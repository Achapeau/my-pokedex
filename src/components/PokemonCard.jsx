import PropTypes from "prop-types"
const PokemonCard = ({pokemon}) => {
  if (pokemon.name === "pikachu") {
    alert("Pika pikachu!!!")
  }
   
    
    return (
            <figure>
                {pokemon.imgSrc? <img src={pokemon.imgSrc} alt={pokemon.name} /> :<p>???</p>}
                <figcaption> {pokemon.name} </figcaption>
            </figure>
    )
}
PokemonCard.protTypes = {
  props: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default PokemonCard