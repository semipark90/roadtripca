//Our Custom Javascript Code will go here

/////show hide category section in Index page
$(document).ready(function(){

	$('.show-more a').click(function(){
		$('.show-more').css({display:'none'});
		$('#grid2').css({display:'inline-block'}).css({opacity:0});
		$('#grid2').animate({opacity:1}, 500);
		$('#grid0').animate({opacity:1}, 500);
	});

	$(".scroll").click(function (event) {
		event.preventDefault();
		//calculate destination place
		var dest = 0;
		if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
				dest = $(document).height() - $(window).height();
		} else {
				dest = $(this.hash).offset().top - 95;
		}
		//go to destination
		$('html,body').animate({
				scrollTop: dest
		}, 300, 'swing');
	});
});

$('.show-more a').on('click', function(e) {
	var elems = document.querySelectorAll('.hidden');
	for (var i = 0; i < elems.length; i++) {
		elem = elems[i];
		classie.removeClass(elem, 'hidden');
	}
	$('.show-more').addClass('none');
	e.preventDefault();
	setTimeout(function() {
		new AnimOnScroll( document.getElementById( 'grid2' ), {
			minDuration : 0.4,
			maxDuration : 0.9,
			viewportFactor : 0.2
		} );
	}, 100);
});
