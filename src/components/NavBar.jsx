

const NavBar = ({pokemonIndex, length, setPokemonIndex, pokemon}) => {
    
    
        
        const handleClickBefore = () => {
            setPokemonIndex(pokemonIndex - 1);
        }
        
        const handleClickAfter = () => {
            setPokemonIndex(pokemonIndex + 1);
        }
        
    return (
        (pokemon === "pikachu")?
            (alert('pika pikachu!!!'),
            <>
                {pokemonIndex > 0 && <button onClick={handleClickBefore}>Before</button>}
                {pokemonIndex < length - 1 && <button onClick={handleClickAfter}>After</button>}
            </>):
        (
            <>
                {pokemonIndex > 0 && <button onClick={handleClickBefore}>Before</button>}
                {pokemonIndex < length - 1 && <button onClick={handleClickAfter}>After</button>}
            </>
        )
    )
}
    
    
    export default NavBar

