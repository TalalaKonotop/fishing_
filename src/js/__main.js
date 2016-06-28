$(document).ready(function() {


    //Fixed Top
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 65) {
    //         $('.top').addClass("fix-top");
    //
    //     } else {
    //         $('.top').removeClass("fix-top");
    //
    //     }
    // });

    // Button back top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-top').css("display", "block");

        } else {
            $('#back-top').css("display", "none");

        }
    });
    $('#back-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);

    });

    // Wow
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    // Slider
    //
    // var swiper = new Swiper('.gallery-top', {
    //     pagination: '.swiper-pagination',
    //     slidesPerView: 3,
    //     paginationClickable: true,
    //     spaceBetween: 30
    // });
    // //
    // // var galleryTop = new Swiper('.gallery-top', {
    // //     nextButton: '.swiper-button-next',
    // //     prevButton: '.swiper-button-prev',
    // //     spaceBetween: 10,
    // // });
    //
    // var review_slider = new Swiper('.review_slider', {
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     spaceBetween: 10,
    // });
    //
    //
    // var galleryThumbs = new Swiper('.gallery-thumbs', {
    //     spaceBetween: 10,
    //     centeredSlides: true,
    //     slidesPerView: 'auto',
    //     touchRatio: 0.2,
    //     slideToClickedSlide: true
    // });
    // // galleryTop.params.control = galleryThumbs;
    // // galleryThumbs.params.control = galleryTop;


    // Owl carusel

    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 3,
        itemsDesktop: [1240, 3],
        itemsDesktopSmall: [992, 3]

    });
    $("#owl-demo2").owlCarousel({
        autoPlay: 7000,
        // navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        //
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });






});
