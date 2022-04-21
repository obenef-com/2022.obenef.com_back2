$(function() {
    var header = $("header").hasClass("on");
    console.log(header);

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