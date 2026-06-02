$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.navbar').toggleClass('active');
        $('.navbar li').removeClass('open');
    });

    $('.navbar > li.has-submenu > a').click(function(event) {
        if ($(window).width() > 991) {
            return;
        }

        event.preventDefault();

        $(this).parent().toggleClass('open').siblings().removeClass('open');
    });
});