Character.prototype = new Boid
Character.prototype.constructor = Character

var TDirection = {north: 0, northeast: 45, east: 90, southeast: 135, south: 180, southwest: 225, west: 270, northwest: 315}
function Character(){
  this.live = 100
  this.movimiento = 0
  this.is_alive = false
  this.direction = TDirection.north
}
var cont = 0

Character.prototype.draw = function(ctx){
    if(!this.is_alive)
	return
    var p = this.geo_data.position;
    var v = this.geo_data.velocity;
    var a = this.geo_data.acceleration;
  
  ctx.fillStyle = this.colour
  ctx.strokeStyle = "black"
  ctx.beginPath();
  ctx.arc(p.get_coord(0), p.get_coord(1), 10, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(p.get_coord(0), p.get_coord(1), 12, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.stroke()

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
      this.movimiento ++
  this.movimiento %= 7

  ctx.drawImage(this.img, this.movimiento*49.125, 0, 48, 48, -24,-24, 48,48)
  ctx.restore()

}
