$(function () {
    size = 32;//по идее размер будет 666, тк в макете так задано
    x = 12;//изначально по макету 12 квартир показано
    $('#search-list').load('apartment.html #external-list section:lt('+x+')');

    $('#reslink').click(function (e) {
        e.preventDefault();

        x = (x + 20 <= size) ? x + 20 : size;//добавлять будеткаждый раз по 20 квартир
        $('#search-list').load('apartment.html #external-list section:lt('+x+')');
    });
});