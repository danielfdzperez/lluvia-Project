Zombie.prototype = new Character
Zombie.prototype.constructor = Zombie

var canvas = document.getElementById('screener') 
var TDirection = {north: 0, northeast: 45, east: 90, southeast: 135, south: 180, southwest: 225, west: 270, northwest: 315}
var attack_sound = new Audio()
var zombie_die = new Audio()
zombie_die.src = "sounds/zombie_die.mp3"
attack_sound.src = "sounds/bite.mp3" 
function Zombie(positions){

  this.surprise = (Math.floor(Math.random() * 10) == 5)
  var spawn_position = new Coordinate(positions[0], positions[1])
  GameElements.call(this, "images/sprite-bueno.png", TDirection.north, 48, 48, 7, 49.125, "sounds/zombie.mp3", 
	            spawn_position.x, spawn_position.y)
  Boid.call(this, this.configuration())
}

Zombie.create_new = function(w, zombies, usr){
    //for(var i=0; i<5; i++){
       var zombie;
       zombies.push(zombie = w.new_boid_of(Zombie, Zombie.spawn()))
       zombie.vel_max = 20
       zombie.brain.activate('seek')
       zombie.brain.get_behavior('seek').set_target(usr)
   //}
}
Zombie.spawn = function(){
   var wall_spawn = Math.floor(Math.random() * 4) 
   var positions = []
   switch(wall_spawn){
       case 0://canvas top
       positions.push(0) //y
       positions.push(Math.random() * canvas.width)//x
       break
       case 1://canvas bottom
       positions.push (400)
       positions.push (Math.random() * canvas.width)
       break
       case 2://canvas left
       positions.push (Math.random() * canvas.heigt)
       positions.push (0)
       break
       case 3://canvas right
       positions.push (Math.random() * canvas.heigt)
       positions.push (400) 
       break
   }
   return positions
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

Zombie.actions = function(zombies, hunter){
   var hunter_pos = new Coordinate(hunter.geo_data.position.get_coord(1), hunter.geo_data.position.get_coord(0))
   for(var i=0; i<zombies.length; i++){
       if(zombies[i].is_alive){
          var zombie_pos = new Coordinate(zombies[i].geo_data.position.get_coord(1), zombies[i].geo_data.position.get_coord(0))
	  if(hunter_pos.y <= zombie_pos.y+24 && hunter_pos.y >= zombie_pos.y-24 && hunter_pos.x <= zombie_pos.x+24 && 
	     hunter_pos.x >= zombie_pos.x-24){
	      hunter.live -= 0.1
              attack_sound.play()	
	      if(hunter.live <= 0)
		  alert("Final")
	  }
       }
   }
}
Zombie.prototype.die = function(){
    zombie_die.play()
    this.is_alive = false
    this.geo_data.position = new Vector(-10, 0)
this.my_world.kill(this)
   /* this.config = { 
                 colour: "red",
                 geo_data:  {
                               position: new Vector(10, 200),
                               velocity: new Vector(0, 0),
                               acceleration: new Vector(0, 0)
                            }
   }

    Boid.call(this, this.config)
    */
}
