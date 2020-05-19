$(document).ready(() => {
	let site = location.href
	$('.fb-comments').attr('data-href=' + site)
	$('h3').each((i, e) => {
		$(e).attr('id', 'h3_' + i.toString())
		$('.outline-box > ul').append('<li><a href="#h3_' + i.toString() + '">' + e.innerText+ '</a><il>')
	})
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

//設定錨點
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 84
    }, 300);
  });
});