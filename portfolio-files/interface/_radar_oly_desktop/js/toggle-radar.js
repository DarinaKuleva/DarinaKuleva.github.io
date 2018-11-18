var x760 = window.matchMedia("(min-width: 768px)");

$(document).ready(function () {

  if (x760.matches)
  {
	var transition_speed = 100;

	var listItems = $("#button-radar").children('li'),
		listLen = listItems.length,
		current,
		changeTimeout;

	function switchTo(newIndex) 
	{
		var i;
		var img_src;
		var text;
		var text_id = "#radar-text-tablet";
		var img_id = "#radar-img-tablet";

		if (newIndex == 'btnWindow') {
			i = 0;
			img_src = "/img/radar.png";
			text = "Window text";
		}

		if (newIndex == 'btnOpt') {
			i = 1;
			img_src = "/img/Radar_Options.png";
			text = "Option text";
		}
		
		if (newIndex == 'btnScan') {
			i = 2;
			img_src = "/img/Radar_Scanner.png";
			text = "Scanner text";
		}

		listItems.fadeTo(transition_speed, 0.5)
			.eq(i).fadeTo(transition_speed, 1);
			
		$(img_id).css({"opacity":"0"});
		$(text_id).css({"opacity":"0"});
		
		$(img_id).src = img_src;
		$(text_id).text(text);
		
		$(img_id).fadeTo(800, 1);
		$(text_id).fadeTo(800, 1);
	};

	// Event handlers

	$("#btnWindow").click(function () {
		switchTo('btnWindow');
	});

	$("#btnOpt").click(function () {
		switchTo('btnOpt');
	});
	  
	$("#btnScan").click(function () {
		switchTo('btnScan');
	});

	//initialize slider on load
	switchTo('btnWindow');
  }
});