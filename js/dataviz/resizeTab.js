$(document).ready(function(){
	$('.tabs').mousedown(function() {
		console.log('An <a> was clicked');	
		$('.survey-viz').each(function() {
			$(this).addClass('temp').removeClass('col l6 m12 s12 survey-viz')
			console.log(this);
		});
	})
	.mouseup(function(){
		console.log('mouseup');
		$('.temp').each(function() {
			$(this).removeClass('temp').addClass('col l6 m12 s12 survey-viz')
			console.log(this)
		});
	});
});



