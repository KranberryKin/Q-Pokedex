import { ProxyState } from "../AppState.js"
import { PokemonDetail } from "../Models/PokemonDetail.js"

// @ts-ignore
const PokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})


class PokemonDetailService {
  async getPokemonDetails(pokeUrl) {
    let res = await PokeApi.get(pokeUrl)
    ProxyState.currentPokemon = new PokemonDetail(res.data)
    console.log(ProxyState.currentPokemon)
    console.log(res.data)
  }


}

export const pokemonService = new PokemonDetailService()