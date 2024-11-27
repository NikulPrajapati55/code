$(document).ready(function() {
    $("h1").html("Parallax");
    $(window).on('scroll', function() {
        yPos = window.pageYOffset;
        shift = yPos * 0.5 + 'px';
        $('#image').css('top', shift);
    });
    var stickyHeaders = (function() {

        var $window = $(window),
            $stickies;

        var load = function(stickies) {

            if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

                $stickies = stickies.each(function() {

                    var $thisSticky = $(this).wrap('<div class="followWrap" />');

                    $thisSticky
                        .data('originalPosition', $thisSticky.offset().top)
                        .data('originalHeight', $thisSticky.outerHeight())
                        .parent()
                        .height($thisSticky.outerHeight());
                });

                $window.off("scroll.stickies").on("scroll.stickies", function() {
                    _whenScrolling();
                });
            }
        };

        var _whenScrolling = function() {

            $stickies.each(function(i) {

                var $thisSticky = $(this),
                    $stickyPosition = $thisSticky.data('originalPosition');

                if ($stickyPosition <= $window.scrollTop()) {

                    var $nextSticky = $stickies.eq(i + 1),
                        $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

                    $thisSticky.addClass("fixed");

                    if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {

                        $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
                    }

                } else {

                    var $prevSticky = $stickies.eq(i - 1);

                    $thisSticky.removeClass("fixed");

                    if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {

                        $prevSticky.removeClass("absolute").removeAttr("style");
                    }
                }
            });
        };

        return {
            load: load
        };
    })();

    $(function() {
        stickyHeaders.load($(".followMeBar"));
    });
    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 10) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }
    });
    $(".menu-btn a").click(function() {
        $(".nav").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.nav').on('click', function() {
        $(".nav").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });


    var nav = $('#menu > ul > li');
    nav.find('li').hide();
    nav.click(function() {
        nav.not(this).find('li').hide();
        $(this).find('li').slideToggle();
    });
    $(function() {
        $('#menu input').click(function() {
            $('#menu ul').slideToggle()
        });
    });
});