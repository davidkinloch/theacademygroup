
$(function() {
	$('.nav__toggle').click( function(e) {
    	e.preventDefault();
    	$(this).toggleClass('active');
    	$('.nav').toggleClass('active');
    	$('body').toggleClass('fixed');
  	});
  	$('.nav__close').click( function() {
    	$('.nav__toggle').removeClass('active');
    	$('.nav').removeClass('active');
    	$('body').removeClass('fixed');
    });
    $('.team__more').click( function(e) {
        e.preventDefault();
        $('.team__list--more').addClass('active');
        $(this).addClass('destroy');
     });
});