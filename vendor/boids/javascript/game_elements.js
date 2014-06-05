GameElements.prototype = new Boid
GameElements.prototype.constructor = GameElements

function GameElements(direction, img_width, img_height, number_sprites, real_width, posx, posy, velx, vely, accx, accy){
  this.direction      = direction
  this.img_width      = img_width
  this.img_height     = img_height
  this.number_sprites = number_sprites
  this.real_width     = real_width       //individual with of image, whidth spaces.
  this.pos = new Coordinate(posy, posx)
  this.vel = new Coordinate(vely, velx)
  this.acc = new Coordinate(accy, accx)
}

GameElements.prototype.draw = function(ctx){
    var p = this.geo_data.position;
    var v = this.geo_data.velocity;
    var a = this.geo_data.acceleration;
    this.movement = this.movement || 0
    var img = new Image()
  
  //ctx.fillStyle = this.colour
  //ctx.strokeStyle = "black"
  //ctx.beginPath();
  //ctx.arc(p.get_coord(0), p.get_coord(1), 10, 0, Math.PI*2, true);
  //ctx.closePath();
  //ctx.fill();

  //ctx.beginPath();
  //ctx.arc(p.get_coord(0), p.get_coord(1), 12, 0, Math.PI*2, true);
  //ctx.closePath();
  //ctx.stroke()

  //if (this.focused){
  //    ctx.strokeStyle = "red"
  //    ctx.beginPath();
  //    ctx.arc(p.get_coord(0), p.get_coord(1), 18, 0, Math.PI*2, true);
  //    ctx.closePath();
  //    ctx.stroke()
  //}

  //// todo: Move this to another class

  ///* Speed */
  //ctx.strokeStyle = "black"
  //ctx.beginPath();
  //ctx.moveTo(p.get_coord(0), p.get_coord(1))
  //ctx.lineTo(p.get_coord(0) + v.get_coord(0), p.get_coord(1) + v.get_coord(1))
  //ctx.closePath();
  //ctx.stroke()

  ///* Acceleration */
  //ctx.strokeStyle = "red"
  //ctx.beginPath();
  //ctx.moveTo(p.get_coord(0), p.get_coord(1))
  //ctx.lineTo(p.get_coord(0) + a.get_coord(0), p.get_coord(1) + a.get_coord(1))
  //ctx.closePath();
  //ctx.stroke()

  ctx.save()
  ctx.translate(p.get_coord(0), p.get_coord(1))
  
  
  if(v.get_coord(0) == 0 && v.get_coord(1) < 0){
      this.direction = TDirection.north
  }

  if(v.get_coord(0) > 0 && v.get_coord(1) < 0){
      this.direction = TDirection.northeast
  }

  if(v.get_coord(0) > 0 && v.get_coord(1) == 0){
      this.direction = TDirection.east
  }

  if(v.get_coord(0) > 0 && v.get_coord(1) > 0){
      this.direction = TDirection.southeast
  }

  if(v.get_coord(0) == 0 && v.get_coord(1) > 0){
      this.direction = TDirection.south
  }

  if(v.get_coord(0) < 0 && v.get_coord(1) > 0){
      this.direction = TDirection.southwest
  }

  if(v.get_coord(0) < 0 && v.get_coord(1) == 0){
      this.direction = TDirection.west
  }

  if(v.get_coord(0) < 0 && v.get_coord(1) < 0){
      this.direction = TDirection.northwest
  }

  ctx.rotate(this.direction*Math.PI / 180)
  if(v.get_coord(0) > 0 || v.get_coord(1) > 0 || v.get_coord(0) < 0 || v.get_coord(1) < 0)
      this.movement ++
  this.movement %= this.number_sprites

  img = eval(this.constructor.name + ".img")
  if(this.constructor.name == 'Zombie')
      Zombie.sound.play()

  ctx.drawImage(img, this.movement*this.real_width, 0, this.img_width, this.img_height, 
	        -this.img_width/2, -this.img_height/2, this.img_width,this.img_height)
  ctx.restore()

  //if(this.constructor.name == 'Hunter')
  //  ctx.fillText('Life: '+ this.life ,150,0)

}

GameElements.prototype.configuration = function(){
    return{ 
             geo_data:{
                         position:     new Vector(this.pos.x, this.pos.y),
                         velocity:     new Vector(this.vel.x, this.vel.y),
                         acceleration: new Vector(this.acc.x, this.acc.y)
		      }
   }
}

/*
 *Esta función recorre el array del mundo (threads) y busca el objeto que debe matar.
 *El array es (El array del main donde están los boids tambien).
 *La pos es la posición del objeto en el array.
 */
GameElements.prototype.die = function (array, pos, world){
    for(var i in world.threads){
        if(world.threads[i].object == this){
            world.threads.splice(i, 1)
         }
    }
    array.splice(pos, 1)
}

/*GameElements.prototype.sound = function(){
    
}*/
