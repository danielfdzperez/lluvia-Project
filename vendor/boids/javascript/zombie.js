Zombie.prototype = new Character
Zombie.prototype.constructor = Zombie

var canvas = document.getElementById('screener') 
var TDirection = {north: 0, northeast: 45, east: 90, southeast: 135, south: 180, southwest: 225, west: 270, northwest: 315}
/*Zombie sounds*/
Zombie.attack_sound     = new Audio()
Zombie.zombie_die       = new Audio()
Zombie.sound            = new Audio()
Zombie.sound.src        = "sounds/zombie.mp3"
Zombie.zombie_die.src   = "sounds/zombie_die.mp3"
Zombie.attack_sound.src = "sounds/bite.mp3" 

Zombie.img              = new Image()
Zombie.img.src          = "images/sprite-bueno.png" 

function Zombie(positions){
  this.surprise = (Math.floor(Math.random() * 10) == 5)
  this.damage;
  var spawn_position = new Coordinate(positions[0], positions[1])
  GameElements.call(this, TDirection.north, 48, 48, 7, 49.125, 
	            spawn_position.x, spawn_position.y)
  Boid.call(this, this.configuration())
}

Zombie.create_new = function(w, zombies, usr, level){
       var zombie;
       zombies.push(zombie = w.new_boid_of(Zombie, Zombie.spawn()))
       zombie.vel_max = (level+10) * 2
       zombie.live = 100 + level * 5
       zombie.damage = 0.1 + level / 10
       zombie.brain.activate('seek')
       zombie.brain.get_behavior('seek').set_target(usr)
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

//Zombie.prototype.update_physics = function(current_time){
//   // this.cont -= 0.7
//    this.last_time = this.current_time
//    this.current_time = current_time
//   // if(this.cont <=0){
//    this.geo_data.acceleration = this.requested_acceleration()
//    this.geo_data.velocity = integrate(this.geo_data.velocity, this.geo_data.acceleration, this.delta_t() )
//    this.geo_data.position = integrate(this.geo_data.position, this.geo_data.velocity, this.delta_t() )
//   // this.cont = 1
//   // }
//}

Zombie.actions = function(zombies, hunter){
   var hunter_pos = new Coordinate(hunter.geo_data.position.get_coord(1), hunter.geo_data.position.get_coord(0))
   for(var i=0; i<zombies.length; i++){
       var zombie_pos = new Coordinate(zombies[i].geo_data.position.get_coord(1), zombies[i].geo_data.position.get_coord(0))
      if(hunter_pos.y <= zombie_pos.y+24 && hunter_pos.y >= zombie_pos.y-24 && hunter_pos.x <= zombie_pos.x+24 && 
         hunter_pos.x >= zombie_pos.x-24){
	 hunter.live -= zombies[i].damage
	 Zombie.sound.play()
         Zombie.attack_sound.play()	
      }
   }
}

Zombie.prototype.die = function(array, pos, w){
    Zombie.zombie_die.play()
    GameElements.prototype.die.apply(this, arguments)
}
