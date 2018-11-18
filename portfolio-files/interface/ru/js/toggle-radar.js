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
			img_src = "https://bymerc.xyz/deadz/img/radar.png";
			text = "Находит врагов вокруг вас. Варов или ПвП / ПК.";
		}

		if (newIndex == 'btnOpt') {
			i = 1;
			img_src = "https://bymerc.xyz/deadz/img/Radar_Options.png";
			text = "Находи игроков по нику. Доступно 9 слотов. Двойной клик по игроку, и стрелка укажет направление";
		}
		
		if (newIndex == 'btnScan') {
			i = 2;
			img_src = "https://bymerc.xyz/deadz/img/Radar_Scanner.png";
			text = "Радар определяет игроков по действиям и игнорирует их, если они АФК, функция 'сканирования' позволяет находить даже АФК игроков.<br><br> Во время сканирования вы можете наблюдать падения ФПС на слабых ПК";
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