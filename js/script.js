$(document).ready(function() {
    function syncMenuState() {
        var isActive = $('.navbar').hasClass('active');
        $('.menu-toggle')
            .toggleClass('active', isActive)
            .attr('aria-label', isActive ? 'Close menu' : 'Open menu');
        $('.menu-toggle i')
            .toggleClass('fa-bars', !isActive)
            .toggleClass('fa-xmark', isActive);
    }

    $('.menu-toggle').click(function() {
        $('.navbar').toggleClass('active');
        $('.navbar li').removeClass('open');
        syncMenuState();
    });

    $('.navbar > li.has-submenu > a').click(function(event) {
        if ($(window).width() > 991) {
            return;
        }

        event.preventDefault();

        $(this).parent().toggleClass('open').siblings().removeClass('open');
    });

    $(window).on('resize', function() {
        if ($(window).width() > 991) {
            $('.navbar').removeClass('active');
            $('.navbar li').removeClass('open');
            syncMenuState();
        }
    });

    syncMenuState();
});
