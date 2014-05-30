logger = document.getElementById("logger")

function main(){
   var w = new World()
   var boid_list = new WorldInterface("boid_list_content")
   w.addPort("new_boid", boid_list)

   var boid_editor = new BoidEditor("boid_properties")
   boid_list.addPort("focus_boid", boid_editor)



   
   /*If the position of the Zombie is the same as the Hunter, the boid doesn't work*/
   
    
   var usr = w.new_boid_of(Hunter)   //The user

   var zombies = []                  //The aray containing the zombies
   var gun_shots = []

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
   var cuenta = 0
   function acciones(){
   
      /*If key up*/
      if (87 in keys_up)  // Player holding up
          y = 0 
      if (83 in keys_up)  // Player holding down
          y = 0 
      if (65 in keys_up)  // Player holding left
          x = 0 
      if (68 in keys_up)  // Player holding right
          x = 0 
      /*If kuy down*/
      if (87 in keys_down)  // Player holding up
          y = -20 
      if (83 in keys_down)  // Player holding down
          y = 20 
      if (65 in keys_down)  // Player holding left
          x = -20 
      if (68 in keys_down)  // Player holding right
          x = 20 
      if (32 in keys_down){
          
      gun_shots.push(w.new_boid_of(Bullet, usr))
      Zombie.create_new(w, zombies, usr) //This create 3 new zombies
          //zombies.splice(cuenta, 1)
          //alert(zombies[0].constructor.name)
          //delete(zombies[0])
          // Zombie.create_new(w, zombies, usr) //This create 3 new zombies
          /*----------Dead Zombie Test---------------------
          /  //alert(zombies.length)
          /  //alert(w.get_boids()[0])
          /  //for(var h in usr)
          /    //  delete usr[h]
          /  //alert(j)
          /   //alert(usr.geo_data.position.get_coord(0))
          /
          /  //zombies.splice(0,1)  
          /  //Zombie.crete_new(w, zombies, usr)
          /  //alert(zombies.length)
          /-----------------------------------------------*/
      }


//         if(b.geo_data.position.get_coord(0) - usr.geo_data.position.get_coord(0) < 1 &&
//		    b.geo_data.position.get_coord(1) - usr.geo_data.position.get_coord(1) < 1)
//		//alert("te cogio" + b.geo_data.position.get_coord(0)  + " " + usr.geo_data.position.get_coord(0))
//		//b.vel_max = 0
//		b.live -= 101
//		    if(b.live < 0){
//			b.vel_max = 0
//			Zombie.prototype.change(b)
//		    }
   usr.geo_data.velocity = new Vector(x, y)
   }
   setInterval(acciones,30) 

   w.start()
}
