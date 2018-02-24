$(document).ready(function () {
    "use strict";

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
        $('.dropdown-link').removeClass('active');
        $('.dropdown-panel').removeClass('visible');
    });

    $('.menu li a').mouseover(function () {
        if ($(this).hasClass('dropdown-link')) {
            $(this).addClass('active');
            $('.dropdown-panel').addClass('visible');
        } else {
            $('.dropdown-link').removeClass('active');
            $('.dropdown-panel').removeClass('visible');
        }
    });
    $('.dropdown-panel').mouseleave(function () {
        $(this).removeClass('visible');
        $('.dropdown-link').removeClass('active');
    })
});

// !!! RESPONSIVE SCRIPTS !!!

$(window).on('load resize', function () {
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




