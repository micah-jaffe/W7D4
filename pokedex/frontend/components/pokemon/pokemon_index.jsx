import React from 'react';

export default class PokemonIndex extends React.Component {
  render() {
    return (
      <ul>
        {this.props.pokemon.map((p) => (
          <li key={p.id}>
            <img src={p.image_url}/>
            {p.name}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
}
