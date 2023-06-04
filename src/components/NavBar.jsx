const NavBar = ({setPokemonIndex, pokemonIndex, pokemonList}) => {
    
      
    const style = {
        margin: '0.5em',
    }
    
    return (
    <>
        {pokemonList.map((item, i) => (
            <button 
                style={style} key={item.name} 
            onClick={() => {setPokemonIndex((pokemonIndex=i))}}>
            {item.name}</button>
            ))}
    </>
    )
} 
export default NavBar

