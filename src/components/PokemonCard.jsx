import PropTypes from "prop-types"
const PokemonCard = (props) => {
    console.log (props)
    
    return ((props.imgSrc)?
            <figure>
                <img src={props.imgSrc} alt={props.name} />
                <figcaption> {props.name} </figcaption>
            </figure>
    :    
            <figure>
                <p>???</p>
                <figcaption> {props.name} </figcaption>
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