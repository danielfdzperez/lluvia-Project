Hunter.prototype = new Character
Hunter.prototype.constructor = Hunter

var TDirection = {north: 0, northeast: 45, east: 90, southeast: 135, south: 180, southwest: 225, west: 270, northwest: 315}
function Hunter(){
  GameElements.call(this, "images/sprite-jugador.png", TDirection.north, 21, 43, 3, 21, null, 300, 120)
  Boid.call(this, this.configuration())
}
