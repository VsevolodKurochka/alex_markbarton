$(document).ready(function(){

	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top
		}, speed);
		return false;
	}
	$('.anchor').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
	});

	$('#review-slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    dots: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoHeight: true,
    autoHeightClass: 'owl-height',
    navContainerClass: 'owl-nav review__nav',
    dotsClass: 'owl-dots review__slider-dots',
    dotClass: 'owl-dot review__slider-dot'
	});


	function toggle(el, toggleEl, height){
		var closeText = el.attr('data-close');
		var openText = el.attr('data-open');
		el.toggleClass('active');

		if(el.hasClass('active')){
			el.text(closeText);
		}else{
			el.text(openText);
		}


		toggleEl.toggleClass('active');

		if(toggleEl.hasClass('active')){
			toggleEl.animate({height: toggleEl.get(0).scrollHeight}, 200);
		}else{
			toggleEl.animate({height: height}, 200);
		}
	}

	$(".review__item-link").click(function(){
		toggle($(this), $(this).parent().prev(), 84);
	});

	$(".themes__body-button").click(function(){
		toggle($(this), $(this).parent().prev(), 410);
	});
});	