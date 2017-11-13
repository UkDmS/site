$(document).ready(function() {
	
	$('select').styler();
	
	//$('.cart-list').mCustomScrollbar();
	
	function setHeightContactsPage() {
		var height = $(window).outerHeight();
		height < 600 ? $('.contacts-page').css('height', 600) : $('.contacts-page').css('height', height);
	}
	setHeightContactsPage();
	
	function setHeightShopPage() {
		var height = $(window).outerHeight();
		var shopHeight = $('.shop').outerHeight();
		height > shopHeight ? $('.shop').css('height', height) : '';
	}
	setHeightShopPage();
	
	$(window).resize(function() {
		setHeightContactsPage();
		setHeightShopPage();
	});
	
	$('.start-content').find('.list-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		draggable: false
	});
	
	$('.count').on('click', '.up', function() {
		var input = $(this).closest('.count').find('input');
		$(input).val(+$(input).val()+1);
	});
	
	$('.count').on('click', '.down', function() {
		var input = $(this).closest('.count').find('input');
		if ($(input).val() == '1') {
			return;
		}
		$(input).val($(input).val()-1);
	});
	
	function magicMenu() {
		try {
			var $el, leftPos, newWidth,
			$mainNav = $(".menu-panel");

			$mainNav.append("<div id='line'></div>");

			var $magicLine = $("#line");

			$magicLine
			.width($(".menu-panel .item.active").width())
			.css("left", $(".menu-panel .item.active").position().left)
			.data("origLeft", $magicLine.position().left)
			.data("origWidth", $magicLine.width());
			$(".menu-panel .item>a").hover(function() {
				$el = $(this).closest('.item');
				leftPos = $el.position().left;
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
	
	$('.tabs').on('click', '.tabs-nav .tab', function() {
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.tabs').find('.tabs-content').find('.tab').removeClass('active').eq(index).addClass('active');
	});
	
});