$(document).ready(function() {
	
	$('select').styler();
	
	//$('.cart-list').mCustomScrollbar();
	
	function setHeightContactsPage() {
		var height = $(window).outerHeight();
		height < 600 ? $('.contacts-page').css('height', 600) : $('.contacts-page').css('height', height);
	}
	setHeightContactsPage();
	
	function setHeightLkPage() {
		var height = $(window).outerHeight();
		var shopHeight = $('.cabinet').outerHeight();
		height > shopHeight ? $('.cabinet').css('height', height) : '';
	}
	setHeightLkPage();
	
	$(window).resize(function() {
		setHeightContactsPage();
		//setHeightShopPage();
	});
	
	function magicMenu() {
		try {
			var $el, leftPos, newWidth,
			$mainNav = $(".menu-panel");

			$mainNav.append("<div id='line'></div>");

			var $magicLine = $("#line");

			$magicLine
			.width($(".menu-panel .item.active span").width())
			.css("left", ($(".menu-panel .item.active").position().left + $(".menu-panel .item.active span").position().left))
			.data("origLeft", $magicLine.position().left)
			.data("origWidth", $magicLine.width());
			$(".menu-panel .item>a").hover(function() {
				$el = $(this).find('span');
				leftPos = ($el.closest('.item').position().left + $el.position().left);
				newWidth = $el.width();
				$magicLine.stop().animate({
					left: leftPos,
					width: newWidth
				});
			}, function() {
				$magicLine.stop().animate({
					left: $magicLine.data("origLeft"),
					width: $magicLine.data("origWidth")
				}); 
			});
		} catch (err) {
			
		}
	}
	magicMenu();
	
	$('.objects-list').on('click', '.icon-image', function() {
		$(this).closest('.icon').addClass('active');
	});
	$('.icon-message').on('click', '.button-no', function() {
		$(this).closest('.icon').removeClass('active');
	});
	$('.icon-message').on('click', '.button-yes', function() {
		$(this).closest('.icon').removeClass('active');
		$('#delete_object').arcticmodal();
	});
	$('#delete_object').on('click', '.radio label', function() {
		var index = $(this).closest('.radio').index();
		$('#delete_object').find('.output-list').find('.item').removeClass('active').eq(index).addClass('active');
	});
	
	$('.page-offer').on('click', 'input', function() {
		if ($(this).prop('checked')) {
			$('.button-container').addClass('active');
		} else {
			$('.button-container').removeClass('active');
		}
	});
	
	$('.tabs').on('click', '.tabs-nav .tab', function() {
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.tabs').find('.tabs-content').find('.tab').removeClass('active').eq(index).addClass('active');
	});
	
	$('.cars-list .list').slick({
		centerMode: true,
		slidesToShow: 3,
		slidesToShow: 7,
		dots: false,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.cars-info-list>.list',
	});
	
	$('.cars-info-list>.list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.cars-list .list',
		dots: false,
		arrows: false,
		fade: true,
	});
	
	$(".time-list .item-1 .circle").circliful({
		foregroundBorderWidth: 15,
		backgroundBorderWidth: 14,
		percent: 80,
		backgroundColor: '#FF1411',
		foregroundColor: '#2F2F2F',
		fontColor: 'transparent',
	});
	
	$(".time-list .item-2 .circle").circliful({
		foregroundBorderWidth: 15,
		backgroundBorderWidth: 14,
		percent: 35,
		backgroundColor: '#FF1411',
		foregroundColor: '#2F2F2F',
		fontColor: 'transparent',
	});
	
	$(".time-list .item-3 .circle").circliful({
		foregroundBorderWidth: 15,
		backgroundBorderWidth: 14,
		percent: 30,
		backgroundColor: '#FF1411',
		foregroundColor: '#2F2F2F',
		fontColor: 'transparent',
	});
	
});