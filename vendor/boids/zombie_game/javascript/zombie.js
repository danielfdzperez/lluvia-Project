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
    var counter=0;
    var tileSheet=new Image();
window.addEventListener('load', inicio, false);	

    function inicio(){
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        tileSheet.src="images/zombie_sprite.png"
	bucle();
    }
    function bucle(){
	setTimeout(bucle,200)
	    acciones()
	    pintar_tablero()
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
	if (tecla_presionada[38]) { // Player holding up
	    y -= 20;
	    tecla_presionada[38] = false
	}
	if (tecla_presionada[40]) { // Player holding down
	    y += 20;
	    tecla_presionada[40] = false
	}
	if (tecla_presionada[37]) { // Player holding left
	    x -= 20;
	    tecla_presionada[37] = false
	}
	if (tecla_presionada[39]) { // Player holding right
	    x += 20;
	    animacion ++
	    tecla_presionada[39] = false
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

    function pintar_tablero(){
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
	    //delete tecla_suelta[e.keyCode];
	    }, true);

    /*addEventListener("keyup", function (e) {
	    tecla_suelta[e.keyCode] = true;
	    tecla_presionada[e.keyCode] = false;
	    }, false);*/
