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
    nav: false,
    items: 1,
    dots: false,
    nav: true,
    navText: ["", ""],
    autoplay: false,
    autoplayTimeout: 3000,
    navContainerClass: 'owl-nav review__nav',
    responsive: {
    	768: {
    		items: 2
    	}
    }
	});

	$(".review__item-link").click(function(){
		var toggle = $(this).parent().prev();
		toggle.toggleClass('active');

		if(toggle.hasClass('active')){
			toggle.animate({height: toggle.get(0).scrollHeight}, 200);
		}else{
			toggle.animate({height:84}, 200);
		}
	});
});	