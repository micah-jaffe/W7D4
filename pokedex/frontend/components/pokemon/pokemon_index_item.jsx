import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => {
  return (
    <Link to='/pokemon/:pokemonId'>
      <li>
        <img src={pokemon.image_url}/>
        {pokemon.name}
      </li>
  </Link>
  )
};

export default PokemonIndexItem;
