    $(document).ready(function() {
        // TESTIMONIAL JS
        $('.client-single').on('click', function(event) {
            event.preventDefault();
            var active = $(this).hasClass('active');
            var parent = $(this).parents('.testi-wrap');
            if (!active) {
                var activeBlock = parent.find('.client-single.active');
                var currentPos = $(this).attr('data-position');
                var newPos = activeBlock.attr('data-position');
                activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
                activeBlock.attr('data-position', currentPos);
                $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
                $(this).attr('data-position', newPos);
            }
        });

        // SLICK NAV
        $('#menu').slicknav({
            prependTo: '.main-header .main-menu',
            closeOnClick: true, // Close menu when a link is clicked.
        });

        // STICKY
        $('.main-header').sticky({
            topSpacing: 0,
        });

        // scroll top
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll < 500) {
                $(".bottomToup").removeClass("active-top");
            } else {
                $(".bottomToup").addClass("active-top");
            }
        });
        // wow
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });
        wow.init();
        // preloader
        jQuery(window).load(function() {
            $(".loader").fadeOut(1000);
        });
        // input date and select class add remove
        $('[data-toggle="datepicker"]').datepicker({
            format: 'dd-mm-yyyy'
        });

        $(".select").click(function() {
            $(this).addClass('').removeClass('empty');
        });

    });