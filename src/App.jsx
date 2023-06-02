import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';

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
  
  const [pokemonIndex, setPokemonIndex] = useState(3);
  const pokemon = pokemonList[pokemonIndex];

  return (
    <>
      <div>
        <PokemonCard imgSrc={pokemon.imgSrc} name={pokemon.name}/>
        <NavBar pokemonIndex={pokemonIndex} length={pokemonList.length} setPokemonIndex={setPokemonIndex}/>
      </div>
    </>
  );
}

export default App
