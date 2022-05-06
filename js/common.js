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

        // console.log($("#gnb > li.on").find("li.on").text());

        var depth1 = $("#gnb > li.on").index();
        var depth2 = $("#gnb > li.on").find("li.on").index();

        console.log(depth1, depth2);

        if(depth1 != -1 && depth2 != -1) {
            $("#m_nav .gnb > li").eq(depth1).addClass("on").find(".subMenu").show().find("li").eq(depth2).addClass("on");
        }
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


    // mobile sub menu position
    var subMenu = $("#gnb > li.on .sub_menu");
    var subMenuItem = subMenu.find("li");
    var subMenuItemOn = subMenu.find("li.on");
    var subMenuHarf = subMenu.width()/2;
    var pos;
    var listWidth=0;
    var targetLeft = 0;
    
    subMenuItem.each(function(){ listWidth += $(this).outerWidth(); });

    for (var i=0; i<subMenuItemOn.index(); i++) {
        targetLeft += subMenuItem.eq(i).outerWidth();
    }

    var selectTargetPos = (targetLeft + subMenuItemOn.outerWidth()/2);

    if (selectTargetPos <= subMenuHarf) { // left
        pos = 0;
    } else if (listWidth - selectTargetPos <= subMenuHarf) {
        pos = listWidth;
    } else {
        pos = selectTargetPos - subMenuHarf;
    }

    subMenu.animate({scrollLeft: pos}, 0);


    // 서비스 준비중 페이지
    $(".etc_service").load("/service.html");


});