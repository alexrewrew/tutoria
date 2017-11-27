$(document).ready(function () {
    "use strict";

    // var controller = new ScrollMagic.Controller();
    //
    // new ScrollMagic.Scene({triggerElement: ".section-valued", duration: 300, top: -200})
    //     .setPin(".birds-back")
    //     .addTo(controller);
    var s = skrollr.init();


    //  ----- SLIDER -----

    // SLICK SLIDER
    $(".slider-full").slick({
        // slide: ".slide",
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
    // $(".chosen-image").chosenImage({disable_search_threshold: 10});

    // ----- MODAL -----

    // MODAAL PLUGIN
    // $(".inline").modaal();

    // ----- ANIMATION -----

    // WOW JS
    // new WOW().init();


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

    // ----- SCROLLSPY -----

    // $(function(){ // on document load
    //     $('.menu').ddscrollSpy({ // initialize first demo
    //         scrolltopoffset: -50
    //     });
    // });

    // SCROLLING CLASS CHANGE
    $(window).scroll(function () {
        if ($(this).scrollTop() > 67) {
            $("nav").addClass("nav-scroll");
        }
        else {
            $("nav").removeClass("nav-scroll");
        }
    });

    // ANCHOR LINKS SCROLLING
    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top - 70;
        $("body,html").animate({
            scrollTop: top
        }, 1500);
    });
});

// !!! RESPONSIVE SCRIPTS !!!

// $(window).on('load resize', function() {
//     'use strict';
//     if (window.matchMedia("(max-width: 767px)").matches) {
//
//     } else if (window.matchMedia("(min-width: 768px)").matches) {
//
//     }
// });


