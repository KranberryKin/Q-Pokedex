export class PokeLabel {
  constructor(pokeData) {
    this.name = pokeData.name
    this.url = pokeData.url
  }

  get Template() {
    return /*html*/`
      <li class="list-group-item py-2 selectable scrollable-y text-uppercase" onclick="app.pokemonController.getPokemonDetails('${this.url}')">${this.name}</li>
    `
  }

}