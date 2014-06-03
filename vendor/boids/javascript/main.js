logger = document.getElementById("logger")
var w = null
var usr = null
var zombies = []                  //The aray containing the zombies
var gun_shots = []
var keys_down = {} 
var keys_up = {}
var level = 1
var cont = 0
var info = null
function main(){
   w = new World()
   var boid_list = new WorldInterface("boid_list_content")
   w.addPort("new_boid", boid_list)

   var boid_editor = new BoidEditor("boid_properties")
   boid_list.addPort("focus_boid", boid_editor)

   /*If the position of the Zombie is the same as the Hunter, the boid doesn't work*/
    
   usr = w.new_boid_of(Hunter)   //The user

   info = document.getElementById("info_player")
   run()
      w.start()
}

function run(){
       setTimeout(run, 20)
       actions()
       level_info()
} 
 
function actions(){
   
   if(zombies.length < level * 5 )
      Zombie.create_new(w, zombies, usr)
   usr.actions(keys_down, keys_up, w, gun_shots) 
   Bullet.actions(gun_shots, zombies, w)
   Zombie.actions(zombies, usr, w)
}
function level_info(){

   var end_level = 0
   for(var i = 0; i < zombies.length; i++)
      if(!zombies[i].is_alive)
	  end_level ++
   if(end_level == zombies.length)
       level = ++ 

   info.innerHTML = "Live: " + usr.live + "<br>" + "Level: " + level
}

addEventListener("keydown", function (e) {
   	keys_down[e.keyCode] = true 
   	delete keys_up[e.keyCode] 
   	    }, false) 
   
addEventListener("keyup", function (e) {
   	keys_up[e.keyCode] = true 
   	delete keys_down[e.keyCode] 
   	    }, false)
