import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  const poke = state.entities.pokemon[ownProps.match.params.pokemonId];
  return ({
    pokemon: poke
  });
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: id => (dispatch(requestSinglePokemon(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
