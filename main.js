canvas = document.querySelector("canvas");
ctx =  canvas.getContext("2d");

aumenta=true;

var bola = {
	raio: 10,
	posx: 480,
	posy: 480,
	color: '#0f0',

}

//desenhando o circulo
function draw (){  
ctx.clearRect(0, 0,canvas.width, canvas.height);
ctx.beginPath();
ctx.fillStyle=bola.color;
ctx.arc(bola.posx, bola.posy, bola.raio,100, Math.PI*2, true);
ctx.closePath();
ctx.fill();
}


function update (){
	//aumenta o raio da bola
	if (aumenta){ 
	bola.raio +=2;
	}else if(!aumenta){
		bola.raio -=2;
	}
	if (bola.raio*2 > canvas.height){
		aumenta=false;
		//bola.raio =10;
	}
	if(bola.raio < 10){
		aumenta=true;
	}
	
}

//dá a dinâmica do game
function loop (){
	window.requestAnimationFrame(loop, canvas);
	draw();	
	update();
}

loop();