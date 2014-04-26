
function main(){
  var w = new World()
  var boid_list = new WorldInterface("boid_list_content")
  w.addPort("new_boid", boid_list)

  var boid_editor = new BoidEditor("boid_properties")
  boid_list.addPort("focus_boid", boid_editor)

var caco1 = w.new_boid( { colour: "green",
                 geo_data:  {
                               position: new Vector(220, 230),
                               velocity: new Vector(10, 0),
                               acceleration: new Vector(0, 0)
                            }
  
  w.start()
}
