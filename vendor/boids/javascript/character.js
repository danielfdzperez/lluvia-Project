Character.prototype = new GameElements
Character.prototype.constructor = Character

function Character(){
  this.live     = 100
  this.movement = 0
  this.is_alive = true
}
