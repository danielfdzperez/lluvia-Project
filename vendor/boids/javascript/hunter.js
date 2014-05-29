Hunter.prototype = new Character
Hunter.prototype.constructor = Hunter

function Hunter(config){
  this.img = new Image()
  this.img.src="images/sprite-bueno.png"
  this.is_alive = true
  this.config = { 
                 colour: "green",
                 geo_data:  {
                               position: new Vector(150, 200),
                               velocity: new Vector(0, 0),
                               acceleration: new Vector(0, 0)
                            }
   }
   Boid.call(this, this.config)
}
