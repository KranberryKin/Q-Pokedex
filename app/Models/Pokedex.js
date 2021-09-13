export class Pokedex{
  constructor(pokeData){
    this.name = pokeData.name
    this.id = pokeData.id
    this.sprite = pokeData.sprites.front_default
  }
  get Template() {
    return /*html*/`
      <div class="row d-flex justify-content-between ">
          <h3 class = "text-uppercase">${this.name}</h3>
        <div class="card-body scrollable-y" style="max-height:50vh;">
        </div>
        <div class="card-footer">
          <button class="btn btn-success" onclick="app.pokedexController.encounter()">Encoutner</button>
        </div>
      </div>
    `
  }

}