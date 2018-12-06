import React from 'react';

const PokemonIndexItem = ({ key, pokemon }) => {
  return (
    <li key={key}>
      <img src={pokemon.image_url}/>
      {pokemon.name}
    </li>
  )
};

export default PokemonIndexItem;
