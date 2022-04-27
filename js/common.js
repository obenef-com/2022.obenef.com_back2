$(function() {
    // language pack
    $("#lang_pack h6").on("click", function() {
        var state = $(this).next().css("display");

        if(state == 'none') {
            $(this).next().slideDown();
            $(this).find("span").css("transform", "rotate(180deg)");
        } else {
            $(this).next().slideUp();
            $(this).find("span").css("transform", "rotate(0deg)");
        }
    });
    $("#lang_pack ul li a").on("click", function() {
        $(this).parents("ul").slideUp();
        $(this).parents("ul").prev().find("span").css("transform", "rotate(0deg)");
    });


    // mobile nav
    $(".m_nav_btn").on("click", function() {
        $("#m_nav").addClass("on");
        $("#m_nav .gnb > li").removeClass().find(".subMenu").hide();
    });
    $("#m_nav button").on("click", function() {
        $("#m_nav").removeClass("on");
    });

    $("#m_nav .lang li").on("click", function() {
        var idx = $(this).index();
        var lang = $("#m_nav .lang li");

        lang.removeClass();
        lang.eq(idx).addClass("on");
    });

    $("#m_nav .gnb > li").each(function() {
        $(this).on("click", function() {
            $(this).siblings().removeClass().find(".subMenu").slideUp();
            $(this).addClass("on").find(".subMenu").slideDown();
        });
    });

    $("#m_nav .gnb .subMenu li a").on("click", function() {
        $(this).parent().addClass("on");
    });


    // 서비스 준비중 페이지
    $(".etc_service").load("/service.html");


});