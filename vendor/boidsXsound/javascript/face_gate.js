FaceBoid.prototype = new Gate
FaceBoid.prototype.constructor = FaceBoid

function FaceBoid(element){
	var that = this
	this.name = element

	function initialize(){
		try{
			if(element){
				that.element = element
				that[element] = {}
				Gate.call(that, element)
				that[element].face_automata_eyes    = that.newEffect(new FaceAutomataEyes(that.device, that))
				that[element].face_automata_outline = that.newEffect(new FaceAutomataOutline(that.device, that))
				that[element].face_automata_mouth   = that.newEffect(new FaceAutomataMouth(that.device, that))
				that[element].face_automata_wifi    = that.newEffect(new FaceAutomataWifi(that.device, that))
			}
		} catch(e){
				if ($K_debug_level >= $KC_dl.DEVELOPER)
					alert("No event handlers were found.\nException: " + e.toSource())
		}
	}

	if(arguments.length)
		initialize()
}
