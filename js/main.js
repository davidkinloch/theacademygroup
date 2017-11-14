
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
    $('.faqs__list').isotope({
      itemSelector: '.faqs__item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.faqs__item'
      }
    });
      //scroll whole div into view
  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

   //scroll top of div into view
  function isTopIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;


      return (elemTop <= docViewBottom);
  }

  function isIntroatTop(elem) {
      var docViewTop = $(window).scrollTop()  + 40;
      var elemTop = $(elem).offset().top;


      return (elemTop  <=  docViewTop );
  }

  $(window).scroll(function () {
      //bottom of div into veiw
      $(".section-work__item, .section-work-landing__item , .section-thoughts__overlay").each(function () {
          if (isScrolledIntoView(this) === true) {
              $(this).addClass('animated');
          }
      });

      //top of div into veiw
      $(".section__block").each(function () {
          if (isTopIntoView(this) === true) {
              $(this).addClass('animated');
          }
      });

      //end of hero into text
      $(".section-intro").each(function () {
          if (isIntroatTop(this) === true) {
              $('.nav-toggle').addClass('black');
          }
          else  {
              $('.nav-toggle').removeClass('black');
          }
      });
  });
});

$( window ).on( "load", function() {
 // setTimeout(function() {

    $('.section--hero, .header').addClass('animated');
  //   }, 600);
});


