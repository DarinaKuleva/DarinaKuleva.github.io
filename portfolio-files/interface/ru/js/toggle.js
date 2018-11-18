var ar2_3 = document.getElementById("arrow_2_3");
var ar2_2 = document.getElementById("arrow_2_2");
var ar2_1 = document.getElementById("arrow_2_1");

function toggleVisibility(box, arrow, height)
{	
	if ($(box).hasClass('show')) {
		
		$(box).removeClass('visuallyshow');
		
		setTimeout(function () {
		  $(box).removeClass('show');
		}, 20);

		$(box).height(0);

		$(arrow).removeClass('rotated');

	} else {
		
		$(box).addClass('show');
		$(box).height(height);
		//setTimeout(function () {
		  //$(box).addClass('visuallyshow');
		//}, 20);
		
		$(box).one('transitionend', function(e) {

			$(box).addClass('visuallyshow');

		});
		
		//$(box).height(420);
		
		$(arrow).addClass('rotated');
	}
}

$(document).ready(function () 
{
	$("#h_2_3").click(function() {
		toggleVisibility("#m_2_3", ar2_3, 420);
	});
	$("#h_2_2").click(function() {
		toggleVisibility("#m_2_2", ar2_2, 480);
	});
	$("#h_2_1").click(function() {
		toggleVisibility("#m_2_1", ar2_1, 420);
	});
});