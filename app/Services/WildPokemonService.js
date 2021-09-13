import { ProxyState } from "../AppState.js"
import { PokeLabel } from "../Models/PokeLabel.js"


// @ts-ignore
const wildPokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=251'
})

class WildPokemonService{
  async getPokemon(){
    let res = await wildPokeApi.get()
    ProxyState.wilderness = res.data.results.map(p => new PokeLabel(p))
  }
}
export const wildPokemonservice = new WildPokemonService()