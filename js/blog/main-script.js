$(document).ready(function() {
	
	$('input.phone').mask('+7 (999) 999-99-99');
	
	$('select').styler();
	
	var fsvs = $.fn.fsvs({
		speed : 800,
		bodyID : 'fsvs-body',
		selector : '> .slide',
		mouseDragEvents: false,
		beforeSlide : function(){},
		afterSlide : function(){},
	});
	
	$('.start-slider').find('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	
	$('.video-slider').find('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	
	$('.blog .list').mCustomScrollbar();
	
	$('.clients .list').mCustomScrollbar();
	
	$('.map').find('.tabs-nav').on('click', '.item', function() {
		var index = $(this).index();
		$(this).closest('.tabs-nav').find('.item').removeClass('active').eq(index).addClass('active');
		$(this).closest('.tabs').find('.tabs-content').find('.item').removeClass('active').eq(index).addClass('active');
	});
	
});