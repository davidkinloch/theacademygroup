
$(function() {
	$('.nav__toggle').click( function(e) {
    	e.preventDefault();
    	$(this).toggleClass('active');
    	$('.nav').toggleClass('active');
  	});
  	$('.nav__close').click( function() {
    	$('.nav__toggle').removeClass('active');
    	$('.nav').removeClass('active');
    });	
});