// functions for scrolling and resizing

//scrolling
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
	
	
 var myFunV2 = function(e){ 
	 
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	var toMove = $('#content');
	var tp = getCookie("TotalPages");
	var a = toMove.width(); // divide by tp?			//distance to move
	


	if (delta > 0 && currentPage > 0){

		toMove.css({
			left: '+=' + a + 'px'
		});
	}
	if (delta < 0 && currentPage < tp - 1){

		toMove.css({
			left: '-=' + a + 'px'
		});
	}

	currentPage = -1 * toMove.offset().left / a; // store in global for future ref
	setCookie("page" , currentPage , 1);
	currentOffset = toMove.offset().left;

	return false;
 }	 

 
if (document.attachEvent) //if IE (and Opera depending on user setting)
    document.attachEvent("on"+mousewheelevt, myFunV2)
else if (document.addEventListener) //WC3 browsers
    document.addEventListener(mousewheelevt, myFunV2 , false)

	
	
//the resizer!






$(window).resize(function(){
	
	//alert("test");
    var content = $('#content');

	$( "#content section" ).each(function( i ) {
		console.log(i)
		$( this ).css({
			left: i * $("#content").width() + "px"
		});
	}
	);

	var resetLeft = content.width() / getCookie("TotalPages");
	content.css({
		left: '0px'
	})

	
	
	
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
 

	

