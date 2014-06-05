logger = document.getElementById("logger")
var w = null
var usr = null
var zombies = []                  //The aray containing the zombies
var gun_shots = []
var keys_down = {} 
var keys_up = {}
var level = 0
var cont = 0
var info = null
var number_zombies = 0

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
   usr.actions(keys_down, keys_up, w, gun_shots) 
   Bullet.actions(gun_shots, zombies, w)
   Zombie.actions(zombies, usr, w)
}

function level_info(){
   if(zombies.length <= && number_zombies == level * 5)
       level  ++ 
   else
       if(number_zombies < level * 5)
          Zombie.create_new(w, zombies, usr, level)
       //alert(zombies.length)
   if(usr.live <= 0){
       level = 0
       usr.live = 100
       for(var i=zombies.length-1; i>-1; i--)
	   zombies[i].die(zombies, i, w)
   }
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
