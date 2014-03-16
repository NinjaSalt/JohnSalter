$(document).ready(function(){
	resizeDiv();
	$(".project-description").load('nwc.html');
});

window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	//vpw = $(window).width();
	var vph = $(window).height();
	console.log($(".project-description").height())
	if ($(".project-description").height()>vph){
		vph = $(".project-description").height()
	}
	var projects = document.getElementById("projects");
	projects.style.height = vph+"px";
	//$(".content").style.height = "1000px";
}

$("#nwc").click(function(){
	$(".project-description").fadeOut(function(){$(".project-description").load('nwc.html').fadeIn();});
});

$("#fcl").click(function(){
	$(".project-description").fadeOut(function(){$(".project-description").load('fcl.html').fadeIn();});
});

$("#m4000").click(function(){
	$(".project-description").fadeOut(function(){$(".project-description").load('m4000.html').fadeIn();});
});

//$(".project-description").fadeOut(function() {
		//$(this).load('home.html').fadeIn();
	//});
