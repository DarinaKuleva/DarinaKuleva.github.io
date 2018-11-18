var x360 = window.matchMedia("(max-width: 760px)");

$(document).ready(function () {

  if (x360.matches)
  {
	  var transition_speed = 400;
	  
	  //var baseHeight = 500 - +$("#slider-h-1").css("height").slice(0, -2);

	  var listItems = $("#slider-radar").children('li'),
		  listLen = listItems.length,
		  current;

	  function moveTo(newIndex) {

		var i = newIndex;

		if (newIndex == 'radar__prev') {
			i = (current > 0) ? (current - 1) : (listLen - 1);
		}

		if (newIndex == 'radar__next') {
			i = (current < listLen - 1) ? (current + 1) : 0;
		}
		
		switch (i)
		{
			case 0:
				$("#slider-radar").css("height", 500 + "px");
			break;
			case 1:
				$("#slider-radar").css("height", 430.65 + "px");
			break;
			case 2:
				$("#slider-radar").css("height", 593.999 + "px");
			break;
		}	

		listItems.fadeOut(transition_speed)
				 .eq(i).fadeIn(transition_speed);
				 
		
				 
		current = i;

	  };

	  // Event handlers
	  
	  $("#radar__prev").click(function () {
		moveTo('radar__prev');
	  });

	  $("#radar__next").click(function () {
		moveTo('radar__next');
	  });

	  //initialize slider on load
	  moveTo('radar__next');
  }
});