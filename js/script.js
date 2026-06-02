$(document).ready(function() {

    $(".menu-toggle").click(function() {
        $(".navbar").toggleClass("active");
        $(".navbar > li").removeClass("open");
    });

    $(".navbar > li.has-submenu > a").click(function(event) {
        if (!window.matchMedia("(max-width: 991px)").matches) {
            return;
        }

        event.preventDefault();

        const parentItem = $(this).parent();
        parentItem.toggleClass("open").siblings().removeClass("open");
    });

});