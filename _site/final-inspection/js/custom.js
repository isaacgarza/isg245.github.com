(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-brand").addClass("brand-show");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-brand").removeClass("brand-show");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 900, 'easeInOutExpo');
			event.preventDefault();
		});
		
        $('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 900, 'easeInOutExpo');
			event.preventDefault();
		});
        
        $('#services a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 900, 'easeInOutExpo');
			event.preventDefault();
		});
        
        $('#inspections #b-right a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 900, 'easeInOutExpo');
			event.preventDefault();
		});
        
        $('#about a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 900, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
