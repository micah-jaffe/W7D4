import React from 'react';

export default class PokemonDetail extends React.Component {
  render() {

    return (
      <ul>
        <li>{this.props.pokemon.name}</li>
        <li>{this.props.pokemon.attack}</li>
        <li>{this.props.pokemon.defense}</li>
      </ul>
    );
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }
}
