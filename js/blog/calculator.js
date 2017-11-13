$(document).ready(function() {
	
	function replace(elem) {
		elem = elem.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		return elem;
	}
	
	function updateReplace(elem) {
		var moneyNumber = $(elem).html();
		$(elem).html(replace(moneyNumber));
	}
	
	function calculatorTitle() {
		var height = $('.calculator').find('.left-info').outerHeight();
		var width = $('.calculator').find('.left-info').find('.title:not(.title-small) span').outerWidth();
		console.log(width)
	   //	$('.calculator').find('.left-info').find('.title:not(.title-small)').css('margin-top', (height-width)/2);
		
		var width2 = $('.calculator').find('.left-info').find('.title.title-small span').outerWidth();
		//$('.calculator').find('.left-info').find('.title.title-small').css('margin-top', (height-width2)/2);
	}
	$(window).load(function() {
		calculatorTitle();
	});
	
	$(window).resize(function() {
		//calculatorTitle();
		function func() {
			calculatorTitle();
		}
		setTimeout(func, 1);
	});
	
	$("#circle1").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 2,
		percent: 0,
		multiPercentage: 1,
		foregroundColor: '#B20404',
		backgroundColor: '#393939',
		percentageY:0,
		percentageX:0,
	});
	$("#circle2").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 2,
		percent: 0,
		multiPercentage: 1,
		foregroundColor: '#B20404',
		backgroundColor: '#393939',
		percentageY:0,
		percentageX:0,
	});
	$("#circle3").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 2,
		percent: 0,
		multiPercentage: 1,
		foregroundColor: '#B20404',
		backgroundColor: '#393939',
		percentageY:0,
		percentageX:0,
	});
	$("#circle4").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 10,
		backgroundBorderWidth: 2,
		percent: 0,
		multiPercentage: 1,
		foregroundColor: '#B20404',
		backgroundColor: '#393939',
		percentageY:0,
		percentageX:0,
	});
	
	/*
	function calculator() {
		
		var totalPriceArr = [];
		
		function updatePrice() {
			var totalPrice = 0;
			for (var i=0; i<totalPriceArr.length; i++) {
				totalPrice += parseInt(totalPriceArr[i]);
				
			}
			
			$('.calculator').find('.total-info .price .number').animateNumber({ number: totalPrice },
				'normal',
			function() {
				updateReplace($('.calculator').find('.total-info .price .number'));
			});
		}
		
		$('.choose-type').on('click', 'input', function() {
			$(this).closest('.main-info').find('.section').removeClass('disabled');
		});

		$('#price1').on('click', function() {
			if ($(this).prop('checked')) {
				totalPriceArr.push('1000');
				updatePrice();
			} else {
				totalPriceArr.push('-1000');
				updatePrice();
			}
		});
		
		$('#price2').on('click', function() {
			if ($(this).prop('checked')) {
				totalPriceArr.push('1000');
				updatePrice();
			} else {
				totalPriceArr.push('-1000');
				updatePrice();
			}
		});
		
		$('#price3').on('click', function() {
			if ($(this).prop('checked')) {
				totalPriceArr.push('1000');
				updatePrice();
			} else {
				totalPriceArr.push('-1000');
				updatePrice();
			}
		});
		
		$('#price4').on('click', function() {
			if ($(this).prop('checked')) {
				totalPriceArr.push('1000');
				updatePrice();
			} else {
				totalPriceArr.push('-1000');
				updatePrice();
			}
		});
		
		$('#price5').on('click', function() {
			if ($(this).prop('checked')) {
				totalPriceArr.push('1000');
				updatePrice();
			} else {
				totalPriceArr.push('-1000');
				updatePrice();
			}
		});
		
		$('#price6').on('click', function() {
			if ($(this).prop('checked')) {
				totalPriceArr.push('1000');
				updatePrice();
			} else {
				totalPriceArr.push('-1000');
				updatePrice();
			}
		});
	}*/
	
	function calculator() {
		
		var price1 = 0; //защите кузова
		var price2 = 0; //защита салона
		var price3 = 0; //антидождь
		var price4 = 0; //защита дисков
		var price5 = 0; //защита резины
		var price6 = 0; //защита двигателя
		
		var type; //тип тс
		
		$('.choose-type').on('click', 'input', function() {
			type = $(this).closest('.item').index() + 1;
			$(this).closest('.main-info').find('.section').removeClass('disabled');
		
			setPrice1();
			setPrice2();
			setPrice3();
			setPrice4();
			setPrice5();
			setPrice6();
		});
		
		function updatePrice() {
			var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;

			$('.calculator').find('.total-info .price .number').animateNumber({ number: totalPrice },
				'normal',
			function() {
				updateReplace($('.calculator').find('.total-info .price .number'));
			});
		}
		
		function setPrice1() {
			if (!$('.car-body').find('.checkbox input').prop('checked')) return;
			var count; //кол-во слоев
			var countPrice; //цена за слои
			var typeP; //тип подготовки
			var typePrice; //цена за тип
			
			count = $('.car-body').find('.radio-group').find('input:checked').closest('label').find('span').html();
			
			if (type == 1) {
				switch(count) {
					case '1':
						countPrice = 24000;
						updateCircles(4,24,71,50);
						break;
					case '2':
						countPrice = 30000;
						updateCircles(10.9,38,74,60);
						break;
					case '3':
						countPrice = 39000;
						updateCircles(14.4,42,76,65);
						break;
					case '4':
						countPrice = 48000;
						updateCircles(15.2,46,78,70);
						break;
					case '5':
						countPrice = 57000;
						updateCircles(18,51,80,75);
						break;
					case '6':
						countPrice = 66000;
						updateCircles(24,64,84,84);
						break;
					case '7':
						countPrice = 75000;
						updateCircles(25,67,86.2,88);
						break;
					case '8':
						countPrice = 84000;
						updateCircles(26.5,70,87.1,92);
						break;
					case '9':
						countPrice = 93000;
						updateCircles(28,73,88.9,96);
						break;
					case '10':
						countPrice = 102000;
						updateCircles2(30,78,90,100);
						break;
				}
			} else if (type == 2) {
				switch(count) {
					case '1':
						countPrice = 28000;
						updateCircles(4,24,71,50);
						break;
					case '2':
						countPrice = 34000;
						updateCircles(10.9,38,74,60);
						break;
					case '3':
						countPrice = 45000;
						updateCircles(14.4,42,76,65);
						break;
					case '4':
						countPrice = 56000;
						updateCircles(15.2,46,78,70);
						break;
					case '5':
						countPrice = 67000;
						updateCircles(18,51,80,75);
						break;
					case '6':
						countPrice = 78000;
						updateCircles(24,64,84,84);
						break;
					case '7':
						countPrice = 89000;
						updateCircles(25,67,86.2,88);
						break;
					case '8':
						countPrice = 100000;
						updateCircles(26.5,70,87.1,92);
						break;
					case '9':
						countPrice = 111000;
						updateCircles(28,73,88.9,96);
						break;
					case '10':
						countPrice = 122000;
						updateCircles2(30,78,90,100);
						break;
				}
			} else if (type == 3) {
				switch(count) {
					case '1':
						countPrice = 33000;
						updateCircles(4,24,71,50);
						break;
					case '2':
						countPrice = 39000;
						updateCircles(10.9,38,74,60);
						break;
					case '3':
						countPrice = 53000;
						updateCircles(14.4,42,76,65);
						break;
					case '4':
						countPrice = 67000;
						updateCircles(15.2,46,78,70);
						break;
					case '5':
						countPrice = 81000;
						updateCircles(18,51,80,75);
						break;
					case '6':
						countPrice = 95000;
						updateCircles(24,64,84,84);
						break;
					case '7':
						countPrice = 109000;
						updateCircles(25,67,86.2,88);
						break;
					case '8':
						countPrice = 123000;
						updateCircles(26.5,70,87.1,92);
						break;
					case '9':
						countPrice = 137000;
						updateCircles(28,73,88.9,96);
						break;
					case '10':
						countPrice = 151000;
						updateCircles2(30,78,90,100);
						break;
				}
			}

			typeP = $('.car-body').find('select option:selected').data('type');
			if (typeP) {
				$('.car-body').find('.main').removeClass('disabled');
			} else {
				price1 = 0;
				updatePrice();
				$('.car-body').find('.main').addClass('disabled');
				return;
			}
			
			if (type == 1) {
				if (typeP == '1') {
					typePrice = 12000;
				} else if (typeP == '2')  {
					typePrice = 8000;
				}
			} else if (type == 2) {
				if (typeP == '1') {
					typePrice = 16000;
				} else if (typeP == '2')  {
					typePrice = 11000;
				}
			} else if (type == 3) {
				if (typeP == '1') {
					typePrice = 20000;
				} else if (typeP == '2')  {
					typePrice = 14000;
				}
			}
			
			function updateCircles(val1, val2, val3, val4) {
				$('.car-body .result-list').find('.item-1').find('.circle-number').html('+'+val1+'%*');
				$('.car-body .result-list').find('.item-2').find('.circle-number').html('+'+val2+'%*');
				$('.car-body .result-list').find('.item-3').find('.circle-number').html('+'+val3+'%*');
				$('.car-body .result-list').find('.item-4').find('.circle-number').html('+'+val4+'%*');
				$("#circle1").html('');
				$("#circle1").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 10,
					backgroundBorderWidth: 2,
					percent: val1,
					multiPercentage: 1,
					foregroundColor: '#B20404',
					backgroundColor: '#393939',
					percentageY:0,
					percentageX:0,
				});
				$("#circle2").html('');
				$("#circle2").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 10,
					backgroundBorderWidth: 2,
					percent: val2,
					multiPercentage: 1,
					foregroundColor: '#B20404',
					backgroundColor: '#393939',
					percentageY:0,
					percentageX:0,
				});
				$("#circle3").html('');
				$("#circle3").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 10,
					backgroundBorderWidth: 2,
					percent: val3,
					multiPercentage: 1,
					foregroundColor: '#B20404',
					backgroundColor: '#393939',
					percentageY:0,
					percentageX:0,
				});
				$("#circle4").html('');
				$("#circle4").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 10,
					backgroundBorderWidth: 2,
					percent: val4,
					multiPercentage: 1,
					foregroundColor: '#B20404',
					backgroundColor: '#393939',
					percentageY:0,
					percentageX:0,
				});
			}
			
			function updateCircles2(val1, val2, val3, val4) {
				$('.car-body .result-list').find('.item-1').find('.circle-number').html('+'+val1+'%*');
				$('.car-body .result-list').find('.item-2').find('.circle-number').html('+'+val2+'%*');
				$('.car-body .result-list').find('.item-3').find('.circle-number').html('+'+val3+'%*');
				$('.car-body .result-list').find('.item-4').find('.circle-number').html('+'+val4+'%*');
				$("#circle1").html('');
				$("#circle1").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 10,
					backgroundBorderWidth: 2,
					percent: 100,
					multiPercentage: 1,
					foregroundColor: '#B20404',
					backgroundColor: '#393939',
					percentageY:0,
					percentageX:0,
				});
				$("#circle2").html('');
				$("#circle2").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 10,
					backgroundBorderWidth: 2,
					percent: 100,
					multiPercentage: 1,
					foregroundColor: '#B20404',
					backgroundColor: '#393939',
					percentageY:0,
					percentageX:0,
				});
				$("#circle3").html('');
				$("#circle3").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 10,
					backgroundBorderWidth: 2,
					percent: 100,
					multiPercentage: 1,
					foregroundColor: '#B20404',
					backgroundColor: '#393939',
					percentageY:0,
					percentageX:0,
				});
				$("#circle4").html('');
				$("#circle4").circliful({
					animation: 1,
					animationStep: 5,
					foregroundBorderWidth: 10,
					backgroundBorderWidth: 2,
					percent: 100,
					multiPercentage: 1,
					foregroundColor: '#B20404',
					backgroundColor: '#393939',
					percentageY:0,
					percentageX:0,
				});
			}
			
			price1 = countPrice + typePrice;
			
			updatePrice();
		}
		$('.car-body').on('click', '.checkbox input', function() {
			if ($(this).prop('checked')) {
				$(this).closest('.section').find('.select-group').removeClass('disabled');
			} else {
				price1 = 0;
				updatePrice();
				$(this).closest('.section').find('.select-group').addClass('disabled');
				$(this).closest('.section').find('.main').addClass('disabled');
				$(this).closest('.section').find('select option:first-child').prop('selected', true).trigger('refresh');
			}
		});
		$('.car-body').on('click', '.radio input', function() {
			$('.car-body').find('.checkbox input').prop('checked', 'checked');
			setPrice1();
		});
		$('.car-body').find('select').change(function() {
			setPrice1();
		});
		
		function setPrice2() {
			if (!$('.car-interior').find('.checkbox input').prop('checked')) return;
			var typeP; //тип подготовки
			var typePrice; //цена за тип
			
			typeP = $('.car-interior').find('select option:selected').data('type');
			
			if (type == 1) {
				if (typeP == '1') {
					typePrice = 12000;
				} else if (typeP == '2')  {
					typePrice = 24000;
				}
			} else if (type == 2) {
				if (typeP == '1') {
					typePrice = 15000;
				} else if (typeP == '2')  {
					typePrice = 30000;
				}
			} else if (type == 3) {
				if (typeP == '1') {
					typePrice = 18000;
				} else if (typeP == '2')  {
					typePrice = 36000;
				}
			}
			
			price2 = typePrice;
			
			updatePrice();
		}
		$('.car-interior').on('click', '.checkbox input', function() {
			if ($(this).prop('checked')) {
				$(this).closest('.section').find('.select-group').removeClass('disabled');
			} else {
				price2 = 0;
				updatePrice();
				$(this).closest('.section').find('.select-group').addClass('disabled');
				$(this).closest('.section').find('select option[data-type=0]').prop('selected', true).trigger('refresh');
			}
		});
		$('.car-interior').find('select').change(function() {
			$('.car-interior').find('.checkbox input').prop('checked', 'checked');
			setPrice2();
		});
		
		function setPrice3() {
			if ($('#price3').prop('checked')) {
				price3 = 4000;
			} else {
				price3 = 0;
			}
			updatePrice();
		}
		$('#price3').on('click', function() {
			setPrice3();
		});
		
		function setPrice4() {
			if ($('#price4').prop('checked')) {
				if (type == 1) {
					price4 = 6000;
				} else if (type == 2) {
					price4 = 8000;
				} else if (type == 3) {
					price4 = 10000;
				}
			} else {
				price4 = 0;
			}
			updatePrice();
		}
		$('#price4').on('click', function() {
			setPrice4();
		});
		
		function setPrice5() {
			if ($('#price5').prop('checked')) {
				if (type == 1) {
					price5 = 1500;
				} else if (type == 2) {
					price5 = 1800;
				} else if (type == 3) {
					price5 = 2000;
				}
			} else {
				price5 = 0;
			}
			updatePrice();
		}
		$('#price5').on('click', function() {
			setPrice5();
		});
		
		function setPrice6() {
			if ($('#price6').prop('checked')) {
				if (type == 1) {
					price6 = 2200;
				} else if (type == 2) {
					price6 = 2600;
				} else if (type == 3) {
					price6 = 3000;
				}
			} else {
				price6 = 0;
			}
			updatePrice();
		}
		$('#price6').on('click', function() {
			setPrice6();
		});
	}
	calculator();
	
});