import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(
    <h1>hello</h1>,
    rootEl
  );
})
  

// TESTING 
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
const store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
