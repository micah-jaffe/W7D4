import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

export default class PokemonIndex extends React.Component {
  render() {
    const pokemonItems = this.props.pokemon.map(p => (
      <PokemonIndexItem key={p.id} pokemon={p} />
    ));

    return (
      <section className="pokedex">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
}
