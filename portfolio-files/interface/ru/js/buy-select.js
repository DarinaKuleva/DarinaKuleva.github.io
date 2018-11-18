var x = window.matchMedia("(min-width: 1024px)")

$(document).ready( function() {
	
	if (x.matches)
	{
		$( "#opt1" ).hover(
			function() {
				$( this ).addClass("animate_1");
				$( "#opt2" ).addClass("animate_1_2");
				$( "#opt3" ).addClass("animate_1_3");
				}, function() {
				$( this ).removeClass("animate_1");
				$( "#opt2" ).removeClass("animate_1_2");
				$( "#opt3" ).removeClass("animate_1_3");
			}
		);
		
		$( "#opt3" ).hover(
			function() {
				$( this ).addClass("animate_3");
				$( "#opt2" ).addClass("animate_3_2");
				$( "#opt1" ).addClass("animate_3_1");
				}, function() {
				$( this ).removeClass("animate_3");
				$( "#opt2" ).removeClass("animate_3_2");
				$( "#opt1" ).removeClass("animate_3_1");
			}
		);
	}
});