var x760 = window.matchMedia("(min-width: 768px)");

$(document).ready(function () {

  if (x760.matches)
  {
	var transition_speed = 100;

	var listItems = $("#button-olympiad").children('li'),
		listLen = listItems.length,
		current,
		changeTimeout;

	function switchTo(newIndex) 
	{
		var i;
		var img_src;
		var text;
		var text_id = "#oly-text-tablet";
		var img_id = "#oly-img-tablet";

		if (newIndex == 'btnWindow') {
			i = 0;
			img_src = "/img/olympiad.png";
			text = "Window text";
		}

		if (newIndex == 'btnTarget') {
			i = 1;
			img_src = "/img/olympiad.png";
			text = "Target text";
		}
		
		if (newIndex == 'btnItems') {
			i = 2;
			img_src = "/img/olympiad.png";
			text = "Items text";
		}
		
		if (newIndex == 'btnSumm') {
			i = 3;
			img_src = "/img/olympiad.png";
			text = "Summon text";
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

	$("#btnWindowOly").click(function () {
		switchTo('btnWindow');
	});

	$("#btnTarget").click(function () {
		switchTo('btnTarget');
	});
	  
	$("#btnItems").click(function () {
		switchTo('btnItems');
	});
	
	$("#btnSumm").click(function () {
		switchTo('btnSumm');
	});

	//initialize slider on load
	switchTo('btnWindow');
  }
});