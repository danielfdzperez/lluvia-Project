/**
 * @classDescription Creates a Boid
 *
 * @return {Boid}
 * @constructor
*/

//require('Mathematics')

Boid.prototype.constructor = Boid

function Boid(geo_data,colour){

  var that = this
  
  function initialize(){
    that.brain = new Brain(that)
    that.last_heading = new Vector(0, 1)
    that.geo_data = geo_data || { 
      position: new Vector(0,0), 
      velocity: new Vector(0,0), 
      acceleration: new Vector(0,0) 
      }
    that.vel_max = 50
    that.my_world = null
    that.last_time = that.current_time = null
    that.colour = colour || "blue"
    that.mass = 2
    that.vision = 100

    that.force_limits = {
      thrust: 20,
      steering: 50,
      braking: 70
    }
   }
   
   if (arguments.length)
     initialize()
    
}

Boid.prototype.position = function(){
  if (arguments.length == 0)
    return this.geo_data.position.get_coord()
  this.geo_data.position = arguments[0]
}

Boid.prototype.velocity = function(){
  if (arguments.length == 0)
    return this.geo_data.velocity.get_coord()
  this.geo_data.velocity = arguments[0]
}

Boid.prototype.acceleration = function(){
  if (arguments.length == 0)
    return this.geo_data.acceleration.get_coord()
  this.geo_data.acceleration = arguments[0]
}

Boid.prototype.start = function(date){ 
  this.last_time = this.current_time = date
}

Boid.prototype.delta_t = function(){ 
   return (this.current_time.getTime() - this.last_time.getTime()) / 1000; 
}

Boid.prototype.update_physics = function(current_time){
  this.last_time = this.current_time
  this.current_time = current_time
  this.geo_data.acceleration = this.requested_acceleration()
  this.geo_data.velocity = integrate(this.geo_data.velocity, this.geo_data.acceleration, this.delta_t() )
  this.geo_data.position = integrate(this.geo_data.position, this.geo_data.velocity, this.delta_t() )
}

Boid.prototype.run = function(current_time){
  if (!(current_time instanceof Date))
    return
  current_time = current_time || new Date()
  this.update_physics(current_time)
}

Boid.prototype.draw = function(ctx){

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

  if (this.focused){
    ctx.strokeStyle = "red"
    ctx.beginPath();
    ctx.arc(p.get_coord(0), p.get_coord(1), 18, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.stroke()
  }


  /* Speed */
  ctx.strokeStyle = "black"  
  ctx.beginPath();
  ctx.moveTo(p.get_coord(0), p.get_coord(1))
  ctx.lineTo(p.get_coord(0) + v.get_coord(0), p.get_coord(1) + v.get_coord(1))
  ctx.closePath();
  ctx.stroke()
  
  /* Acceleration */
  ctx.strokeStyle = "red"  
  ctx.beginPath();
  ctx.moveTo(p.get_coord(0), p.get_coord(1))
  ctx.lineTo(p.get_coord(0) + a.get_coord(0), p.get_coord(1) + a.get_coord(1))
  ctx.closePath();
  ctx.stroke()
  /*
  if (this.target && this.target != this){
  /* Displacement to target 
  ctx.beginPath();
  ctx.moveTo(p.get_coord(0), p.get_coord(1))
  ctx.lineTo(p.get_coord(0) + this.target_at().get_coord(0), p.get_coord(1) + this.target_at().get_coord(1))
  ctx.closePath();
  ctx.stroke()

  if (this.target != this){
    var p_target = this.target_data().position
  /*
    // Desired Velocity 
    ctx.strokeStyle = "black"  
    ctx.beginPath();
    ctx.moveTo(p.get_coord(0), p.get_coord(1))
    ctx.lineTo(p.get_coord(0) + this.desired_velocity().get_coord(0), p.get_coord(1) + this.desired_velocity().get_coord(1))
    ctx.closePath();
    ctx.stroke()
  
   
   // Approach distance
    ctx.strokeStyle = "black"
    ctx.beginPath();
    ctx.arc(p_target.get_coord(0), p_target.get_coord(1), this.approach_distance, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.stroke();

    // Arrival distance
    var arrival_distance = this.target_at().module()
    if (this.approach_distance > arrival_distance ){
      ctx.strokeStyle = "red"
      ctx.beginPath();
      ctx.arc(p_target.get_coord(0), p_target.get_coord(1), arrival_distance, 0, Math.PI*2, true); 
      ctx.closePath();
      ctx.stroke();
    }
    
    }
  }
  */
}

Boid.prototype.heading = function(){
  var _heading
  try{
    _heading = this.geo_data.velocity.unit() 
    this.last_heading = _heading || this.last_heading
  } catch(err){
    _heading = this.last_heading 
  }
  return _heading 
}

Boid.prototype.locale = function(){  // The local coordinate system expressed in the global cs.
  var u = this.heading()
  if (isNaN(u.get_coord(0)) || isNaN(u.get_coord(1)))
    u = new Vector(1,0)
  var v = new Vector(-u.Coord[1], u.Coord[0])
  return [u,v]
}

Boid.prototype.globale = function(){  
  var aux = this.heading()
  if (isNaN(aux.get_coord(0)) || isNaN(aux.get_coord(1)))
    aux = new Vector(1,0)
  var u = new Vector(aux.Coord[0], -aux.Coord[1])
  var v = new Vector(-u.Coord[1], u.Coord[0])
  return [u,v]
}

Boid.prototype.localize = function(){
  var v = new Vector(1,1,1)
  Vector.apply(v, arguments) // Create a Vector with whatever arguments that have been passed.
  var l = this.locale()
  return new Vector( l[0].dot(v), l[1].dot(v) )
}

Boid.prototype.globalize = function(){
  var v = new Vector(1,1,1)
  Vector.apply(v, arguments) // Create a Vector with whatever arguments that have been passed.
  var l = this.globale()
  return new Vector( l[0].dot(v), l[1].dot(v) )
}

Boid.prototype.visible_objects = function(){
  return this.my_world.visible_for(this.geo_data.position, this.vision)
}

Boid.prototype.requested_acceleration = function(){
  return this.clip(this.brain.desired_acceleration())
}

Boid.prototype.clip = function(){
  var v = new Vector(1,1,1)
  Vector.apply(v, arguments)
  v = this.localize(v)
  if (v.Coord[0] > this.force_limits.thrust)
    v.Coord[0] = this.force_limits.thrust
  if (v.Coord[0] < -this.force_limits.brake)
    v.Coord[0] = -this.force_limits.brake    
  if (v.Coord[1] > this.force_limits.steering)
    v.Coord[1] = this.force_limits.steering
  if (v.Coord[1] < -this.force_limits.steering)
    v.Coord[1] = -this.force_limits.steering    
  return this.globalize(new Vector(v.Coord[0], v.Coord[1])) // Ensure the module is correct
}


Boid.prototype.set_target = function(boid){
  this.target = boid || new Boid({
                          position:      new Vector(1,1),
                          velocity:      new Vector(1,1),
                          acceleration:  new Vector(1,1)
      }, "red")
  return boid
}

Boid.prototype.target_data = function(){
  return this.target ? this.target.geo_data : null
}

function integrate(primitive, diff, delta){
  return primitive.add( diff.scale( delta ) )
}


