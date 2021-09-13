import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonDetailService.js";

function _drawCurrentPokemon() {
  let template = ''
  template += ProxyState.currentPokemon.Template
  document.getElementById('encounter').innerHTML = template
}
export class PokemonDetailController {
  constructor() {
    ProxyState.on('currentPokemon', _drawCurrentPokemon)
    console.log('Hello form Pokemon Controller!');
    // pokemonService.getPokemon()
  }
  getPokemonDetails(pokeUrl) {
    pokemonService.getPokemonDetails(pokeUrl)
  }
}
