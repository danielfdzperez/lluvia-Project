logger = document.getElementById("logger")
var w = null
var usr = null
var zombies = []                  //The aray containing the zombies
var gun_shots = []
var keys_down = {} 
var keys_up = {}
var level = 1
var cont = 0

function main(){
   w = new World()
   var boid_list = new WorldInterface("boid_list_content")
   w.addPort("new_boid", boid_list)

   var boid_editor = new BoidEditor("boid_properties")
   boid_list.addPort("focus_boid", boid_editor)

   /*If the position of the Zombie is the same as the Hunter, the boid doesn't work*/
    
   usr = w.new_boid_of(Hunter)   //The user

   run()
   
   w.start()
}

function run(){
       setTimeout(run, 20)
       actions()
} 

function actions(){
   
   if(zombies.length < level * 5 )
      Zombie.create_new(w, zombies, usr) 
   usr.actions(keys_down, keys_up, w, gun_shots)  
   Bullet.actions(gun_shots, zombies)
   Zombie.actions(zombies, usr)
}

addEventListener("keydown", function (e) {
   	keys_down[e.keyCode] = true 
   	delete keys_up[e.keyCode] 
   	    }, false) 
   
addEventListener("keyup", function (e) {
   	keys_up[e.keyCode] = true 
   	delete keys_down[e.keyCode] 
   	    }, false)
