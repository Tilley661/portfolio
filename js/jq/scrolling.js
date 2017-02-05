var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
var contPos = 0;
 
 
 var myFun = function(e){
	var evt=window.event || e //equalize event object
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta
	var a = 40;			//distance to move
	var toMove = $('#content');
	
	if (delta > 0){
		toMove.css({
			left: '+=' + a + 'px'
		});
	}else{
				toMove.css({
			left: '-=' + a + 'px'
		});
	}
	contPos = toMove.offset().left; // stor in global for future ref
 }
 
 
if (document.attachEvent) //if IE (and Opera depending on user setting)
    document.attachEvent("on"+mousewheelevt, myFun)
else if (document.addEventListener) //WC3 browsers
    document.addEventListener(mousewheelevt, myFun , false)
	
/*thing to consider

if x > 1000 use marginTop and move down?

*/
	
	
	
	/*


(function() {
  var supportOffset = window.pageYOffset !== undefined,
    lastKnownPos = 0,
    ticking = false,
    scrollDir,
    currYPos;

  function doSomething(scrollPos, scrollDir) {
    // Your code goes here...
    if (scrollDir = 'up'){
		$('#content').css({
			marginLeft: '+=3px'
		});
	}else{
		$('#content').css({
			marginLeft: '-=3px'
		});
	}
	
	
	
	console.log('scroll pos: ' + scrollPos + ' | scroll dir: ' + scrollDir);
  }

  window.addEventListener('wheel', function(e) {
    currYPos = supportOffset ? window.pageYOffset : document.body.scrollTop;
    scrollDir = lastKnownPos > currYPos ? 'up' : 'down';
    lastKnownPos = currYPos;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(lastKnownPos, scrollDir);
        ticking = false;
      });
    }
    ticking = true;
  });
})();


*/
