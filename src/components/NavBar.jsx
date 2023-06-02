const NavBar = ({pokemonIndex, length, setPokemonIndex}) => {
    
    const handleClickBefore = () => {
        setPokemonIndex(pokemonIndex - 1);
    }
    
    const handleClickAfter = () => {
        setPokemonIndex(pokemonIndex + 1);
    }
    return (
    <>
        {pokemonIndex > 0 && <button onClick={handleClickBefore}>Before</button>}
        {pokemonIndex < length - 1 && <button onClick={handleClickAfter}>After</button>}
    </>
    )
}
    
    
    export default NavBar

