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
		var text_id = "radar-text-tablet";
		var img_id = "#radar-img-tablet";

		if (newIndex == 'btnWindow') {
			i = 0;
			img_src = "./img/radar.png";
			text = "Detect players beforehand. Either they are war clan members or in PvP / PK mode.";
		}

		if (newIndex == 'btnOpt') {
			i = 1;
			img_src = "./img/Radar_Options.png";
			text = "<br>Control players by name. 9 slots available. Double click on player to point an arrow at him";
		}
		
		if (newIndex == 'btnScan') {
			i = 2;
			img_src = "./img/Radar_Scanner.png";
			text = "<br>While radar detects players by action and ignores them in case of AFK, 'scanning' function let you scan the area around even for AFK players.<br><br> While scanning you can experience moderate FPS loss on slow machines though<br>";
		}

		listItems.fadeTo(transition_speed, 0.5)
			.eq(i).fadeTo(transition_speed, 1);
			
		$(img_id).css({"opacity":"0"});
		$(text_id).css({"opacity":"0"});
		
		$(img_id).attr("src", img_src);
		document.getElementById(text_id).innerHTML = text;
		
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