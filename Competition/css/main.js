var slider = $('.bxslider').bxSlider({
        auto: true,
        mode: 'fade',
        pager: false,
        pause: 13000,
        controls: false,
        adaptiveHeight: true,
        touchEnabled: true,
        onSlideAfter: function () {
            rearrangeArrows();
        },
        onSliderLoad: function () {
            rearrangeArrows();
        }
    });

    $('#arrowNEXT').click(function () {
        slider.goToNextSlide();
    });
    $('#arrowPREV').click(function () {
        slider.goToPrevSlide();
    });