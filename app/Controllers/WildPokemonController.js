import { ProxyState } from "../AppState.js";
import { wildPokemonservice } from "../Services/WildPokemonService.js";

function _drawWildPokemon(){
  let template = ''
  ProxyState.wilderness.forEach(p => template += p.Template)
  document.getElementById('wilderness').innerHTML = template
}
export class WildPokemonController {
  constructor() {
    ProxyState.on('wilderness', _drawWildPokemon);
    console.log('Hello form Pokemon Controller!');
    wildPokemonservice.getPokemon()
  }


}
