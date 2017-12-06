$(document).ready(function () {
    "use strict";

    // var s = skrollr.init({});
    //  ----- SLIDER -----

    // SLICK SLIDER
    $(".slider-full").slick({
        prevArrow: "<div class='arrow left'><img src='img/illus/icons/arrow-left.svg'></div>",
        nextArrow: "<div class='arrow right'><img src='img/illus/icons/arrow-right.svg'></div>",
        dots: false

    });

    // ----- SELECT -----

    //CHOSEN
    $(".chosen-select").chosen({
        disable_search_threshold: 10,
        no_results_text: "Нічого не знайдено"
    });

    // ----- MODAL -----

    // MODAAL PLUGIN
    $(".inline").modaal();

    // ----- ACCORDION -----
    $(function () {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: "content"
        });
    });

    // ----- TABS -----
    $(function () {
        $("#tabs").tabs();
    });

    // SCROLLING CLASS CHANGE
    $(window).scroll(function () {
        if ($(this).scrollTop() > 67) {
            $("nav").addClass("nav-scroll");
        }
        else {
            $("nav").removeClass("nav-scroll");
        }
    });
});

// !!! RESPONSIVE SCRIPTS !!!

$(window).on('load resize', function() {
    'use strict';
    if (window.matchMedia("(max-width: 1024px)").matches) {
        skrollr.destroy(); // skrollr.init() returns the singleton created above

    } else if (window.matchMedia("(min-width: 1024px)").matches) {
        skrollr.init();
    }

    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $("nav").addClass("nav-scroll");
    } else {
        $("nav").removeClass("nav-scroll");
    }



});




