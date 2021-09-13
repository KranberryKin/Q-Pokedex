import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/PokeLabel').PokeLabel[]} */
  wilderness = []
  
  /** @type {import('./Models/Pokedex').Pokedex[]} */
  pokedex = []
  /** @type {import('./Models/Pokedex').Pokedex[]} */
  pokemon = []
  /** @type {import('./Models/PokemonDetail').PokemonDetail} */

  currentPokemon = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
