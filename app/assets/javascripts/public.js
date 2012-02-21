//= require gko/jquery.elastidegallery

$(document).ready(function() {
	$('#orbit').orbit({ 
		bullets : true, 
		animation : "horizontal-push",
		animationSpeed: 800,
		timer: true });

	if($('.images:first').length > 0) {
		Gallery.init($('.images:first'));
	}
});