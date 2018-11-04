$(document).ready(function () {

  var change_img_time = 400000,
      transition_speed = 400;

  var listItems = $("#slider-radar").children('li'),
      dotItems = $('#dots-radar').children('li'),
      listLen = listItems.length,
      current,
      changeTimeout;

  function moveTo(newIndex) {

    var i = newIndex;

    if (newIndex == 'radar__prev') {
        i = (current > 0) ? (current - 1) : (listLen - 1);
    }

    if (newIndex == 'radar__next') {
        i = (current < listLen - 1) ? (current + 1) : 0;
    }

    dotItems.removeClass('active-radar')
            .eq(i).addClass('active-radar');

    listItems.fadeOut(transition_speed)
             .eq(i).fadeIn(transition_speed);

    current = i;

    //resets time interval if user clicks on slider dot; then begin automated slider
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(function() { moveTo('radar__next'); }, change_img_time);
  };

  // Event handlers
  $("#dots-radar li").click(function () {
    var i = $('#dots-radar li').index(this);
    moveTo(i);
  });

  $("#radar__prev").click(function () {
    moveTo('radar__prev');
  });

  $("#radar__next").click(function () {
    moveTo('radar__next');
  });

  //initialize slider on load
  moveTo('radar__next');
});