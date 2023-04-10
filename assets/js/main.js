(function ($) {
    
    "use strict"
    $(document).ready(function () {

        // menu toggle bar
        $(".menu-toggle-bar").on('click', function(){
            $(this).toggleClass("active");
        });

        // mobile menu toogle bar
        $(".menu-toggle-bar").on('click', function(){
            $(".mobile-menu").toggleClass("active");
        });

    });

    $(window).on('scroll', function () {

        // back to top scroll
        var ScrollTop = $('.back-to-top');

        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // back to top animate
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

    });

})(jQuery);
