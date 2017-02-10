

//-------------------------------------- VARS AND FUNCS ----------------

var defineCanvas = {
  canvass: 	['A', 'B', 'C'],

	appendCanvass: function(){
		for ( i = 0 ; i < this.canvass.length ; i++){
		$('<canvas id="canvas_' + this.canvass[i] + '" class="bg_canvas"></canvas>').appendTo($('#canvas_holder'));
		}
	},
	
	bgColor: function(){
		var color = $('#bg').css('backgroundColor');
		return color;
	}
	
	
};


function drawLineB(){

var lineB = [];
lineB.push({x:1146, y:384});
lineB.push({x:1146, y:344});
lineB.push({x:1166, y:344});
lineB.push({x:1166, y:324});
lineB.push({x:1186, y:324});
lineB.push({x:1186, y:384});
lineB.push({x:1146, y:384});

//get waypoints
var vertex = calcPoints(pointScale(lineB));

//get canvas

var canvas = document.getElementById('canvas_B')
var ctx = canvas.getContext('2d');

canvas.width = $( window ).width();
canvas.height = $( window ).height();

var t = 1; //start point

var speed = 10;
//draw line
draw(vertex,ctx,t, speed);
}




function drawLineA(){

var lineA = [];

//canvas is set for a 500px by 500px grid
lineA.push({x:0 , y:200});
lineA.push({x:200 , y:0});


//get waypoints
var vertex = calcPoints(pointScale(lineA));

//get canvas

var canvas = document.getElementById('canvas_A')
var ctx = canvas.getContext('2d');

canvas.width = $( window ).width();
canvas.height = $( window ).height();

var t = 1;  //start point
//draw line
draw(vertex,ctx,t,1);
}



function pointScale(vertices){
//scale is called first so check col here
	var scalePoints = [];
  var vH = $( window ).height(); //viewport height
  var vW = $( window ).width(); 	//viewport width
  
  //based on W3 avergae settings
  var cH = 768; 						//canvas height
  var cW = 1366; 						//canvas width
  var sH = vH/cH; 							//to scale by
  var sW = vW/cW;								//to cale by  
  
  for (i = 0 ; i < vertices.length ; i++){
  	
    var bg = defineCanvas.bgColor();
    var s = vertices[i].col;
    
    if (s === undefined){
    	var colour = 'white';
    }else{
    	if (s === 'bg'){
      colour = bg;	
      }else{
      colour = s;  
    }
    }

    scalePoints.push({
    x:vertices[i].x * sW,
    y:vertices[i].y * sH,
    col:colour
    }); 
	}
	console.log(scalePoints);
  return (scalePoints)
}


function calcPoints(vertices){

	var waypoints = [];

	for (i=0 ; i < vertices.length ; i++){
    var dx = 0;
    var dy = 0;

    var wX = 0;
    var wY = 0;

    var iter = 100;

    if (i !== 0){ 
    dx = vertices[i].x - vertices[i-1].x; 
    dy = vertices[i].y - vertices[i-1].y;

    for (j=0 ; j < iter ; j++){
      wX = vertices[i-1].x + ((dx/iter)*j);
      wY = vertices[i-1].y + ((dy/iter)*j);
      
      waypoints.push({ x:wX , y:wY, col:vertices[i].col }) 
      }
    }
  }
  console.log(waypoints)
  return (waypoints);
}

//console.log(waypoints);




function draw(points,ctx,t,speed){
	
	if (speed === undefined){
		speed = 1;
	}
	
	//adjust t for completion
	if (t > points.length){
		t = points.length -1;
	}
  
	if (t < points.length - 1){
  	t = t + speed;
  	requestAnimationFrame(function(){
    	draw(points,ctx,t,speed);
    });
	}
   	ctx.beginPath();
    ctx.strokeStyle = points[t].col;
    ctx.moveTo(points[t - (speed  + 1)].x , points[t - (speed  + 1)].y);
    ctx.lineTo(points[t].x , points[t].y)
    ctx.stroke();
}




//----------------------------------------------------run time -----------------------------------------------

//creat canvases
defineCanvas.appendCanvass();

//draw lines
drawLineA();
drawLineB();
console.log(defineCanvas.bgColor());




