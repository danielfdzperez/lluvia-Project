logger = document.getElementById("logger")

function main(){
  var w = new World()
  var boid_list = new WorldInterface("boid_list_content")
  w.addPort("new_boid", boid_list)

  var boid_editor = new BoidEditor("boid_properties")
  boid_list.addPort("focus_boid", boid_editor)
/*
   var player = w.new_boid( { colour: "silver",
                 geo_data:  {
                               position: new Vector(180, 180),
                               velocity: new Vector(0, 0),
                               acceleration: new Vector(0, 0)
                            }
   })

*/


/*
var zombie = []
for(var i=0; i<6; i++)
     zombie.push( w.new_boid( function(config) {
       config.colour   = "green"
       config.vel_max = 50
       config.geo_data.position = new Vector(50+i*80, 0)
       config.brain.activate('seek')
       config.brain.get_behavior('seek').set_target(player)
       return config
     }) )
*/
  
Zombie.prototype = new Boid
Zombie.prototype.constructor = Zombie

function Zombie(){

}

Zombie.prototype.draw = function(ctx){

}


var aleatorio = Math.floor(Math.random()*2+1)

switch(aleatorio){

case 1: 
var player1 = w.new_boid( { 
                 colour: "red",
                 
                 geo_data:  {
                               position: new Vector(180, 180),
                               velocity: new Vector(0, 100),
                               acceleration: new Vector(0, 0)
                            },
                            config.brain.activate("")
                            
   })
player1.vel_max = 20
player1.brain.activate("flee")

var player2 = w.new_boid( { colour: "blue",
                 geo_data:  {
                               position: new Vector(300, 300),
                               velocity: new Vector(0, -100),
                               acceleration: new Vector(0, 0)
                            }
                            
   })

player2.brain.activate('seek')
player2.vel_max = 35


player2.brain.get_behavior('seek').set_target(player1)
player1.brain.get_behavior("flee").set_target(player2)


   break;

case 2: 

var player1 = w.new_boid( { colour: "red",
                 geo_data:  {
                               position: new Vector(180, 180),
                               velocity: new Vector(0, 0),
                               acceleration: new Vector(0, 0)
                            }
                            
   })

player1.vel_max = 35

var player2 = w.new_boid( { colour: "blue",
                 geo_data:  {
                               position: new Vector(300, 300),
                               velocity: new Vector(0, 0),
                               acceleration: new Vector(0, 0)
                            }
                            
   })
player2.vel_max = 20

player1.brain.activate('seek')
player2.brain.activate("flee")


player1.brain.get_behavior('seek').set_target(player2)
player2.brain.get_behavior("flee").set_target(player1)






break;

}


   w.start()
}
