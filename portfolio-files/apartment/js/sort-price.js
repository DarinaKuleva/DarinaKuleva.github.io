$(function(){

    var ascending = false;

    function convertToNumber(value) {
        return parseFloat(value.replace('$', ''));
    }

    function AscendingSort(type)
    {
        var sorted = $('.search__item').sort(function(a, b) {
        return (ascending ==
            (convertToNumber($(a).find(type).html()) < convertToNumber($(b).find(type).html()))) ? 1 : -1;
        });

        ascending = ascending ? false : true;

        $('#search-list').html(sorted); // Modified
    }

    $('#price-btn').click(function() {
        AscendingSort('.price-hid');

    });

    $('#room-btn').click(function() {
        AscendingSort('.room-hid');
    });

});
