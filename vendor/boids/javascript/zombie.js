Zombie.prototype = new Character
Zombie.prototype.constructor = Zombie
var x = 151
var color = "green"
function Zombie(){
  this.img = new Image()
  this.img.src="images/sprite-bueno.png"
 // this.cont = 1
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

Zombie.prototype.update_physics = function(current_time){
   // this.cont -= 0.7
    this.last_time = this.current_time
    this.current_time = current_time
   // if(this.cont <=0){
    this.geo_data.acceleration = this.requested_acceleration()
    this.geo_data.velocity = integrate(this.geo_data.velocity, this.geo_data.acceleration, this.delta_t() )
    this.geo_data.position = integrate(this.geo_data.position, this.geo_data.velocity, this.delta_t() )
   // this.cont = 1
   // }
}

Zombie.prototype.change = function(personaje){
    personaje.colour = "red"
}

