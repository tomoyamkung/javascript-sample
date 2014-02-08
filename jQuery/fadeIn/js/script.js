$(function() {
	var fadeSpeed = 3000;
	$('#fadein')
		.css({opacity: '0.0'})
		.animate({opacity: '1'}, fadeSpeed);
});
