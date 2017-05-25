// functions for scrolling and resizing

//scrolling
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
	
	
	

var setNewParams= function(){
//sloppy vars
	var toMove = $('#content');
	var tp = getCookie("TotalPages");
	var a = toMove.width(); // divide by tp?
	
	currentPage = Math.round(-1 * toMove.offset().left / a); // store in global for future ref
	setCookie("page" , currentPage , 1);
	currentOffset = toMove.offset().left;
	console.log("ACTUAL CURRENT PAGE = " + currentPage);
	
	return false;

	
}



	
 var myFunV2 = function(e){ 
	 
	 
	 
	//check if user is truying to zoom using ctrl and mousewheel
	if (e.ctrlKey){
		console.log("user tryied to zoom. not move");
		return false;
	}
		
	//check if already moving
	if( $($('#content')).is(':animated') ) {
		return false;
	}
	
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	var toMove = $('#content');
	var tp = getCookie("TotalPages");
	var a = toMove.width(); // divide by tp?			//distance to move
	var s = 800; //move speed



	if (delta > 0 && currentPage > 0){
	
	
	toMove.animate({
			left: '+=' + a + 'px'
		}, s, "easeInOutElastic", setNewParams);
		
		
		
		/*
		toMove.css({
			left: '+=' + a + 'px'
		});
		*/
	}
	if (delta < 0 && currentPage < tp - 1){

	/*
		toMove.css({
			left: '-=' + a + 'px'
		});
	*/
	
		toMove.animate({
			left: '-=' + a + 'px'
		}, s, "easeInOutElastic", setNewParams);
		
		
	}

	
	/*
	currentPage = -1 * toMove.offset().left / a; // store in global for future ref
	setCookie("page" , currentPage , 1);
	currentOffset = toMove.offset().left;
	console.log("ACTUAL CURRENT PAGE = " + currentPage);
	*/
	
	return false;
 }	 

 
if (document.attachEvent) //if IE (and Opera depending on user setting)
    document.attachEvent("on"+mousewheelevt, myFunV2)
else if (document.addEventListener) //WC3 browsers
    document.addEventListener(mousewheelevt, myFunV2 , false)

	
	
//the resizer!

function setView(p){
	//p is page number
	if (p !== undefined) { 
	
	//let each vioew always = 500 for now
	var x = 500;
	var content = $('#content');
	
	content.css({
		left: -1 * $( window ).width() * p + "px"
	});
		

	}else{
	return false;
	}
}







$(window).resize(function(){
	
	

	
	var cp = getCookie("page");
	//translate to px
	var cpX = cp * $("#content").width();
	console.log("current page = " + cp);
	console.log("cpX = " + cpX);
	
	//alert("test");
    var content = $('#content');
	
	$( "#content section" ).each(function( i ) {
		
		$( this ).css({
			left: i * $("#content").width() + "px"
		});
	}
	);
	
	//get current page

	setView(cp);
	checkViewport();
	


	
	
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//Superseded
/*
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
 */
 

	

