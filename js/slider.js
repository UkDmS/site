$(document).on('ready', function() {
    $(".vertical-center-4").slick({
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<img src="icons/top.gif" class="slick-prev">',
        nextArrow: '<img src="icons/bottom.gif" class="slick-next">'
    });
    var skew = '-10',
        width=$(".elem").outerWidth(),
        translate = Math.tan((-1)*skew / 180 * Math.PI) *  width,
        k,
        n = 4;
    $(".elem").each(function (index, el){
        k = (-1)*(index % n -n);
        $(el).css("transform","skewY("+skew+"deg) translateY("+translate*k+"px)");
    });
});