logger = document.getElementById("logger")

function main(){
  var w = new World()
  var boid_list = new WorldInterface("boid_list_content")
  w.addPort("new_boid", boid_list)

  var boid_editor = new BoidEditor("boid_properties")
  boid_list.addPort("focus_boid", boid_editor)

var usr = w.new_boid( { colour: "black",
                 geo_data:  {
                               position: new Vector(200, 200),
                               velocity: new Vector(0, 0),
                               acceleration: new Vector(0, 0)
                            }
   })


var b = w.new_boid( function(config){
 	config.colour = "purple"
 	config.vel_max = 20
    config.brain.activate('seek')
    config.brain.get_behavior('seek').set_target(usr)
 })


// var c = w.new_boid_of_zombie(Zombie, function(config){
// 	config.colour = "purple"
// })

var b = w.new_boid(new Zombie())
b.vel_max = 20
b.brain.activate('seek')
b.brain.get_behavior('seek').set_target(usr)

var keys_down = {} 
var keys_up = {} 

addEventListener("keydown", function (e) {
	keys_down[e.keyCode] = true 
	delete keys_up[e.keyCode] 
	    }, false) 

addEventListener("keyup", function (e) {
	keys_up[e.keyCode] = true 
	delete keys_down[e.keyCode] 
	    }, false) 



    var x= usr.geo_data.velocity.get_coord(0) 
    var y= usr.geo_data.velocity.get_coord(1) 

    function persecucion(){

            if (87 in keys_up)  // Player holding up
		  y = 0 
	    if (83 in keys_up)  // Player holding down
		  y = 0 
	    if (65 in keys_up)  // Player holding left
		  x = 0 
	    if (68 in keys_up)  // Player holding right
		  x = 0 

	    if (87 in keys_down)  // Player holding up
		  y = -20 
	     
	    if (83 in keys_down)  // Player holding down
		  y = 20 
	     
	    if (65 in keys_down)  // Player holding left
		  x = -20 
	     
	    if (68 in keys_down)  // Player holding right
		  x = 20 

         if(b.geo_data.position.get_coord(0) - usr.geo_data.position.get_coord(0) < 1 &&
		    b.geo_data.position.get_coord(1) - usr.geo_data.position.get_coord(1) < 1)
		//alert("te cogio" + b.geo_data.position.get_coord(0)  + " " + usr.geo_data.position.get_coord(0))
		//b.vel_max = 0
		b.live -= 101
		    if(b.live < 0){
			b.vel_max = 0
			Zombie.prototype.change(b)
		    }
	    usr.geo_data.velocity = new Vector(x, y)
	 }
	 setInterval(persecucion,30) 

	 w.start()
}
