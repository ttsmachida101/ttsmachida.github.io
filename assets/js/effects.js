

$(function () {
    'use strict';
    $(window).scroll(function () {
        var scrollval = $(window).scrollTop();
        if (scrollval > 50) {
            $(".site-main").css("opacity", 1);
            $("#top2").css("opacity", 1);
        }
     else {
            $(".site-main ").css("opacity", 0);
            $(".para").css("opacity", 1);
        }
    });
});