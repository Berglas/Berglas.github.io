$(document).ready(() => {
	$(window).bind('scroll', () => {
		let navHeight = $('.header').height();
		if ($(window).scrollTop() > navHeight / 2) {
			$('.header').addClass('reduce');
			$('.container').addClass('adjust');
		}
		else {
			$('.header').removeClass('reduce');
			$('.container').removeClass('adjust');
		}
	});

	let currentDateTime = new Date().getFullYear()
	$('.license').text('Copyright © Berglas ' + currentDateTime + '.')
});