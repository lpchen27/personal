/*
$(function(){
	var mySwiper = new Swiper('.swiper-container',{
		//基础配置
		autoplay:2000,
		loop:true,
		speed:300,
		grabCursor:true,
		autoplayDisableOnInteraction:false,

		//分页器
		pagination:'.swiper-pagination',


		initialSlide:0,
		direction:'horizontal',
		speed:500,
		autoplay:3000,
		autoplayDisableOnInteraction:false,
		autoplayStopOnLast:false,
		grabCursor:true,
		parallax:false,
		width:window.innerWidth,

		effect:"cube",

		loop:true,

	});
});
*/

$(function(){
	var mySwiper = new Swiper('.swiper-container',{
		autoplay:2000,
		loop:true,
		speed:300,
		grabCursor:true,
		autoplayDisableOnInteraction:false,

		pagination:".swiper-pagination",
	});
});


$(function(){
	resize();

	$(window).resize(function(){
		resize();
	});
	
	function resize(){
		var width = $(window).width();
		var fontSize = (width / 320)*12 + "px";
		console.log(fontSize);
		$('html').css('fontSize',fontSize);	
	}
});