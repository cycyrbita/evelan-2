
$(document).ready(function () {
    $('.sostav__name').click(function() {
        if($(this).parent('.sostav__list-item').hasClass('active')) {
            $(this).parent('.sostav__list-item').removeClass('active')
            $(this).next().fadeOut()
        } else {
            $(this).parent('.sostav__list-item').addClass('active')
            $(this).next().fadeIn()
        }
    })

    Start();

    $('.js-commits__box').owlCarousel({
        loop: true,
        autoHeight: true,
        margin: 40,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },

            1280 : {
                items: 4
            }
        }
    });

    function Start() {
        var m = 12,
            s = 0;

        if (m <= 9) {
            m = "0" + m;
        };

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }
            }

            $('.form__time-item:nth-of-type(2) span:first-child').text(m);
            $('.form__time-item:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    };

    AOS.init({
        offset: 200
    });

    function twent() {
        $(".event__body").twentytwenty({
            no_overlay: true,
            orientation: 'vertical'
        });
    }

    setTimeout(twent, 1000);
});