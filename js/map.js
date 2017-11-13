var maping = {
	map: ymaps,

	initrow: function (obj) {
		return new ymaps.Placemark([obj.latitude, obj.longitude], {
			balloonTitle: obj.accountname,
			balloonContent: obj.content,
			balloonCircleVal: obj.rating,
			balloonCircleLabel: 'Рейтинг',
			balloonAddress: obj.address,
			balloonPhone: obj.phone,
			balloonEmail: obj.email,
			}, {
			balloonShadow: false,
			balloonLayout: this.MyBalloonLayout(),
			balloonContentLayout: this.MyBalloonContentLayout(),
			balloonPanelMaxMapArea: 0,
			iconLayout: 'default#image',
			iconImageHref: 'catalog/view/theme/images/map-icon-small.png',
			iconImageSize: [25, 37],
			iconImageOffset: [-4, -14]
		});
    },
    

    MyBalloonContentLayout: function () {
    	return MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
										'<div class="top">' +
											'<div class="left">' +
												'<div class="title">$[properties.balloonTitle]</div>' +
												'<div class="type">$[properties.balloonContent]</div>' +
											'</div><div class="right">' +
												'<div class="rating">' +
													'<div class="circle">$[properties.balloonCircleVal]</div>' +
													'<div class="label">$[properties.balloonCircleLabel]</div>' +
												'</div>' +
											'</div>' +
										'</div>' + 
										'<div class="bottom">' +
											'<div class="address">$[properties.balloonAddress]</div>' +
											'<div class="phone"><a href="tel:$[properties.balloonPhone]">$[properties.balloonPhone]</a></div>' +
											'<div class="email"><a href="mailto:$[properties.balloonEmail]">$[properties.balloonEmail]</a></div>' +
										'</div>'
				);
    },
	
	MyBalloonLayout: function () {
		return MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
										'<div class="popover top">' +
											'<a class="close" href="#">&times;</a>' +
											'<div class="arrow"></div>' +
											'<div class="popover-inner">' +
											'$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
											'</div>' +
										'</div>', {
										
										build: function () {
											this.constructor.superclass.build.call(this);

											this._$element = $('.popover', this.getParentElement());

											this.applyElementOffset();

											this._$element.find('.close')
												.on('click', $.proxy(this.onCloseClick, this));
										},

										clear: function () {
											this._$element.find('.close')
												.off('click');

											this.constructor.superclass.clear.call(this);
										},

										onSublayoutSizeChange: function () {
											MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

											if(!this._isElement(this._$element)) {
												return;
											}

											this.applyElementOffset();

											this.events.fire('shapechange');
										},

										applyElementOffset: function () {
											this._$element.css({
												left: -(this._$element[0].offsetWidth / 2),
												top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
											});
										},

										onCloseClick: function (e) {
											e.preventDefault();

											this.events.fire('userclose');
										},
										
										getShape: function () {
											if(!this._isElement(this._$element)) {
												return MyBalloonLayout.superclass.getShape.call(this);
											}

											var position = this._$element.position();

											return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
												[position.left, position.top], [
													position.left + this._$element[0].offsetWidth,
													position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
												]
											]));
										},
										
										_isElement: function (element) {
											return element && element[0] && element.find('.arrow')[0];
										}
				});
	}

}








