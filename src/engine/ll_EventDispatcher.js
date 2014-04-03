/**
 * @class EventDispatcher
 * @extends ThreadAutomata
 *
 * Description.
 *
 * @constructor
 * Creates a EventDispatcher.
 *
 * @param {} lookup 
 *
 */

EventDispatcher.prototype = new ThreadAutomata
EventDispatcher.prototype.constructor = EventDispatcher

function EventDispatcher(lookup){
	// Private static vars
	var that = this; // Class reference for static functions
	this.ids   = 0
	this.ports = {
		 // List event listeners. "app_down": []
	}

	// Public vars
	this.inqueue = []
	this.clss = that	// Reference for static members to be used inside instances

	// Privileged methods
	this.getId = function(){return ++that.ids;}

	// Initialization
	lookup.add(this)
}

/**
 * @method enqueue
 * 
 * Description
 * 
 * @param {Object} mssg Message object shifted from the message queue.
 *
 * @return {Number} mssg.received.id Number of received message
 *
 */
EventDispatcher.prototype.enqueue = function(mssg){
	var ev = this
	mssg.received = {id: ev.getId(), time: new Date()};
	this.inqueue.push(mssg)
	return mssg.received.id
}

/**
 * @method addPort
 *
 * Adds an specific event to the selected device.
 *
 * @param {Object} event Event generated
 * @param {Object} device Device to be added to the ports array
 *
 */
EventDispatcher.prototype.addPort = function (event, device){
	if (this.ports[event])
		this.ports[event].push(device)
}

/**
 * @method joinPorts
 * 
 * Description
 *
 * @param {Array} listArray 
 */
EventDispatcher.prototype.joinPorts = function (listArray){
	for (var i=0; i<listArray.length; i++)
		this.ports[listArray[i]] = []
}

/**
 * @method delPort
 *
 * Description.
 *
 * @param {Object} event Event generated
 * @param {Object} device Device to be added to the ports array
 *
 */
EventDispatcher.prototype.delPort = function (event, device){
	if (this.clss.ports[event])
		for (var i=0; i<this.clss.ports.length; i++)
			if (this.clss.ports[i] === device)
				this.clss.ports[i].splice(i,1)
}

/**
 * @method fireEvent
 *
 * Notifies to all the listeners that this device has generated an event.
 *
 * @param {Object} event Event generated
 */
EventDispatcher.prototype.fireEvent = function(event){
	if (this.clss.ports[event.name])
		for (var i=0; i<this.clss.ports[event.name].length; i++)
			this.clss.ports[event.name][i](event);
}

/**
 * @method shift
 * 
 * Description
 * 
 * @return {Boolean} true Confirms removal
 */
EventDispatcher.prototype.shift = function(){ //attend the inqueue
	for (var i=0; i<this.inqueue.length; i++)
		try {
			var mssg = this.inqueue[i]
			if (mssg.status[mssg.current] === "closed")
				this.inqueue.splice(i, 1)
			if (this.inqueue[i]) {
				mssg = this.inqueue[i]
				if (mssg.status[mssg.current] === "sent") {
					this.device.attend(arguments[0], mssg)
					mssg.current++
				}
			}
		} catch (e) {
			if ($K_debug_level >= $KC_dl.PROGRAMMER)
			   alert("No event handler for message. \nException: " + e.toSource())
		}
	return true;
}

/**
 * @method 
 * 
 * Description
 * 
 * @return {}
 */
EventDispatcher.prototype.run = function(){
	return shift.apply(this, arguments)
}
