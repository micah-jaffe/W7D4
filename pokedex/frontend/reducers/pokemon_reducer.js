import {
  RECEIVE_ALL_POKEMON ,
  RECEIVE_POKEMON
} from '../actions/pokemon_actions';

const pokemonReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, oldState, action.pokemon);
    case RECEIVE_POKEMON:
      const poke = action.payload.pokemon;
      return Object.assign({}, oldState, { [poke.id]: poke });
    default:
      return oldState;
  }
};

export default pokemonReducer;
