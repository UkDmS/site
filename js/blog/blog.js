$(document).ready(function() {
	
	function move() {
		var sliderElem = document.getElementById('blog');
		var thumbElem = sliderElem.children[0];
		$(thumbElem).on('touchstart', function(event) {
			var touch = event.originalEvent.touches[0];
			var thumbCoords = getCoords(thumbElem);
			var shiftX = touch.pageX - thumbCoords.left;
			var sliderCoords = getCoords(sliderElem);
			$(document).on('touchmove', function(event) {
				var touch = event.originalEvent.touches[0];
				//  вычесть координату родителя, т.к. position: relative
				var newLeft = touch.pageX - shiftX - sliderCoords.left;
				// курсор ушёл вне слайдера
				if (newLeft > 0) {
					newLeft = 0;
				}
				var rightEdge = -(thumbElem.offsetWidth - sliderElem.offsetWidth);
				if (newLeft < rightEdge) {
					newLeft = rightEdge;
				}
				// end курсор ушёл вне слайдера
				thumbElem.style.left = newLeft + 'px';
			});
			document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null;
			};
			return false; // disable selection start (cursor change)
		});
		thumbElem.ondragstart = function() {
		  return false;
		};
		function getCoords(elem) {
		  var box = elem.getBoundingClientRect();
		  return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		  };
		}
	}
	
	(function($){
		$.fn.touchanddrag=function(){

			// wrap content in div, that will drag
			//this.wrapInner('<div>');
			var box=this,
				data=this.children();
			// hide scrollbar and other preps
			//box.css({overflow:'hidden'});
			//data.css({position:'absolute',cursor:'default'});
			// touch and drag content
			data.mousedown(function(e){
				var widthBox=box.outerWidth(),
					widthData=data.outerWidth();
				if (true) {
					var posTap=e.pageX,
						posData=data.position().left,
						posShift,
						mouseMove=function(e){
							if (e.which==1){
								posShift=e.pageX-posTap;
								//data.css({left:posData+posShift});
								
								if (data.position().left>0){
									data.css({left:(posData+posShift)/5});
								} else if (data.position().left<(widthBox-widthData)){
									data.css({left:(widthBox-widthData)+(posShift/5)});
								} else {
									data.css({left:posData+posShift});
								}
								
							} else {
								mouseUp();
							}
						},
						mouseUp=function(){
							$(document).off('mousemove',mouseMove).off('mouseup',mouseUp);
							$(document).off('mousedown',selection);
							//data.css({cursor:'default'});						
							if (data.position().left>0){
								data.animate({left:0},250);
							} else if (data.position().left<(widthBox-widthData)) {
								data.animate({left:-(widthData-widthBox)},250);
							}
						},
						selection=function(){
							if (window.getSelection){window.getSelection().removeAllRanges()}
							else {document.selection.empty()}
							return false;
						};
					//data.css({cursor:'move'});
					$(document).on('mousedown',selection).on('mousemove',mouseMove);
					$(document).on('mouseup',mouseUp).on('contextmenu',mouseUp);
					$(window).on('blur',mouseUp);
				}
			});
			return this;
		
		}
	})(jQuery);
	
	if (device.mobile()) {
		move();
	} else {
		$('#blog').touchanddrag();
	}
	
	//var left = 0;
	
	/*$(".blog").find('.list').mCustomScrollbar({
		axis:"x",
		scrollEasing: 'linear',
		timeout:0,		
		scrollButtons: {
			enable: true,
		},
		callbacks:{
			onScroll:function(){
				 myCustomFn(this);
			}
		}
	});
	
	function myCustomFn(el){
		console.log(el.mcs.left)
		left = el.mcs.left;
	}*/
	function setWidth() {
		var width = 0;
		$('.blog').find('.item').each(function() {
			var widthElem = $(this).outerWidth();
			width += widthElem;
		});
		$('.blog').find('.list').css('width', width);
	}
	setWidth();
	
	$('.go-blog').on('click', function() {
		$(this).closest('.blog').addClass('active');
		function func() {
			$('.blog').addClass('black');
		}
		setTimeout(func, 1000);
		
		$('.blog').on('mousewheel', function(event) {
			var now = parseInt($('.blog').find('.list').css('left'));
			var left = now + event.deltaY * 100;
			var rightEdge = $('.blog').outerWidth() - $('.blog').find('.list').outerWidth();
			if (left < rightEdge) {
				left = rightEdge;
				$('.blog').find('.list').css('left', left);
			} else {
				if (left > 0) {
					left = 0;
				}
				$('.blog').find('.list').css('left', left);
				if (left < 0) {
					return false;
				}
			}
		});
		
	});
	
	/*if (device.mobile()) {
		function move() {
			var sliderElem = document.getElementById('blog');
			var thumbElem = sliderElem.children[0];
			$(thumbElem).on('touchstart', function(event) {
				var touch = event.originalEvent.touches[0];
				var thumbCoords = getCoords(thumbElem);
				var shiftX = touch.pageX - thumbCoords.left;
				var sliderCoords = getCoords(sliderElem);
				$(document).on('touchmove', function(event) {
					var touch = event.originalEvent.touches[0];
					//  вычесть координату родителя, т.к. position: relative
					var newLeft = touch.pageX - shiftX - sliderCoords.left;
					// курсор ушёл вне слайдера
					if (newLeft > 0) {
						newLeft = 0;
					}
					var rightEdge = -(thumbElem.offsetWidth - sliderElem.offsetWidth);
					if (newLeft < rightEdge) {
						newLeft = rightEdge;
					}
					// end курсор ушёл вне слайдера
					thumbElem.style.left = newLeft + 'px';
				});
				document.onmouseup = function() {
					document.onmousemove = document.onmouseup = null;
				};
				return false; // disable selection start (cursor change)
			});
			thumbElem.ondragstart = function() {
			  return false;
			};
			function getCoords(elem) {
			  var box = elem.getBoundingClientRect();
			  return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
			  };
			}
		}
	} else {
		function move() {
			var sliderElem = document.getElementById('blog');
			var thumbElem = sliderElem.children[0];
			thumbElem.onmousedown = function(e) {
				var thumbCoords = getCoords(thumbElem);
				var shiftX = e.pageX - thumbCoords.left;
				var sliderCoords = getCoords(sliderElem);
				document.onmousemove = function(e) {
					//  вычесть координату родителя, т.к. position: relative
					var newLeft = e.pageX - shiftX - sliderCoords.left;
					// курсор ушёл вне слайдера
					if (newLeft > 0) {
						newLeft = 0;
					}
					var rightEdge = -(thumbElem.offsetWidth - sliderElem.offsetWidth);
					if (newLeft < rightEdge) {
						newLeft = rightEdge;
					}
					// end курсор ушёл вне слайдера
					thumbElem.style.left = newLeft + 'px';
				}
				document.onmouseup = function() {
					document.onmousemove = document.onmouseup = null;
				};
				return false; // disable selection start (cursor change)
			};
			thumbElem.ondragstart = function() {
			  return false;
			};
			function getCoords(elem) {
			  var box = elem.getBoundingClientRect();
			  return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
			  };
			}
		}
	}*/
	//move();
	
	/*function move() {
		var sliderElem = document.getElementById('blog');
		var thumbElem = sliderElem.children[0];
		thumbElem.onmousedown = function(e) {
			var shiftX = e.pageX;
			document.onmousemove = function(e) {
				var left = parseInt($('.blog').find('.list').css('left'));
				var newLeft = e.pageX - shiftX;
				var maxVal = $('.blog').outerWidth() - $(".blog").find('.list').outerWidth();
				var scrollTo = -left - newLeft;
				
				if (scrollTo < 0) {
					scrollTo = 0;
				}
				if (scrollTo > maxVal) {
					scrollTo = maxVal;
				}
				$('.blog').find('.list').css('left', scrollTo);
			}
			document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null;
			};
			return false; // disable selection start (cursor change)
		};
		thumbElem.ondragstart = function() {
		  return false;
		};
	}*/
	
	function setHeightContactsPage() {
		var height = $(window).outerHeight();
		height < 600 ? $('.contacts-page').css('height', 600) : $('.contacts-page').css('height', height);
	}
	setHeightContactsPage();
	
	function setHeightBlogPage() {
		var height = $(window).outerHeight();
		var shopHeight = $('.blog').outerHeight();
		height > shopHeight ? $('.blog').css('height', height) : '';
	}
	setHeightBlogPage();
	
	$(window).resize(function() {
		setHeightContactsPage();
		setHeightBlogPage();
	});
	
	/*$('.blog').on('mousewheel', function(event) {
		console.log(event.deltaX, event.deltaY, event.deltaFactor);
		
		var width = $('.blog').find('.list').outerWidth();
		var widthParent = $('.blog').outerWidth();
		var offsetLeft = $('.blog').find('.list').position().left;
		
		if ()
		return false;
	});*/
	
});