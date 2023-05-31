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
  
  const after = document.querySelector('.after');
  const before = document.querySelector('.before');
  const [pokemonIndex, setIterator] = useState(0);
  const handleClickBefore = () => {
    if (pokemonIndex > 1) {
      setIterator(pokemonIndex - 1);
      after.style.display = 'unset';      
    } if  (pokemonIndex === 1){
      setIterator(pokemonIndex - 1);
      before.style.display = 'none'
    }
  };
  const handleClickAfter = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setIterator(pokemonIndex + 1);
      before.style.display = 'unset'
    } if (pokemonIndex === pokemonList.length - 2) {
      setIterator(pokemonIndex + 1);
      after.style.display = 'none';
    }
  };
  const pokemon = pokemonList[pokemonIndex];



  return (
    <>
      <div>
        <PokemonCard imgSrc={pokemon.imgSrc} name={pokemon.name}/>
        <button className="before" onClick={handleClickBefore}>Before</button>
        <button className="after" onClick={handleClickAfter}>After</button>
      </div>
    </>
  );
}

export default App
