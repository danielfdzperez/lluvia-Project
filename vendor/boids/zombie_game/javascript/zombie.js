window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {

    juego()

}
function juego(){
var canvas = null 
var ctx = null
var x = 20
var y = 20

var derecha = 39
var izquierda = 37
var abajo = 40
var arriba = 38

var direccion = 0
var tecla_presionada = {}
var tecla_suelta = {}
var animacion = 0

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');


    var counter=0;
    var tileSheet=new Image();
    tileSheet.addEventListener('load', eventSheetLoaded , false);
    //tileSheet.src="http://orm-other.s3.amazonaws.com/html5canvasexamplecontent/chapter4/ships.png";
    tileSheet.src="images/zombie_sprite.png"


    function eventSheetLoaded() {
	Inicio();
    }
    function Inicio(){
	Bucle();
    }
    function Bucle(){
	setTimeout(Bucle,200)
	    acciones()
	    pintar_tablero(x, y)
    }

function acciones(){
    /*
    if(tecla_presionada == arriba)
	direccion = 0
    if(tecla_presionada == derecha)
	direccion = 1
    if(tecla_presionada == abajo)
	direccion = 2
    if(tecla_presionada == izquierda)
	direccion = 3

	    if(direccion == 0)
		y -= 10
	    if(direccion == 1){
		x += 10
		animacion ++
	    }
	    if(direccion == 2)
		y += 10
	    if(direccion == 3)
		x -= 10
*/

/*
    if (38 in tecla_suelta ) { // Player holding up
	y += 0;

    }
    if (40 in tecla_suelta) { // Player holding down
	y += 0;
			      }
    if (37 in tecla_suelta) { // Player holding left
	x += 0;
    }
    if (39 in tecla_suelta) { // Player holding right
	x += 0;
    }
*/
    if (38 in tecla_presionada) { // Player holding up
	y -= 20;
    }
    if (40 in tecla_presionada) { // Player holding down
	y += 20;
    }
    if (37 in tecla_presionada) { // Player holding left
	x -= 20;
    }
    if (39 in tecla_presionada) { // Player holding right
	x += 20;
	animacion ++
    }

		    if(x > canvas.width)
			x = 0
		    if(y > canvas.height)
			y = 0
		    if(x < 0)
			x = canvas.width
		    if(y < 0)
			y = canvas.height

}

function pintar_tablero(x, y){
   ctx.fillStyle='#FFF'
       var mov
       if(animacion > 3)
	    animacion = 0
       switch(animacion){
	   case 0:
	       mov = 0
	       break
	   case 1:
	       mov = 50
	       break
	   case 2:
	       mov = 104
	       break
	   case 3:
	       mov=166
		   break
       }

	ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(tileSheet, mov, 80, 50, 80, x, y, 60,80)
	if(animacion > 3)
	    animacion = 0
}






/*
document.addEventListener('keydown', function(evt){
       tecla_presionada = evt.keyCode
       tecla_suleta = false
},false)
document.addEventListener('keyup', function(evt){
       tecla_suleta = true
},false)
*/
addEventListener("keydown", function (e) {
	tecla_presionada[e.keyCode] = true;
	delete tecla_suelta[e.keyCode];
	}, true);

addEventListener("keyup", function (e) {
	tecla_suelta[e.keyCode] = true;
	delete tecla_presionada[e.keyCode];
	}, false);
}
