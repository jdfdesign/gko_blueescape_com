//= require gko/externals/jquery.elastidegallery

$(document).ready(function() {
	$('#featured').orbit({ 
		bullets : true, 
		animation : "horizontal-push",
		animationSpeed: 800,
		timer: true });
  if($('body').hasClass('mobile')) {
	}
	else {
		if($('.images:first').length > 0) {
			Gallery.init($('.images:first'));
		}
	} 
});