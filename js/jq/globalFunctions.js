//Global functions loaded first 

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkViewport(){
		if ($( window ).width() < 720){
			$("#sizeWarning").fadeIn();
		}else{
			$("#sizeWarning").fadeOut();
	}
}
	

//GLOBAL COOKIE MONSTER


var currentPage = 0;
var cInOffset = $("#content").offset().left;
var currentOffset = cInOffset;
var wInWidth = $("#content").width();
var cInWidth = $("#content").width();
var numSectionItems = $('#content section').length;


setCookie("TotalPages", numSectionItems , 1);


function setVars(){ //set all global vars
	a = getCookie("page");
	if (a != "" && a < (numSectionItems + 1) && a > 0){
		currentPage = a;
	}
	console.log("landing page = " + currentPage);
	return false;
}
//init vars
//setVars();
checkViewport();
//---------






setCookie("Hello World" , "test" , 1);