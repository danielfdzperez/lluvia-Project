


Zombie.prototype = new Boid

Zombie.prototype.constructor = Zombie

var img=new Image()

function Zombie(){
     this.colour = "green",
	 this.live = 100
                           /* this.geo_data =  {
                               position : new Vector(300, 180),
                               velocity : new Vector(0, 0),
                               acceleration : new Vector(0, 0)
                            }*/
}

Zombie.prototype.draw = function(ctx){
    img.src="../images/sprite-bueno.png"
    ctx.drawImage(img, 49.125, 0, 50, 50, x, y, 60,60)
}
Zombie.prototype.change = function(personaje){
     personaje.colour = "red"
}

Zombie.prototype.p = function(config) {
                           /* Here you can interact with the outer scope */
                           /* You can also access the already created brain */
                           config.geo_data = {
                              position: new Vector(300, 180),
                              velocity: new Vector(10, 10),
                              acceleration: new Vector(0, 0)
                           }
			   config.vel_max = 20
                           //this.brain.activate("seek", fixed_target)
                           return config
    }
