$(function() {
    var header = $("header").hasClass("on");

    // language pack
    $("#lang_pack h6").on("click", function() {
        var state = $(this).next().css("display");

        if(state == 'none') {
            $(this).next().slideDown();

            if(header) {
                $(this).css("background", "url(/img/common/arrow_up_w.svg) no-repeat right center");
            } else {
                $(this).css("background", "url(/img/common/arrow_up.svg) no-repeat right center");
            }
        } else {
            $(this).next().slideUp();

            if(header) {
                $(this).css("background", "url(/img/common/arrow_down_w.svg) no-repeat right center");
            } else {
                $(this).css("background", "url(/img/common/arrow_down.svg) no-repeat right center");
            }
        }
    });
    $("#lang_pack ul li a").on("click", function() {
        $(this).parents("ul").slideUp();

        if(header) {
            $(this).parents("ul").prev().css("background", "url(/img/common/arrow_down_w.svg) no-repeat right center");
        } else {
            $(this).parents("ul").prev().css("background", "url(/img/common/arrow_down.svg) no-repeat right center");
        }
    });


    // fullpage
    /*
    $("#fullpage").fullpage({
        anchors: ['Page1', 'Page2', 'Page3'],
        scrollOverflow: true,
        navigation: true,
        navigationPosition: 'right'
    });
    */



    function obenef() {
        var w = $(window).innerWidth() || window.innerWidth;

        if(w < 1100) {

        } else {

        }
    }

    $(window).resize(function() {
        obenef();
    });

    obenef();
});