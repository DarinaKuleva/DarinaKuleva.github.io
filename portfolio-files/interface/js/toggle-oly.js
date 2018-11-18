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
		var text_id = "oly-text-tablet";
		var img_id = "#oly-img-tablet";

		if (newIndex == 'btnWindow') {
			i = 0;
			img_src = "./img/olimpiad.png";
			text = "<br>Counts incoming and outcoming damage with 85-90% accuracy (such hard cases as Poison and damage from Shield of Faith are taken into account). <br><br> Countdown timer helps you to be informed how much time you are in a fight.<br><br> Opponent’s stats giving you an idea what type of player against you.<br><br> Used skill timer is a great way to control your foe while fighting.<br><br> And finally an optional control of enemy’s moving, casting speed and distance.<br>";
		}

		if (newIndex == 'btnTarget') {
			i = 1;
			img_src = "./img/OlyTarget.png";
			text = "<br>HP and CP are now in numbers as well.<br> Opponent’s cast bar can be anchored to this window.";
		}
		
		if (newIndex == 'btnItems') {
			i = 2;
			img_src = "./img/OlyItems_full.png";
			text = "New window to control your most switchable equipped items such as: necklace, ring, belt, weapon and shield";
		}
		
		if (newIndex == 'btnSumm') {
			i = 3;
			img_src = "./img/OlySummon_Tablet.png";
			text = "<br>Increased buff and HP bar size for better control.<br> Buff timers are enabled.";
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