if (typeof Object.extend !== 'function') {
    Object.extend = function (o) {
        function $F() {}
        $F.prototype = o;
        return new $F();
    };
}


/*
 * 
 * a = {a: 2, b:3}
 * b = Object.extend(a)
 * alert(b.a)
 * b.a++
 * alert(a.a)
 * alert(b.a)
 * 
 * RESULTS
 * 2,2,3
 * 
 * CONCLUSIONS
 * 
 * As long as the constructor $F is an inner function each time we extend/create an object 
 * we get a different object, and, thus, a different prototype. In this way we don't share the
 * prototipical attribute a and b.
 */


 
Object._$NUM_ERR = 0.000001

Object.prototype.inspect = function(sp){
	sp = sp || [""]
	var output = "{\n"
	sp.push("")
	if (sp.length > 3) 
		return ""
	for (var i in this){
		output += sp.join("\t") + i + ": \t" 
		
		if (this[i] != null)
			if (typeof(this[i]) == "object")
				output += (this[i].toSource? this[i].toSource(sp): this[i])
			else	
				output += this[i]
		else
			output += "null"
		output += " \n "
	
	}	
	sp.pop()
	output += sp.join("\t") + "}"
	return output
}

Object.prototype.keys = function(re){
	var the_keys = []
	for (var i in this)
		if (!re || re.test(i))
			if (i !== "keys")
				the_keys.push(i)
	return the_keys
}

Object.prototype.self_keys = function(re){
	var the_keys = []
	for (var i in this)
		if (!re || re.test(i))
			if (i !== "keys" && this.hasOwnProperty(i) )
				the_keys.push(i)
	return the_keys
}

Object.prototype.own_keys = function(re){
  return this.self_keys(re)
}

// Masking the prototype
Object.prototype.plain = function(){
  var pojo = new Object()
  for (var i in pojo){
    this[i] = null
  }
  return this
}

Object.prototype.clone = function(){
    var the_clone = {}
    for (var i in this)
       the_clone[i] = this[i]
    return the_clone
}

Object.prototype.eql$U = function(model){
  if (typeof(model) === "undefined" )
    return false

  /* End of support */
  return model.toSource() == this.toSource()
}
// Ruby no tiene esta clase. to_a solamente está en String y Array...
/*Object.prototype.to_a = function(){
  var that = [] 
  that.push(this)
  return that
}*/
////////////////////////////////////////////////////////////////////

function _$innerObject(that, parentName){
	var me = that
	return function(){
		var clss = arguments[0]
		var args = []
		for (var i = 1; i < arguments.length; i++) 
			args.push(arguments[i])
		function $F_innerObj(){
			if (parentName)
				this[parentName] = me;
			else
				this.that = me
			clss.apply(this, arguments);
		}
		$F_innerObj.prototype = new arguments[0]
		$F_innerObj.prototype.constructor = arguments[0]
		
		return $F_innerObj
	}
}


function implement(iface, obj){
	if (iface.iface)
		for (var i in iface.iface)
			obj.prototype[i] = iface.iface[i]
}

Object.prototype.tainted = false
Object.prototype._trust = true
Object.prototype._FROZEN = false

Object.prototype.taint  = function (){
  this.tainted = true  
}

Object.prototype.untaint  = function (){
  this.tainted = false  
}

Object.prototype.tainted$U  = function (){
  return !this.tainted
}

Object.prototype.trust  = function (){
  this._trust = true  
}

Object.prototype.untrust  = function (){
  this._trust = false  
}

Object.prototype.untrusted$U = function (){
  return !this._trust
}

Object.prototype.trusted$U = function (){
  return this._trust
}

Object.prototype.freeze = function (){
  this._FROZEN = true
}

Object.prototype.frozen$U  = function(){
  return this._FROZEN || false
}

Object.prototype.respond_to = function(function_name){
  return typeof(this[function_name]) == "function"
}

Object.prototype.respond_to$U = function(function_name){
  return this.respond_to(function_name)
}

Object.prototype.equals = function(model){
  return this == model
}

Object.prototype.eql$U = function(model){
  return this.equals(model)
}

Object.prototype.identic = function( model ){
  if (model.respond_to("valueOf"))
    return this.value_of() == model.valueOf()
  return this === model
}

Object.prototype.to_s = function (){
  return this.toString()
}

Object.prototype.to_str = function (){
  return this.to_str()
}

Object.prototype.value_of = function (){
  if (this.respond_to("valueOf") )
    return this.valueOf()
  return this.toSource()
}

Object.prototype.value = function (){
  return this.value_of()
}

Object.prototype.is_a$U = function (clss){
 return this instanceof clss 
}

Object.prototype.kind_of$U = function (clss){
  return this.is_a$U(clss)
}

Object.prototype.instance_of$U = function (clss){
  return this.constructor == clss
}

Object.prototype.method_missing = function (method, obj, params){
  obj = obj || ""
  params = params || []
  throw(new MethodMissingError(method + " missing in " + obj + "::" + this.constructor.name +". Params: " + params.join(', ') ))
}
