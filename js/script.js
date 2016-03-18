$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 150) {
			$('#toTop').fadeIn();
		} 
		else {
			$('#toTop').fadeOut();
		}
	});
 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},1000);
	});
});

$(function() {
	$('.filter-btn').click(function(e) {
		var filter = $(this).next();
		if (filter.is(':hidden')){
			filter.slideDown(300);
			$(this).addClass('active');
		}
		else{
			filter.slideUp(300);
			$(this).removeClass('active');
		}
	});
});

