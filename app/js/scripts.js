$(document).ready(function () {
    "use strict";

    $("#menu-trigger").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $(".nav-panel").slideToggle();

        if($(this).hasClass('open')) {
            disableScroll();
        } else {
            enableScroll();
        }
    });

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) { // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }


    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.menu > li > a').click(function () {
            $(".nav-panel").slideToggle();
            $("#menu-trigger").toggleClass("open");
            enableScroll();
        });
    }
});
/**
 * Created by alexrewrew on 09.09.17.
 */

// studiatutoria@gmail.com

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




