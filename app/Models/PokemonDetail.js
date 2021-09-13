export class PokemonDetail {
  constructor(pokeData) {
    this.name = pokeData.name
    this.id = pokeData.id
    this.ability = pokeData.abilities[0].ability.name
    this.hiddenAbility = pokeData.abilities[1]?.ability.name  || 'N/A'
    this.height = pokeData.height
    this.FirstType = pokeData.types[0].type.name
    this.SecondType = pokeData.types[1]?.type.name || 'N/A';
    this.sprite = pokeData.sprites.front_default

  }
  get Template() {
    return /*html*/`
      <div class="card elevation-2">
        <div class="card-header d-flex justify-content-between text-uppercase">
          <h3>${this.name}</h3>
          <p class = "text-uppercase">${this.FirstType} <br> ${this.SecondType}</p>
          <h6 class = "text-center">Pokedex Entry<small><br>${this.id}</small></h6>
        </div>
        <div class="card-body text-center">
        <img src="${this.sprite}" alt="Pokemon_Sprite">
        </div>
        <div class="card-footer d-flex justify-content-between">
          <h6>Ablilities : <br><small>
          ${this.ability} & ${this.hiddenAbility}
          </small></h6>
          <p>Height: <br>${this.height} - (Mesurement)</p>
          <button class="btn btn-success" onclick="app.pokedexController.encounter()">Encoutner</button>
        </div>
      </div>
    `
  }

}