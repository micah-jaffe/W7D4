import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(
    <Root store={store}/>,
    rootEl
  );
});


// TESTING
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
window.getState = store.getState;
window.dispatch = store.dispatch;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
