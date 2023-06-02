import PropTypes from "prop-types"
const PokemonCard = ({imgSrc, name}) => {
   
    
    return ((imgSrc)?
            <figure>
                <img src={imgSrc} alt={name} />
                <figcaption> {name} </figcaption>
            </figure>
    :    
            <figure>
                <p>???</p>
                <figcaption> {name} </figcaption>
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