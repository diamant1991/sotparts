$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 150) {
			$('#toTop').fadeIn();
		} 
		else {
			$('#toTop').fadeOut();
		}
	});
 
	$('#toTop,.mobile__up-btn').click(function(e) {
		e.preventDefault();
		$('body,html').animate({scrollTop:0},1000);
	});
});

$(function() {
	$('.toggle-sidebar').click(function(e) {
		var sidebar = $(this).parent().next();
		if (sidebar.is(':hidden')){
			sidebar.slideDown(300);
			$(this).addClass('active');
		}
		else{
			sidebar.slideUp(300);
			$(this).removeClass('active');
		}
	});
});
	
$(function() {
	$('.toggle-drop').click(function(e) {
		e.preventDefault();
		var dropMenu = $(this).parent().find('ul');
		if (dropMenu.is(':hidden')) {
			dropMenu.slideDown(300);
			$(this).addClass('active');
		}
		else{
			dropMenu.slideUp(300);
			$(this).removeClass('active');
		}
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

$(function() {
	$('.menu-btn').click(function(e) {
		e.preventDefault();
		var menuList = $(this).closest('.mobile-header').next();
		if (menuList.is(':hidden')){
			menuList.slideDown(300);
			$(this).addClass('active');
		}
		else{
			menuList.slideUp(300);
			$(this).removeClass('active');
		}
	});
});


var mydivs=new Array('#list','#column');

function opcl(arr, e){
  if ($(e).css('display') == 'none'){
      for(var i in arr){   
         $(arr[i]).hide();     
      }
      $(e).show();       
  }
}

$('.view a').click(function(e) {
	e.preventDefault();
	$('.view a').removeClass('active');
	$(this).addClass('active');
});