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


export default PokemonCard