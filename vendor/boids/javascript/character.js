Character.prototype = new Boid
Character.prototype.constructor = Character

function Character(){
  this.live = 100
  this.movimiento = 0
}

Character.prototype.draw = function(ctx){
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
  
  this.movimiento %= 7
  
  if(v.get_coord(0) == 0 && v.get_coord(1) < 0){
      this.movimiento ++
          ctx.rotate(0*Math.PI / 180)
  }

  if(v.get_coord(0) > 0 && v.get_coord(1) < 0){
      this.movimiento ++
	  ctx.rotate(45*Math.PI / 180)
  }

  if(v.get_coord(0) > 0 && v.get_coord(1) == 0){
      this.movimiento ++
	  ctx.rotate(90*Math.PI / 180)
  }

  if(v.get_coord(0) > 0 && v.get_coord(1) > 0){
      this.movimiento ++
	  ctx.rotate(135*Math.PI / 180)
  }

  if(v.get_coord(0) == 0 && v.get_coord(1) > 0){
      this.movimiento ++
	  ctx.rotate(180*Math.PI / 180)
  }

  if(v.get_coord(0) < 0 && v.get_coord(1) > 0){
      this.movimiento ++
	  ctx.rotate(225*Math.PI / 180)
  }

  if(v.get_coord(0) < 0 && v.get_coord(1) == 0){
      this.movimiento ++
	  ctx.rotate(270*Math.PI / 180)
  }

  if(v.get_coord(0) < 0 && v.get_coord(1) < 0){
      this.movimiento ++
	  ctx.rotate(315*Math.PI / 180)
  }


  ctx.drawImage(this.img, this.movimiento*49.125, 0, 48, 48, -24,-24, 48,48)
      ctx.restore()
}
