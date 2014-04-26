logger = document.getElementById("logger")

function main(){
  var w = new World()
  var boid_list = new WorldInterface("boid_list_content")
  w.addPort("new_boid", boid_list)

  var boid_editor = new BoidEditor("boid_properties")
  boid_list.addPort("focus_boid", boid_editor)

   var caco1 = w.new_boid( { colour: "red",
                 geo_data:  {
                               position: new Vector(300, 180),
                               velocity: new Vector(60, 0),
                               acceleration: new Vector(0, 0)
                            }
   })

var caco2 = w.new_boid( { colour: "red",
                 geo_data:  {
                               position: new Vector(100, 100),
                               velocity: new Vector(0, 60),
                               acceleration: new Vector(0, 0)
                            }
   })

var policia = w.new_boid({
         colour: "blue",
	})
         policia.vel_max = 100
	 policia.brain.activate('seek')
	 policia.brain.get_behavior('seek').set_target(caco1)

	 function persecucion(){
	     var policia_caco1 = (caco1.geo_data.position.get_coord(0) - policia.geo_data.position.get_coord(0))
	     var policia_caco2 = (caco2.geo_data.position.get_coord(1) - policia.geo_data.position.get_coord(1))
		 if(policia_caco1 < 0)
		     policia_caco1 *= -1
	         if(policia_caco2 < 0)
		     policia_caco2 *= -1

	     if( caco1.geo_data.position.get_coord(0) >= 400)
		 caco1.geo_data.velocity = new Vector(-60,0);

		     if(caco1.geo_data.position.get_coord(0) <= 10)
			 caco1.geo_data.velocity = new Vector(60,0);

		     if( caco2.geo_data.position.get_coord(1) >= 400)
			 caco2.geo_data.velocity = new Vector(0,-60)
                     if( caco2.geo_data.position.get_coord(1) <= 10)
			 caco2.geo_data.velocity = new Vector(0,60)


			     if(policia_caco1 < policia_caco2)
				 policia.brain.get_behavior('seek').set_target(caco1)
			     else
				 policia.brain.get_behavior('seek').set_target(caco2)
	 }
	 setInterval(persecucion,30);

	 w.start()
}
