Hunter.prototype = new Character
Hunter.prototype.constructor = Hunter

var canvas = document.getElementById('screener') 
var TDirection = {north: 0, northeast: 45, east: 90, southeast: 135, south: 180, southwest: 225, west: 270, northwest: 315}
function Hunter(){
  GameElements.call(this, "images/sprite-jugador.png", TDirection.north, 21, 43, 3, 21, null, 300, 120)
  Boid.call(this, this.configuration())
}

Hunter.prototype.actions = function(keys_down, keys_up, w, gun_shots){
   var acc        = new Coordinate(this.geo_data.velocity.get_coord(1), this.geo_data.velocity.get_coord(0))
   var actual_pos = new Coordinate(this.geo_data.position.get_coord(1), this.geo_data.position.get_coord(0))

   /*If keys up*/
   if (87 in keys_up || 38 in keys_up)  // Player holding up
       acc.y = 0 
   if (83 in keys_up || 40 in keys_up)  // Player holding down
       acc.y = 0 
   if (65 in keys_up || 37 in keys_up)  // Player holding left
       acc.x = 0 
   if (68 in keys_up || 39 in keys_up)  // Player holding right
       acc.x = 0 
   /*If keys down*/
   if (87 in keys_down || 38 in keys_down)  // Player holding up
       acc.y = -20 
   if (83 in keys_down || 40 in keys_down)  // Player holding down
       acc.y = 20 
   if (65 in keys_down || 37 in keys_down)  // Player holding left
       acc.x = -20 
   if (68 in keys_down || 39 in keys_down)  // Player holding right
       acc.x = 20 
   if (32 in keys_down){
      gun_shots.push(w.new_boid_of(Bullet, usr))
      }
   if(16 in keys_down){ //player run
       acc.x *= 2
       acc.y *= 2
   }

   /*To avoid the player out of the dash*/
   var future_pos = new Coordinate((actual_pos.y + acc.y), (actual_pos.x + acc.x))
   if(future_pos.y > 0 && future_pos.y < canvas.height && future_pos.x > 0 && future_pos.x < canvas.width)
     this.geo_data.velocity = new Vector(acc.x, acc.y)
   else
     this.geo_data.velocity = new Vector(0, 0)
}
