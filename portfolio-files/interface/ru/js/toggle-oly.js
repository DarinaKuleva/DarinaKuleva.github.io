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
			img_src = "https://bymerc.xyz/deadz/img/olimpiad.png";
			text = "<br>Считает входящий и исходящий урон с 85-90% c точностью (учитываются такие сложные моменты, как отравления и урон с Пати УД). <br><br> Таймер боя помогает ориентироваться в том, сколько времени осталось на бой.<br><br> Статы противника дают информацию о его типе.<br><br> Таймеры баффов позволяют отлично контролировать противника в бою.<br><br> И наконец, отображение скорости бега, каста и дистанция до противника.<br>";
		}

		if (newIndex == 'btnTarget') {
			i = 1;
			img_src = "https://bymerc.xyz/deadz/img/OlyTarget.png";
			text = "<br>HP и CP теперь в цифрах.<br> Кастбар противника привязывается к этому окну.";
		}
		
		if (newIndex == 'btnItems') {
			i = 2;
			img_src = "https://bymerc.xyz/deadz/img/OlyItems_full.png";
			text = "Новое окно для контроля ваших итемов, таких как: ожерелье, кольцо, ремень, оружие и щит/сигиль";
		}
		
		if (newIndex == 'btnSumm') {
			i = 3;
			img_src = "https://bymerc.xyz/deadz/img/OlySummon_Tablet.png";
			text = "<br>Увеличены размер бафов и HP бар.<br> Включены таймеры бафов.";
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