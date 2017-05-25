// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


var canvas = document.getElementById('underline');
var context = canvas.getContext('2d');
	
	
var prog = 0;
var fps = 60;
var tO = $('#title_text h1');
//console.log(tO.width());
var titleWidth = tO.width();


//console.log(titleWidth);

function drawUnderline(reAni) {
	
	
	if (reAni === false){
		prog = 100;
		//cant animate if pog is = 100;
	}
	
	//console.log('prog = ' + prog);
	if (prog < 100){
		setTimeout(function() {

			
			requestAnimationFrame(drawUnderline);
			// Drawing code goes here
			
			//set heights and width
			canvas.height = 50;
			canvas.width = tO.width();
			
			//console.log('tO left = ' + tO.position().left);
			
			context.clearRect(0, 0, canvas.width, canvas.height);
			//begin path to left
			context.beginPath();
			context.moveTo( canvas.width/2 , 0 );
			context.lineTo( canvas.width/2 - (canvas.width/2 * prog/100), 0);	
			context.strokeStyle = 'white';
			context.stroke();

			//begin path to right
			context.beginPath();
			context.moveTo( canvas.width/2 , 0 );
			context.lineTo( canvas.width/2 + (canvas.width/2 * prog/100), 0);	
			context.strokeStyle = 'red';
			context.stroke();

			prog = prog+2;
			//console.log('still drawing');
			
			}, 1000 / fps);
		}
	}
drawUnderline();
 
 		
 
 
 
 
 
 
 
 
 
 
 
 
 