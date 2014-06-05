Bullet.prototype = new GameElements
Bullet.prototype.constructor = Bullet

var canvas     = document.getElementById('screener') 
var TDirection = {north: 0, northeast: 45, east: 90, southeast: 135, south: 180, southwest: 225, west: 270, northwest: 315}
Bullet.img       = new Image()
Bullet.img.src   = "images/bullet.png"
Bullet.sound     = new Audio()
Bullet.sound.src = "sounds/shot.mp3"
function Bullet(user){
    var pos = new Coordinate(user.geo_data.position.get_coord(1), user.geo_data.position.get_coord(0))
    GameElements.call(this, user.direction, 6, 11, 1, 6, pos.x, pos.y)
    this.is_moving = true
    switch(this.direction){
	case TDirection.north:
	    this.pos.y += -20
	    this.vel.y  = -100
	    this.vel.x  =   0
	    break
	case TDirection.northeast:
	    this.pos.y += -20
	    this.pos.x +=  20
	    this.vel.y  = -100
	    this.vel.x  =  100
	    break
        case TDirection.east:
	    this.pos.x +=  20
	    this.vel.y  =   0
	    this.vel.x  =  100
	    break
        case TDirection.southeast:
	    this.pos.y +=  20
	    this.pos.x +=  20
	    this.vel.y  =  100
	    this.vel.x  =  100
	    break
        case TDirection.south:
	    this.pos.y +=  20
	    this.vel.y  =  100
	    this.vel.x  =   0
	    break
        case TDirection.southwest:
	    this.pos.y +=  20
	    this.pos.x += -20
	    this.vel.y  =  100
	    this.vel.x  = -100
	    break
        case TDirection.west:
	    this.pos.x += -20
	    this.vel.y  =   0
	    this.vel.x  = -100
	    break
        case TDirection.northwest:
	    this.pos.y += -20
	    this.pos.x += -20
	    this.vel.y  = -100
	    this.vel.x  = -100
	    break
    }
    Boid.call(this, this.configuration(this.pos.x, this.pos.y, this.vel.x, this.vel.y))
    Bullet.sound.play()
}

Bullet.actions = function(bullets, zombies, w){
    for(var i=0; i<bullets.length; i++){
       if(bullets[i].is_moving){
           var pos = new Coordinate(bullets[i].geo_data.position.get_coord(1), 
		   bullets[i].geo_data.position.get_coord(0))
	   /*Damege a zombie*/
	   for(var z=0; z<zombies.length; z++){
              var zombie_pos = new Coordinate(zombies[z].geo_data.position.get_coord(1), 
		  zombies[z].geo_data.position.get_coord(0))
	      if(pos.y <= zombie_pos.y+24 && pos.y >= zombie_pos.y-24 && pos.x <= zombie_pos.x+24 && pos.x >= zombie_pos.x-24){
                 //bullets[i].geo_data.velocity = new Vector(0, 0)
	         //bullets[i].is_moving = false
		 bullets[i].die(bullets, i, w)
		 zombies[z].live -= 20
		 if(zombies[z].live <= 0){
		    zombies[z].die(zombies, z, w)
		 }
	      }
	   }
	   /*The bullet left the board*/
           if(!(pos.y > 0 && pos.y < canvas.height && pos.x > 0 && pos.x < canvas.width)){
		 bullets[i].die(bullets, i, w)
               //bullets[i].geo_data.velocity = new Vector(0, 0)
	       //bullets[i].is_moving = false
	   }
       } //end if
    } //end for
} //end function

//Bullet.prototype.die = function (array, pos, w){
//    for(var i in w.threads){
//        if(w.threads[i].object == this){
//            w.threads.splice(i, 1)
//         }
//    }
//    array.splice(pos, 1)
//}
