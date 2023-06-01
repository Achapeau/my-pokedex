import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  
  // const after = document.querySelector('.after');
  // const before = document.querySelector('.before');
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex]

  const handleClickBefore = () => {
      setPokemonIndex(pokemonIndex - 1);
    }
  
  const handleClickAfter = () => {
      setPokemonIndex(pokemonIndex + 1);
    }
  



  return (
    <>
      <div>
        <PokemonCard imgSrc={pokemon.imgSrc} name={pokemon.name}/>
        {pokemonIndex > 0 && <button onClick={handleClickBefore}>Before</button>}
        {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickAfter}>After</button>}
      </div>
    </>
  );
}

export default App
