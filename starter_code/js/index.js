 $(document).ready(pageReady);
    function pageReady() {

$(".readme").click(readSlide);

function readSlide () {
	event.preventDefault();
	$("p").slideDown('slow'); 
	$("#reveal").show(); 
	$(".readme").hide();
	$(".readless").show();

}

$(".readless").click(lessSlide);

function lessSlide() {
	event.preventDefault();
	$("#reveal").slideUp('slow'); 
	$(".readless").hide();
	$(".readme").show();
	
}

$(".learn").click(learnSlide);

function learnSlide () {
	event.preventDefault();
	$("#learnmoretext").slideDown();
	$(".learn").hide();
	

}

}