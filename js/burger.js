$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.header').toggleClass('active');
	});
});

$(document).ready(function() {
	$('.header__choise').click(function(event) {
		$('.region').toggleClass('active');
	});
});
