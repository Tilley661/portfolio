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


//GLOBAL COOKIE MONSTER


var currentPage = 0;
var cInOffset = $("#content").offset().left;
var currentOffset = cInOffset;
var wInWidth = $("#content").width();
var cInWidth = $("#content").width();



function setVars(){ //set all global vars
	a = getCookie("page");
	if (a != ""){
		currentPage = a;
	}
	return false;
}
//init vars
setVars();
//---------




var numSectionItems = $('#content section').length;
setCookie("TotalPages", numSectionItems , 1);

setCookie("Hello World" , "test" , 1);