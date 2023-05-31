
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const pokemon = pokemonList[0]
  return (
    <>
      <div>
        <PokemonCard imgSrc={pokemon.imgSrc} name={pokemon.name}/>
      </div>
    </>
  )
}

export default App
