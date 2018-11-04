$(document).ready(function () {

  var change_img_time = 400000,
      transition_speed = 400;

  var listItems = $("#slider-olympiad").children('li'),
      dotItems = $('#dots-olympiad').children('li'),
      listLen = listItems.length,
      current,
      changeTimeout;

  function moveTo(newIndex) {

    var i = newIndex;

    if (newIndex == 'olympiad__prev') {
        i = (current > 0) ? (current - 1) : (listLen - 1);
    }

    if (newIndex == 'olympiad__next') {
        i = (current < listLen - 1) ? (current + 1) : 0;
    }

    dotItems.removeClass('active-olympiad')
            .eq(i).addClass('active-olympiad');

    listItems.fadeOut(transition_speed)
             .eq(i).fadeIn(transition_speed);

    current = i;

    //resets time interval if user clicks on slider dot; then begin automated slider
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(function() { moveTo('olympiad__next'); }, change_img_time);
  };

  // Event handlers
  $("#dots-olympiad li").click(function () {
    var i = $('#dots-olympiad li').index(this);
    moveTo(i);
  });

  $("#olympiad__prev").click(function () {
    moveTo('olympiad__prev');
  });

  $("#olympiad__next").click(function () {
    moveTo('olympiad__next');
  });

  //initialize slider on load
  moveTo('olympiad__next');
});