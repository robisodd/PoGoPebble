var Vibe = require('ui/vibe');
var UI = require('ui');
var Vector2 = require('vector2');

var Distance = require('distance');


// Elements
var pokemonEl = null;
var distanceEl = null;

var pokemon = null;

function updatePokemon(panel, pos, new_pokemon) {
  if (new_pokemon !== null && (pokemon === null || new_pokemon.id !== pokemon.id)) {
    Vibe.vibrate();
  }
  if (pokemonEl !== null) {
    panel.remove(pokemonEl);
  }
  if (distanceEl !== null) {
    panel.remove(distanceEl);
  }
  if (new_pokemon !== null) {
    pokemonEl = new UI.Image({
      position: new Vector2(0, 0),
      size: new Vector2(144, 168),
      image: 'images/main_125.png', // 'images/pokemon' + new_pokemon.pokemonId + '.png',
      compositing: 'set'
    });
    pokemon = new_pokemon;
    console.log(Distance.distance(pos, new_pokemon) + "m");
    distanceEl = new UI.Text({
      text: Math.round(Distance.distance(pos, new_pokemon)) + "m",
      position: new Vector2(12, 130),
      size: new Vector2(120, 44),
      font: 'gothic-28-bold',
      textAlign: 'center'
    });
    panel.add(pokemonEl);
    panel.add(distanceEl);
  } else {
    pokemon = null;
    pokemonEl = null;
    distanceEl = null;
  }
}

this.exports = {setPokemon: updatePokemon};