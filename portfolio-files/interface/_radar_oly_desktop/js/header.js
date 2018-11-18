$(document).ready(function () {
    var navPos = $('.nav').offset().top;

    // on scroll
    $(window).scroll(function() {

    // get scroll position from top of the page
    var scrollPos = $(this).scrollTop();

    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
        $('.nav').addClass('nav--fixed');
    } else {
        $('.nav').removeClass('nav--fixed');
    }

    });
});



