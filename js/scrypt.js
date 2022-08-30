$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger,.header__navigation-search').toggleClass('active');
        $('body').toggleClass('lock');
    });
});