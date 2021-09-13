import { PokedexController } from "./Controllers/PokedexController.js";
import { PokemonDetailController } from "./Controllers/PokemonDetailController.js";
import { WildPokemonController } from "./Controllers/WildPokemonController.js";

class App {
  pokedexController = new PokedexController()
  pokemonDetailController = new PokemonDetailController()
  wildPokemonController = new WildPokemonController()
}

window["app"] = new App();
