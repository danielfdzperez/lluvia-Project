Bullet.prototype = new Boid
Bullet.prototype.constructor = Bullet

var TDirection = {north: 0, northeast: 45, east: 90, southeast: 135, south: 180, southwest: 225, west: 270, northwest: 315}
function Bullet(user){
    var posy = user.geo_data.position.get_coord(0)
    var posx = user.geo_data.position.get_coord(1)
    var velx;
    var vely;
    switch(user.direction){
	case TDirection.north:
	    vely = 0
	    velx = -10
	    break
        case TDirection.east:
	    vely = 10
	    velx = 0
	    break

    }
    this.config = { 
                 colour: "black",
                 geo_data:  {
                               position: new Vector(posy, posx + 50),
                               velocity: new Vector(0, 0),
                               acceleration: new Vector(0, 0)
                            }
    }
    Boid.call(this, this.config)
}
