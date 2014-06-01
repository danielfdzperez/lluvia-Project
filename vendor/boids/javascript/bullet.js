Bullet.prototype = new GameElements
Bullet.prototype.constructor = Bullet

var TDirection = {north: 0, northeast: 45, east: 90, southeast: 135, south: 180, southwest: 225, west: 270, northwest: 315}
function Bullet(user){
    var pos = new Coordinate(user.geo_data.position.get_coord(1), user.geo_data.position.get_coord(0))
    GameElements.call(this, "images/bullet.png", user.direction, 6, 11, 1, 6, "sounds/shot.mp3", pos.x, pos.y)
    this.is_moving = true
    switch(this.direction){
	case TDirection.north:
	    this.pos.y += -20
	    this.vel.y  = -30
	    this.vel.x  =   0
	    break
	case TDirection.northeast:
	    this.pos.y += -20
	    this.pos.x +=  20
	    this.vel.y  = -30
	    this.vel.x  =  30
	    break
        case TDirection.east:
	    this.pos.x +=  20
	    this.vel.y  =   0
	    this.vel.x  =  30
	    break
        case TDirection.southeast:
	    this.pos.y +=  20
	    this.pos.x +=  20
	    this.vel.y  =  30
	    this.vel.x  =  30
	    break
        case TDirection.south:
	    this.pos.y +=  20
	    this.vel.y  =  30
	    this.vel.x  =   0
	    break
        case TDirection.southwest:
	    this.pos.y +=  20
	    this.pos.x += -20
	    this.vel.y  =  30
	    this.vel.x  = -30
	    break
        case TDirection.west:
	    this.pos.x += -20
	    this.vel.y  =   0
	    this.vel.x  = -30
	    break
        case TDirection.northwest:
	    this.pos.y += -20
	    this.pos.x += -20
	    this.vel.y  = -30
	    this.vel.x  = -30
	    break
    }
    Boid.call(this, this.configuration(this.pos.x, this.pos.y, this.vel.x, this.vel.y))
    this.sound.play()
}
