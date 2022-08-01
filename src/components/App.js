import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data)
      });
  }, []);

  function pokeSearch(myText) {
      fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => {
        const searched = data.filter(item => item.name.startsWith(myText))
        setPokemon(searched)
      });
  }

  function handleNew(newItem) {
    setPokemon([...pokemon, newItem]);
  }

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} pokeSearch={pokeSearch} handleNew={handleNew}/>
    </div>
  );
}

export default App;
