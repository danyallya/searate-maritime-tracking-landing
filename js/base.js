$(window).resize(function () {
    resizewidth();
});

function resizewidth() {
    var s = $('.empty-line').width();

    $('.full-line img').css("width", s);
};
$(document).ready(function () {

    resizewidth();


    //$("#sea").click(function () {
    //    $('.sec-one').css('background-image', ' url("image/bac-sec-tow.png")');
    //});


    $(".right-part .item").click(function () {
        var x = $(this).attr("data-background");
        $('.sec-one').css('background-image', 'url("' + x + '")');
    });

    $(".fix-menu").click(function () {

        $('#main-fix-menu').fadeIn();
        $('#main-fix-menu').css('height', '295');
    });
    //$(document).scroll(function () {
    //
    //    $('#bottom .items').css('height', '0');
    //});
    $("#main-fix-menu .item").click(function () {

        $('#main-fix-menu').css('height', '0');
    });

    $("#header .header-img-btn").click(function () {


        $("#menu").slideDown(1000, function () {

            $("#menu .bottom")
                .css('opacity', 0)

                .animate(
                {opacity: 1},

                {queue: false, duration: 1500});

        });
        $("#top .logo,#top .logo .img,#top .logo .text").slideDown(1000, function () {

            $(this)
                .css('opacity', 0)

                .css('float', "none")
                .css('margin', "0 auto")

                .animate(
                {opacity: 1},

                {queue: false, duration: 3000});

        });
        $('#bottom .menu').removeClass("fadeInDown");
        $('#bottom .menu').addClass("fadeOutUp");
        $('#top .sign-up').removeClass("fadeInDown");
        $('#top .sign-up').addClass("fadeOutUp");
        $('#header .header-img-btn').css('display', 'none');
        $('#header .header-img-back').css('display', 'block');
        //$('#top').css('opacity', '0');
        //$('#bottom').css('opacity', '0');
        //$('#top').css('height', '0');
        //$('#top').css('display', 'none');
        //$('#bottom').css('display', 'none');

    });


    $("#header .header-img-back").click(function () {
        $("#menu").slideUp(700, function () {
            $("#menu .bottom")
                .css('opacity', 1)
                .animate(
                {opacity: 0},

                {queue: false, duration: 400})
                .animate(
                {"margin-top": "-20px"},

                {queue: false, duration: 400}
            );

            $("#bottom .menu")
                .css('opacity', 1)
                //.css('width', '100%')
                .css('display', 'table')
            ;
        });
        $("#top .logo,#top .logo .img,#top .logo .text").slideDown(1000, function () {

            $("#top .logo")
                .css('opacity', 0)

                .css('float', "left")
                .css('margin', "0")


                .animate(
                {opacity: 1},

                {queue: false, duration: 1500});
            $("#top .logo .text")
                .css('opacity', 0)

                .css('float', "left")
                .css('margin-top', "17px")
                .css('margin-left', "5px")



                .animate(
                {opacity: 1},

                {queue: false, duration: 1500});
            $("#top .logo .img")
                .css('opacity', 0)

                .css('float', "left")
                .css('margin-top', "5px")
                .css('margin-left', "5px")



                .animate(
                {opacity: 1},

                {queue: false, duration: 1500});

        });

        $('#bottom .menu').removeClass("fadeOutUp");
        $('#bottom .menu').addClass("fadeInDown");
        $('#top .sign-up').removeClass("fadeOutUp");
        $('#top .sign-up').addClass("fadeInDown");
        $('#header .header-img-btn').css('display', 'block');
        $('#header .header-img-back').css('display', 'none');


    });

    $(".sec-four .main .main-item .items").each(function () {
        var y = $(this).attr("data-value");

        $(this).find('.full-line .ship').text(y + "%");

        $(this).find('.full-line').css('width', y + "%")
    });
    $(".Container").click(function () {
        if ($(".Container .list").hasClass("fadeInDown")) {

            $(".Container .list")
                .addClass("fadeOutUp")
                .removeClass("fadeInDown")
        }
        else {
            $(".Container .list")
                .css('display', 'block')
                .addClass("fadeInDown")
                .removeClass("fadeOutUp")
        }

    });

    $(".Container .list .list-item").click(function () {
        $(".s-circle")
            .removeClass("s-circle-active");
        $(this).find(".s-circle")
            .addClass("s-circle-active");

        console.log("salam");
    });
    $(".sec-one .right-part .item").click(function () {
        $(".sec-one .right-part .item")
            .removeClass("active-bac");
        $(this)
            .addClass("active-bac");

        console.log("salam");
    });


});

