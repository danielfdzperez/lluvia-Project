Zombie.prototype = new Character
Zombie.prototype.constructor = Zombie
var x = 151
var color = "green"
function Zombie(){
  this.img = new Image()
  this.img.src="images/sprite-bueno.png"
  this.config = { 
                 colour: color,
                 geo_data:  {
                               position: new Vector(x, 200),
                               velocity: new Vector(0, 0),
                               acceleration: new Vector(0, 0)
                            }
   }
  Boid.call(this, this.config)
      x += 100
      color = "blue"
}


Zombie.prototype.change = function(personaje){
    personaje.colour = "red"
}

