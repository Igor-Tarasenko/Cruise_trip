$(document).ready(function() {
    //show btn to scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.toTop').fadeIn();
        }
        else {
            $('.toTop').fadeOut();
        }
    });
    //scroll to current position
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $(".main-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        autoplay: false,
        autoplaySpeed: 2000
    });
    /*$(".slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });*/
    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").addClass("active");
    });
    $(document).mouseup(function (e) {
        var div = $(".navbar-collapse");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass("active");
        }
    });
    /*$(".slider").mCustomScrollbar({
        setLeft: "0",
        axis:"x"
    });*/
});
