$(document).ready(function(){

    var $first = $('.tab_1'),
        $second = $('.tab_2'),
        $third = $('.tab_3'),
        $first_wr = $('.wrapper_1'),
        $second_wr = $('.wrapper_2'),
        $third_wr = $('.wrapper_3');

    $first.click(function(){
        $first.addClass('active');
        $second.removeClass('active');
        $third.removeClass('active');
        $first_wr.show();
        $second_wr.hide();
        $third_wr.hide();
    });

    $second.click(function(){
        $second.addClass('active');
        $first.removeClass('active');
        $third.removeClass('active');
        $('.wrapper_2').show();
        $first_wr.hide();
        $third_wr.hide();
    });

    $third.click(function(){
        $third.addClass('active');
        $first.removeClass('active');
        $second.removeClass('active');
        $third_wr.show();
        $first_wr.hide();
        $second_wr.hide();
    });

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    // Slider

    var swiper = new Swiper('.gallery-top', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
    });
    //
    // var galleryTop = new Swiper('.gallery-top', {
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     spaceBetween: 10,
    // });

    var review_slider = new Swiper('.review_slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });


    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

});

