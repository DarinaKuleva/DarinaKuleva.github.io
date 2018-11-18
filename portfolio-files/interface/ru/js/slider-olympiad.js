var x360 = window.matchMedia("(max-width: 760px)");

$(document).ready(function () {

  if (x360.matches)
  {
	  	  var transition_speed = 400;

	  var listItems = $("#slider-olympiad").children('li'),
		  listLen = listItems.length,
		  current;

	  function moveTo(newIndex) {

		var i = newIndex;

		if (newIndex == 'olympiad__prev') {
			i = (current > 0) ? (current - 1) : (listLen - 1);
		}

		if (newIndex == 'olympiad__next') {
			i = (current < listLen - 1) ? (current + 1) : 0;
		}
		
		switch (i)
		{
			case 0:
				$("#slider-olympiad").css("height", 956.4 + "px");
			break;
			case 1:
				$("#slider-olympiad").css("height", 435.59 + "px");
			break;
			case 2:
				$("#slider-olympiad").css("height", 463.799 + "px");
			break;
			case 3:
				$("#slider-olympiad").css("height", 300.4 + "px");
			break;
		}

		listItems.fadeOut(transition_speed)
				 .eq(i).fadeIn(transition_speed);

		current = i;
	  };

	  // Event handlers

	  $("#olympiad__prev").click(function () {
		moveTo('olympiad__prev');
	  });

	  $("#olympiad__next").click(function () {
		moveTo('olympiad__next');
	  });

	  //initialize slider on load
	  moveTo('olympiad__next');
  }
});