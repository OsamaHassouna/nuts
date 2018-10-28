(function ($) {
    // USE STRICT
    "use strict";
    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div data-loader="ball-scale"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
     /*[ Slick ]
    ===========================================================*/
    $('.slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        appendArrows: $('.wrap-slick .slider-arrows'),
        prevArrow:'<a href="#" class="arrow-slick prev-slick"><svg viewBox="0 0 23.22 21.49" id="slider-arrow-svg"><use xlink:href="#slider-arrow"></use></svg></a>',
        nextArrow:'<a href="#" class="arrow-slick next-slick"><svg viewBox="0 0 23.22 21.49" id="slider-arrow-svg"><use xlink:href="#slider-arrow"></use></svg></a>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                rows: 1,
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick2').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots:true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
})(jQuery);