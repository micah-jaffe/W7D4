import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {
  render() {
    const pokemonItems = this.props.pokemon.map(p => (
      <PokemonIndexItem key={p.id} pokemon={p} />
    ));

    return (
      <section className="pokedex">
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
